export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { StructuredData } from '@/components/StructuredData';
import { breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About InkwellCX — Web Design Agency South Africa | Who We Are',
  description: 'About InkwellCX: South Africa–based web design and digital marketing agency building high-converting websites for ambitious businesses.',
  alternates: {
    canonical: 'https://inkwellcx.com/about/',
  },
};

export const viewport = 'width=device-width, initial-scale=1.0';

export default function About() {
  return (
    <main className="page-fade-in">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
        ])}
      />
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// about inkwellcx</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            We build growth<br />engines, not just<br /><span className="outline">websites.</span>
          </h1>
          <p className="body-copy" style={{ maxWidth: 560 }}>
            InkwellCX exists because we got tired of watching businesses waste money on websites that don't work. We're obsessed with performance, driven by data, and committed to your growth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ gap: 60 }}>
            <div>
              <span className="page-tag">// who we are</span>
              <h2 className="section-headline" style={{ marginBottom: 20 }}>South Africa–based. Always reachable.</h2>
              <p className="body-copy" style={{ marginBottom: 20 }}>
                We're a team of designers, developers, and strategists based in South Africa. No outsourced support, no email threads that take days. Real people, real time zone, real accountability.
              </p>
              <p className="body-copy" style={{ marginBottom: 20 }}>
                We work with ambitious businesses that understand the difference between cheap websites and converting websites. If you're serious about growth, so are we.
              </p>
            </div>
            <div>
              <span className="page-tag">// what we believe</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  'Websites are sales tools, not vanity projects.',
                  'Data beats opinion. Always.',
                  'Performance matters. Speed wins.',
                  'Good design is invisible. It just works.',
                  'Your success is our success.',
                ].map((belief) => (
                  <div key={belief} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--green)', fontWeight: 700, fontSize: 18, marginTop: 2 }}>✓</span>
                    <p className="body-copy">{belief}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-headline" style={{ marginBottom: 16 }}>Let's work together.</h2>
          <p className="body-copy" style={{ marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Whether you need a new site or a performance overhaul, we're ready to build your growth engine.
          </p>
          <a href="/contact" className="btn-primary">Get in Touch</a>
        </div>
      </section>
    </main>
  );
}
