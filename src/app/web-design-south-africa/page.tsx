export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';
import { webDesignFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Web Design South Africa - InkwellCX | SEO-Ready Business Websites',
  description:
    'Web design in South Africa for small businesses that need fast, mobile-friendly, SEO-ready websites built to generate enquiries.',
  alternates: {
    canonical: 'https://inkwellcx.com/web-design-south-africa/',
  },
};

export default function WebDesignSouthAfrica() {
  return (
    <ServiceLandingPage
      eyebrow="// web design south africa"
      title={
        <>
          Web design for South African businesses that need{' '}
          <span className="outline">enquiries.</span>
        </>
      }
      intro="InkwellCX builds fast, mobile-friendly websites for South African businesses that need a clearer online presence, stronger search visibility, and a smoother path from visitor to lead."
      serviceName="Web Design South Africa"
      serviceDescription="SEO-ready website design and development for South African businesses."
      path="/web-design-south-africa/"
      features={[
        {
          title: 'Mobile-first custom design',
          body: 'Layouts are built around the way customers browse, compare, and contact businesses from phones and desktops.',
        },
        {
          title: 'SEO-ready page structure',
          body: 'Clear headings, internal links, metadata, schema, and search-friendly service pages are included from launch.',
        },
        {
          title: 'Fast, managed launch',
          body: 'We keep the build lean, avoid bloated themes, and support the launch with hosting and ongoing management options.',
        },
      ]}
      outcomes={[
        'Clear service pages for Google and buyers',
        'Fast-loading, responsive user experience',
        'Contact paths for email, WhatsApp, and forms',
        'Launch support plus monthly optimisation options',
      ]}
      faqs={webDesignFaqs}
    />
  );
}

