export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';
import { auditFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Website Audit Services - InkwellCX | SEO, Speed & Conversion Review',
  description:
    'Website audit services covering SEO, speed, Core Web Vitals, mobile usability, UX, conversion issues, and priority fixes.',
  alternates: {
    canonical: 'https://inkwellcx.com/website-audit/',
  },
};

export default function WebsiteAuditLanding() {
  return (
    <ServiceLandingPage
      eyebrow="// website audit services"
      title={
        <>
          Find the issues costing your website{' '}
          <span className="outline">leads.</span>
        </>
      }
      intro="A website audit gives you a clear, prioritised view of what is slowing the site down, confusing visitors, weakening SEO, or blocking enquiries."
      serviceName="Website Audit Services"
      serviceDescription="Website audit covering performance, SEO, UX, conversion, mobile, and security issues."
      path="/website-audit/"
      features={[
        {
          title: 'SEO and crawl review',
          body: 'We check metadata, headings, indexability, canonicals, internal links, structured data, and content gaps.',
        },
        {
          title: 'Performance and mobile review',
          body: 'The audit looks at speed, Core Web Vitals, responsive behaviour, touch targets, and mobile friction.',
        },
        {
          title: 'Conversion review',
          body: 'We identify unclear messaging, weak calls to action, form friction, trust gaps, and missed enquiry paths.',
        },
      ]}
      outcomes={[
        'Prioritised fixes instead of vague advice',
        'Technical SEO and speed findings',
        'UX and conversion opportunities',
        'A practical roadmap for what to fix first',
      ]}
      faqs={auditFaqs}
    />
  );
}

