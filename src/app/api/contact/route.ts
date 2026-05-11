import { NextResponse } from 'next/server';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

const projectTypes = new Set([
  'New Website',
  'Website Audit',
  'SEO Optimization',
  'Retainer/Management',
  'Other',
]);

const rateLimitWindowMs = 60 * 60 * 1000;
const maxRequestsPerWindow = 5;
const submissions = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  businessName?: unknown;
  website?: unknown;
  projectType?: unknown;
  message?: unknown;
};

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidHttpUrl(value: string) {
  if (!value) {
    return true;
  }

  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  return forwardedFor?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = submissions.get(ip);

  if (!current || current.resetAt <= now) {
    submissions.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (current.count >= maxRequestsPerWindow) {
    return true;
  }

  current.count += 1;
  return false;
}

function validate(payload: ContactPayload) {
  const data = {
    name: text(payload.name),
    email: text(payload.email).toLowerCase(),
    businessName: text(payload.businessName),
    website: text(payload.website),
    projectType: text(payload.projectType),
    message: text(payload.message),
  };

  if (data.name.length < 2 || data.name.length > 80) {
    return { error: 'Please enter a valid name.', data };
  }

  if (!isValidEmail(data.email) || data.email.length > 254) {
    return { error: 'Please enter a valid email address.', data };
  }

  if (data.businessName.length > 120) {
    return { error: 'Business name is too long.', data };
  }

  if (data.website.length > 2048 || !isValidHttpUrl(data.website)) {
    return { error: 'Please enter a valid website URL.', data };
  }

  if (!projectTypes.has(data.projectType)) {
    return { error: 'Please choose a project type.', data };
  }

  if (data.message.length < 10 || data.message.length > 2000) {
    return { error: 'Please enter a message between 10 and 2000 characters.', data };
  }

  return { data };
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages. Please try again later.' },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { data, error } = validate(payload);

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const serviceId =
    process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId =
    process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey =
    process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error('Contact form EmailJS configuration is incomplete.');
    return NextResponse.json(
      { error: 'Contact form is temporarily unavailable.' },
      { status: 503 },
    );
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: site.url,
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        user_name: data.name,
        user_email: data.email,
        business_name: data.businessName,
        website_url: data.website,
        project_type: data.projectType,
        message: data.message,
      },
    }),
  });

  if (!response.ok) {
    console.error('EmailJS contact submission failed.', {
      status: response.status,
      statusText: response.statusText,
    });
    return NextResponse.json(
      { error: 'Failed to send message. Please contact us directly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
