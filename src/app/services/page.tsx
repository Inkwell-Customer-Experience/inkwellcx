export const dynamic = 'force-static';

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Services — InkwellCX | Custom Website Development',
  description: 'Custom web design and development services. Entry-level to advanced websites optimized for conversions. Affordable packages starting at R999.',
  alternates: {
    canonical: 'https://inkwellcx.com/services',
  },
};

const pricingPlans = [
  {
    name: 'Entry level Website',
    price: 'R999',
    desc: 'Full-service growth for ambitious businesses ready to scale.',
    features: [
      'Single page landing website',
      'Simple SEO setup',
      'Mobile-friendly design',
      'Fast launch process',
      'Launch support included',
    ],
    featured: false,
    cta: 'Talk to Us',
  },
  {
    name: 'Basic Website',
    price: 'R1,750',
    originalPrice: 'R2,500',
    discount: '30%',
    period: '',
    desc: 'Basic website build with SEO included.',
    features: [
      'Up to 5-page custom website',
      'Basic on-page SEO setup',
      'Mobile-friendly design',
      'Fast launch process',
      'Launch support included',
    ],
    featured: false,
    launchOffer: true,
    cta: 'Get Started',
  },
  {
    name: 'Retainer Lite',
    price: 'R399',
    period: '/mo',
    desc: 'Monthly support for small sites, updates and monitoring.',
    features: [
      'Content updates and edits',
      'Performance monitoring',
      'Monthly SEO check-ins',
      'Security & uptime monitoring',
      'WhatsApp support',
    ],
    featured: false,
    cta: 'Start Retainer',
  },
  {
    name: 'Full Retainer',
    price: 'R599',
    period: '/mo',
    desc: 'Full monthly optimisation, updates, and SEO support.',
    features: [
      'Unlimited website updates',
      'Conversion and SEO optimisation',
      'Monthly strategy and reporting',
      'Priority WhatsApp support',
      'Performance and security monitoring',
    ],
    featured: true,
    cta: 'Get Started',
  },
];

export const viewport = 'width=device-width, initial-scale=1.0';

export default function Services() {
  return (
    <main className="page-fade-in">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// our services</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            Everything your website<br />needs to{' '}
            <span className="outline">perform.</span>
          </h1>
          <p className="body-copy" style={{ maxWidth: 560 }}>
            We don't sell projects. We build partnerships — and every service we offer is designed
            to compound into measurable, ongoing growth.
          </p>
        </div>
      </section>

      {/* Service detail cards */}
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ gap: 0, border: '1px solid var(--border)', marginBottom: 0 }}>
            {[
              {
                icon: '🎨',
                title: 'Website Design & Development',
                desc: 'Your website is your most valuable sales tool. We build custom sites from scratch — fast, responsive, and designed around conversion psychology. No page builders. No bloated themes.',
                features: [
                  'Custom design matched to your brand',
                  'Mobile-first, performance-optimised build',
                  'Conversion-focused layout and copy guidance',
                  'SEO-ready structure from day one',
                ],
                cta: 'Start a Project →',
              },
              {
                icon: '⚙️',
                title: 'Hosting & Ongoing Management',
                desc: 'Your retainer keeps your site fast, secure, and continuously improving. We handle all updates, backups, security monitoring, and monthly improvements — so you can focus on your business.',
                features: [
                  'Managed hosting on enterprise infrastructure',
                  'Weekly backups and security monitoring',
                  'Monthly content and optimisation updates',
                  '99.9% uptime SLA',
                ],
                cta: 'Enquire About Retainers →',
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '40px',
                  borderRight: i === 0 ? '1px solid var(--border)' : 'none',
                  background: 'var(--surface)',
                }}
              >
                <div className="icon-box" style={{ fontSize: 24, width: 48, height: 48 }}>{s.icon}</div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: 'var(--text)', marginBottom: 12 }}>{s.title}</h2>
                <p className="body-copy" style={{ marginBottom: 20 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                  {s.features.map((f) => (
                    <li key={f} style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)', display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ color: 'var(--green)' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">{s.cta}</Link>
              </div>
            ))}
          </div>

          <div className="services-grid" style={{ borderTop: 'none', marginTop: 0 }}>
            {[
              { icon: '🔍', title: 'Website Audits', desc: 'A detailed teardown of your site — speed, conversions, SEO, UX, and more. You\'ll know exactly what\'s holding you back.', cta: 'Learn More →', path: '/audit' },
              { icon: '📈', title: 'SEO & Growth', desc: 'Sustainable organic growth through technical SEO, content strategy, and local search optimisation.', cta: 'Learn More →', path: '/seo' },
              { icon: '📊', title: 'Analytics & Reporting', desc: 'We set up proper tracking and deliver clear monthly reports that show ROI in plain language.', cta: 'Get Started →', path: '/contact' },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '32px',
                  borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                  background: 'var(--surface)',
                }}
              >
                <div className="icon-box">{s.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 10 }}>{s.title}</h3>
                <p className="body-copy" style={{ fontSize: 11, marginBottom: 20 }}>{s.desc}</p>
                <Link href={s.path} className="btn-ghost" style={{ fontSize: 11 }}>{s.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container">
          <span className="page-tag">// pricing</span>
          <h2 className="section-headline" style={{ marginBottom: 8 }}>Simple, transparent monthly retainers.</h2>
          <p className="body-copy" style={{ marginBottom: 40 }}>No surprise invoices. Everything you need to grow, for a fixed monthly fee.</p>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div className={`pricing-card ${plan.featured ? 'featured' : ''} ${plan.launchOffer ? 'launch-offer' : ''}`} key={plan.name}>
                {plan.launchOffer && <div className="launch-badge">Launch Offer</div>}
                {plan.featured && <div className="featured-badge">Best Value</div>}
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-price">
                  {plan.originalPrice ? (
                    <>
                      <span style={{ color: 'var(--green)', fontWeight: 800, fontSize: 40 }}>{plan.price}</span>
                      <div></div>
                      <span style={{ textDecoration: 'line-through', color: 'var(--muted)', fontSize: 14, marginRight: 8 }}>{plan.originalPrice}</span>
                      <span style={{ fontSize: 12, color: 'var(--green)', marginLeft: 8, fontWeight: 700 }}>({plan.discount} OFF)</span>
                      <span>{plan.period}</span>
                    </>
                  ) : (
                    <>
                      {plan.price}<span>{plan.period}</span>
                    </>
                  )}
                </div>
                <p className="pricing-desc">{plan.desc}</p>
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 0 20px' }} />
                <ul className="pricing-features">
                  {plan.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link
                  href="/contact"
                  className={plan.featured ? 'btn-primary' : 'btn-ghost'}
                  style={{ textAlign: 'center', justifyContent: 'center', width: '100%', display: 'inline-flex' }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted-dark)', textAlign: 'center', marginTop: 28 }}>
            All plans include a free website audit to kick things off. Once-off builds available —{' '}
            <Link
              href="/contact"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--blue-link)', fontFamily: "'Space Mono', monospace", fontSize: 10 }}
            >
              request a quote
            </Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
