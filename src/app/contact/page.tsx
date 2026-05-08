export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { config } from '@/config/constants';
import { StructuredData } from '@/components/StructuredData';
import { breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact — Get in Touch with InkwellCX | Web Design Agency',
  description: 'Contact InkwellCX for web design, SEO, and digital marketing services. Get a free consultation and discuss your next project.',
  alternates: {
    canonical: 'https://inkwellcx.com/contact/',
  },
};

export const viewport = 'width=device-width, initial-scale=1.0';

export default function Contact() {
  return (
    <main className="page-fade-in">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ])}
      />
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// let's talk</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            Ready to grow?<br />Let's<br /><span className="outline">connect.</span>
          </h1>
          <p className="body-copy" style={{ maxWidth: 560 }}>
            Have a question? Want to discuss your next project? We're here and ready to help. Reach out however works best for you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ gap: 60 }}>
            <div>
              <span className="page-tag">// get in touch</span>
              <h2 className="section-headline" style={{ marginBottom: 32 }}>Multiple ways to reach us.</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 }}>Email</div>
                  <a href={`mailto:${config.contact.email}`} style={{ color: 'var(--blue-link)', textDecoration: 'none' }}>
                    {config.contact.email}
                  </a>
                </div>
                
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 }}>WhatsApp</div>
                  <a href={config.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-link)', textDecoration: 'none' }}>
                    +27 71 092 1755
                  </a>
                </div>

                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 }}>Instagram</div>
                  <a href={config.contact.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-link)', textDecoration: 'none' }}>
                    @inkwell_cx
                  </a>
                </div>

                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 }}>Response Time</div>
                  <p className="body-copy">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div>
              <span className="page-tag">// contact form</span>
              <h2 className="section-headline" style={{ marginBottom: 32 }}>Send us a message.</h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
