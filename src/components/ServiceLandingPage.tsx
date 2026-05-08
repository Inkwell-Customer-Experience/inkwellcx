import Link from 'next/link';
import type { ReactNode } from 'react';
import { FAQSection, type FAQItem } from './FAQSection';
import { StructuredData } from './StructuredData';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo';

type ServiceLandingPageProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  serviceName: string;
  serviceDescription: string;
  path: string;
  features: { title: string; body: string }[];
  outcomes: string[];
  faqs: FAQItem[];
};

export function ServiceLandingPage({
  eyebrow,
  title,
  intro,
  serviceName,
  serviceDescription,
  path,
  features,
  outcomes,
  faqs,
}: ServiceLandingPageProps) {
  return (
    <main className="page-fade-in">
      <StructuredData
        data={[
          serviceSchema(serviceName, serviceDescription, path),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: serviceName, path },
          ]),
          faqSchema(faqs),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">{eyebrow}</span>
          <h1 className="hero-headline" style={{ maxWidth: 760, marginBottom: 20 }}>
            {title}
          </h1>
          <p className="body-copy" style={{ maxWidth: 620 }}>
            {intro}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
            <Link href="/contact/" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/audit/" className="btn-ghost">
              Start With an Audit
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="page-tag">// what is included</span>
          <h2 className="section-headline" style={{ maxWidth: 620, marginBottom: 36 }}>
            Built for search visibility, speed, and enquiries.
          </h2>
          <div className="services-grid">
            {features.map((feature) => (
              <div className="service-card" key={feature.title}>
                <span className="service-tag">Included</span>
                <div className="service-name">{feature.title}</div>
                <p className="service-desc">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="page-tag">// why it works</span>
              <h2 className="section-headline" style={{ marginBottom: 20 }}>
                A website should give buyers a clear next step.
              </h2>
              <p className="body-copy">
                We keep the build lean, write around real customer intent, and structure each page
                so search engines and visitors can quickly understand who you help, what you offer,
                and how to contact you.
              </p>
            </div>
            <div className="card">
              <ul className="pricing-features" style={{ marginBottom: 0 }}>
                {outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
