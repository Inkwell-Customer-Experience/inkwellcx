export const dynamic = 'force-static';

import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection } from '@/components/FAQSection';
import { StructuredData } from '@/components/StructuredData';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo';
import { auditFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Free Website Audit — InkwellCX | Performance & SEO Analysis',
  description: 'Free website audit including performance analysis, SEO issues, conversion optimization, and UX review. Identify what\'s holding your site back.',
  alternates: {
    canonical: 'https://inkwellcx.com/audit/',
  },
};

export const viewport = 'width=device-width, initial-scale=1.0';

export default function Audit() {
  return (
    <main id="main-content" className="page-fade-in">
      <StructuredData
        data={[
          serviceSchema(
            'Website Audit',
            'Website performance, SEO, UX, security, mobile, and conversion audit with clear improvement priorities.',
            '/audit/',
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Website Audit', path: '/audit/' },
          ]),
          faqSchema(auditFaqs),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// website audit</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            Know exactly what's<br />holding your site<br /><span className="outline">back.</span>
          </h1>
          <p className="body-copy" style={{ maxWidth: 560 }}>
            Our detailed audit uncovers speed issues, conversion killers, SEO problems, and UX flaws. You'll get a clear roadmap of what's broken and how to fix it.
          </p>
          <div style={{ marginTop: 36 }}>
            <Link href="/contact" className="btn-primary">Get Your Audit →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="page-tag">// what we analyze</span>
          <h2 className="section-headline" style={{ marginBottom: 40 }}>Every metric that matters.</h2>
          
          <div className="services-grid">
            {[
              {
                icon: '⚡',
                title: 'Performance',
                desc: 'Page speed, Core Web Vitals, load time optimization, mobile performance.',
              },
              {
                icon: '📊',
                title: 'Conversions',
                desc: 'Form completion rates, CTA visibility, friction points, drop-off analysis.',
              },
              {
                icon: '🔍',
                title: 'SEO',
                desc: 'Technical SEO issues, keyword ranking, backlink profile, content gaps.',
              },
              {
                icon: '👥',
                title: 'User Experience',
                desc: 'Navigation clarity, visual hierarchy, mobile usability, accessibility.',
              },
              {
                icon: '🔒',
                title: 'Security',
                desc: 'SSL/TLS status, security headers, vulnerability scan, compliance issues.',
              },
              {
                icon: '📱',
                title: 'Mobile',
                desc: 'Responsive design, touch targets, viewport optimization, mobile-specific issues.',
              },
            ].map((item) => (
              <div key={item.title} style={{ padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="icon-box" style={{ fontSize: 24, width: 48, height: 48, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{item.title}</h3>
                <p className="body-copy" style={{ fontSize: 11 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-headline" style={{ marginBottom: 16 }}>Ready for clarity?</h2>
          <p className="body-copy" style={{ marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Get a comprehensive audit and actionable recommendations in 48 hours.
          </p>
          <Link href="/contact" className="btn-primary">Start Your Audit</Link>
        </div>
      </section>

      <FAQSection faqs={auditFaqs} />
    </main>
  );
}
