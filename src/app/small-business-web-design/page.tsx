export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';
import { webDesignFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Small Business Web Design - InkwellCX | Affordable SEO-Ready Sites',
  description:
    'Affordable small business web design with mobile-friendly pages, basic SEO setup, fast launch support, and ongoing website management.',
  alternates: {
    canonical: 'https://inkwellcx.com/small-business-web-design/',
  },
};

export default function SmallBusinessWebDesign() {
  return (
    <ServiceLandingPage
      eyebrow="// small business web design"
      title={
        <>
          Small business websites that look credible and{' '}
          <span className="outline">work hard.</span>
        </>
      }
      intro="We help small businesses replace thin, slow, or outdated websites with focused pages that explain the offer, build trust, and make it easy for customers to enquire."
      serviceName="Small Business Web Design"
      serviceDescription="Affordable, SEO-ready website design for small businesses."
      path="/small-business-web-design/"
      features={[
        {
          title: 'Simple packages',
          body: 'Start with a focused landing page or a small multi-page site, then add support as the business grows.',
        },
        {
          title: 'Trust-building content',
          body: 'We structure pages around services, location, contact details, common questions, and reasons to choose you.',
        },
        {
          title: 'No bloated setup',
          body: 'The site stays light, maintainable, and easy to improve instead of relying on heavy page builder stacks.',
        },
      ]}
      outcomes={[
        'A professional first impression',
        'Clear calls to action',
        'Search-friendly service content',
        'Room to grow into SEO and monthly support',
      ]}
      faqs={webDesignFaqs}
    />
  );
}

