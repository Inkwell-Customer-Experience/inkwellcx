export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';
import { maintenanceFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Website Maintenance Services - InkwellCX | Updates, SEO & Support',
  description:
    'Website maintenance services for South African businesses, including updates, monitoring, SEO check-ins, performance reviews, and ongoing support.',
  alternates: {
    canonical: 'https://inkwellcx.com/website-maintenance/',
  },
};

export default function WebsiteMaintenance() {
  return (
    <ServiceLandingPage
      eyebrow="// website maintenance"
      title={
        <>
          Keep your website fast, current, and{' '}
          <span className="outline">looked after.</span>
        </>
      }
      intro="Our maintenance retainers help small businesses keep their websites updated, monitored, and improving month after month without chasing developers for every small change."
      serviceName="Website Maintenance Services"
      serviceDescription="Website maintenance, updates, monitoring, SEO check-ins, and support."
      path="/website-maintenance/"
      features={[
        {
          title: 'Content and site updates',
          body: 'Monthly changes, small edits, service updates, and practical improvements to keep the site useful.',
        },
        {
          title: 'Performance monitoring',
          body: 'We keep an eye on speed, uptime, Core Web Vitals, and basic technical issues that can affect search and conversions.',
        },
        {
          title: 'SEO check-ins',
          body: 'Retainers include ongoing search review so the site keeps moving instead of going stale after launch.',
        },
      ]}
      outcomes={[
        'Fewer stale pages and broken details',
        'Faster response when updates are needed',
        'Ongoing search and conversion improvements',
        'Support through WhatsApp and email',
      ]}
      faqs={maintenanceFaqs}
    />
  );
}

