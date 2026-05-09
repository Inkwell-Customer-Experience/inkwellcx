export const dynamic = 'force-static';

import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection } from '@/components/FAQSection';
import { StructuredData } from '@/components/StructuredData';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo';
import { seoFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'SEO Services & Growth Strategy — InkwellCX | Organic Traffic',
  description: 'SEO services combining technical optimization, content strategy, and local search. Increase organic traffic and rank higher on Google.',
  alternates: {
    canonical: 'https://inkwellcx.com/seo/',
  },
};

export const viewport = 'width=device-width, initial-scale=1.0';

export default function SEO() {
  return (
    <main id="main-content" className="page-fade-in">
      <StructuredData
        data={[
          serviceSchema(
            'SEO Services',
            'Technical SEO, content strategy, local search optimisation, and organic growth support for South African businesses.',
            '/seo/',
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'SEO Services', path: '/seo/' },
          ]),
          faqSchema(seoFaqs),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// seo & growth</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            Rank higher.<br />Get found faster.<br /><span className="outline">Grow sustainably.</span>
          </h1>
          <p className="body-copy" style={{ maxWidth: 560 }}>
            We combine technical SEO, content strategy, and local search optimization to bring in the customers actually looking for you.
          </p>
          <div style={{ marginTop: 36 }}>
            <Link href="/contact" className="btn-primary">Start Growing →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="page-tag">// our approach</span>
          <h2 className="section-headline" style={{ marginBottom: 40 }}>Three pillars of growth.</h2>
          
          <div className="seo-pillars-grid">
            {[
              {
                num: '01',
                title: 'Technical SEO',
                desc: 'Site architecture, page speed, schema markup, mobile optimization. The foundation everything else builds on.',
              },
              {
                num: '02',
                title: 'Content Strategy',
                desc: 'Keyword research, topic clusters, content gaps. We build the content strategy that attracts your ideal customers.',
              },
              {
                num: '03',
                title: 'Local Search',
                desc: 'Google Business Profile optimization, local citations, review management. Dominate your local market.',
              },
            ].map((item) => (
              <div key={item.num}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--accent)', marginBottom: 12 }}>{item.num}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{item.title}</h3>
                <p className="body-copy">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-headline" style={{ marginBottom: 16 }}>Ready to rank?</h2>
          <p className="body-copy" style={{ marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Let's audit your current SEO and build a strategy that drives real growth.
          </p>
          <Link href="/contact" className="btn-primary">Let's Talk SEO</Link>
        </div>
      </section>

      <FAQSection faqs={seoFaqs} />
    </main>
  );
}
