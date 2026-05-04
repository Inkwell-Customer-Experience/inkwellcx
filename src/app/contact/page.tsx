export const dynamic = 'force-static';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Get in Touch with InkwellCX | Web Design Agency',
  description: 'Contact InkwellCX for web design, SEO, and digital marketing services. Get a free consultation and discuss your next project.',
  alternates: {
    canonical: 'https://inkwellcx.com/contact',
  },
};

export const viewport = 'width=device-width, initial-scale=1.0';

export default function Contact() {
  return (
    <main className="page-fade-in">
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
                  <a href="mailto:support@inkwellcx.com" style={{ color: 'var(--blue-link)', textDecoration: 'none' }}>
                    support@inkwellcx.com
                  </a>
                </div>
                
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 }}>WhatsApp</div>
                  <a href="https://wa.me/27710921755" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-link)', textDecoration: 'none' }}>
                    +27 71 092 1755
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
              
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 32 }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-input" placeholder="Your name" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="your@email.com" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Type</label>
                    <select className="form-input" style={{ appearance: 'none' }}>
                      <option>Select one...</option>
                      <option>New Website</option>
                      <option>Website Audit</option>
                      <option>SEO Optimization</option>
                      <option>Retainer/Management</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-input" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
