import type { FAQItem } from '@/components/FAQSection';
import { absoluteUrl, site } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: absoluteUrl('/logo-dark.svg'),
    description: site.description,
    email: site.email,
    telephone: site.phone,
    areaServed: site.areaServed,
    priceRange: 'R999-R599/mo',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: site.email,
      telephone: site.phone,
      url: absoluteUrl('/contact/'),
    },
    sameAs: site.socialProfiles,
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    description,
    provider: {
      '@id': `${site.url}/#organization`,
    },
    areaServed: site.areaServed,
    serviceType: name,
    url: absoluteUrl(path),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

