export const dynamic = 'force-static';

import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/config/constants';
import { StructuredData } from '@/components/StructuredData';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'High-Converting Websites & Web Design Services',
  description: site.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'InkwellCX - High-Converting Websites & Web Design Services',
    description: site.description,
    url: '/',
  },
  twitter: {
    title: 'InkwellCX - High-Converting Websites & Web Design Services',
    description: site.description,
  },
};

export default function Home() {
  return (
    <main id="main-content" className="page-fade-in">
      <StructuredData
        data={[
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
          serviceSchema(
            'Website Design and SEO Services',
            'High-converting website design, SEO, hosting, audits, analytics, and ongoing website optimisation.',
            '/',
          ),
        ]}
      />
      {/* Page Hero */}
      <section
        style={{
          padding: '80px 0 64px',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
        }}
      >
        <div className="container">
          {/* Status badge */}
          <div style={{ marginBottom: 32 }}>
            <span className="status-badge">
              <span className="pulse-dot" />
              accepting new clients — limited slots this month
            </span>
          </div>

          {/* Hero headline */}
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 24 }}>
            Your website should<br />
            convert, not just{' '}
            <span className="outline">perform.</span>
          </h1>

          <p className="body-copy" style={{ maxWidth: 540, marginBottom: 36 }}>
            InkwellCX designs, builds, and continuously optimises websites that turn visitors into
            paying customers — with measurable results every month.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 64 }}>
            <Link href="/contact" className="btn-primary">
              Get a Free Audit →
            </Link>
            <a href={config.contact.whatsappUrl} className="btn-ghost" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp Us
            </a>
          </div>

          {/* Terminal block */}
          <div className="terminal" style={{ maxWidth: 560 }}>
            <div>$ npm run inkwell --goal=more-conversions</div>
            <div className="response">
              ✓ Analysing site performance...<br />
              ✓ Identifying conversion leaks...<br />
              ✓ Building optimisation plan...<br />
              → Ready. Your site will convert 3× better.
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS BAR ── */}
      <div className="metrics-bar">
        <div className="metric-cell">
          <div className="metric-num">3×</div>
          <div className="metric-label">avg. conversion lift</div>
        </div>
        <div className="metric-cell">
          <div className="metric-num">48h</div>
          <div className="metric-label">audit turnaround</div>
        </div>
        <div className="metric-cell">
          <div className="metric-num">98%</div>
          <div className="metric-label">client retention</div>
        </div>
        <div className="metric-cell">
          <div className="metric-num">50+</div>
          <div className="metric-label">sites built</div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <span className="page-tag">// what we do</span>
          <h2 className="section-headline" style={{ maxWidth: 560, marginBottom: 8 }}>
            One team. Every tool your website needs to grow.
          </h2>
          <p className="body-copy" style={{ maxWidth: 500, marginBottom: 40 }}>
            From first launch to ongoing optimisation — we handle everything so you don't have to.
          </p>

          <div className="services-grid">
            {[
              { tag: '01 / design', name: 'Website Design & Development', desc: 'Custom-built, fast-loading websites designed to convert. No templates. No compromises.' },
              { tag: '02 / hosting', name: 'Hosting & Management', desc: 'We host, update, secure, and manage your site on retainer — so it always performs.' },
              { tag: '03 / audit', name: 'Website Audits', desc: 'Deep analysis of your site\'s speed, UX, SEO, and conversions. Know exactly what\'s broken.' },
              { tag: '04 / seo', name: 'SEO Optimisation', desc: 'Rank higher, get found faster. We optimise for the searches that bring paying customers.' },
              { tag: '05 / analytics', name: 'Analytics & Reporting', desc: 'Monthly reports that show what\'s working, what isn\'t, and exactly what we\'re doing about it.' },
              { tag: '06 / cro', name: 'CTA & Conversion Optimisation', desc: 'We test and improve the buttons, forms, and flows that turn visitors into customers.' },
            ].map((s) => (
              <div className="service-card" key={s.tag}>
                <span className="service-tag">{s.tag}</span>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
