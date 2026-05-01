import { useEffect, useState } from 'react';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE;
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

const contactInfo = [
  { icon: '💬', label: 'WhatsApp (Fastest)', value: `+${WHATSAPP_PHONE.replace(/(..)(?=.)/g, '$1 ')}`, href: `https://wa.me/${WHATSAPP_PHONE}` },
  { icon: '📧', label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: '🕐', label: 'Response Time', value: 'Within 1 business day', href: null },
  { icon: '📍', label: 'Based in', value: 'South Africa (SAST)', href: null },
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    user_name: '',
    business_name: '',
    user_email: '',
    website_url: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load EmailJS
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => window.emailjs.init(EMAILJS_PUBLIC_KEY);
      document.head.appendChild(script);
    } else {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <main className="page-fade-in">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// get in touch</span>
          <h1 className="hero-headline" style={{ maxWidth: 640, marginBottom: 20 }}>
            Let's talk about what your website{' '}
            <span className="outline">could</span> be doing.
          </h1>
          <p className="body-copy" style={{ maxWidth: 520 }}>
            Fill in the form, send a WhatsApp, or email us directly. We'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ gridTemplateColumns: '1fr 1.3fr', gap: 80 }}>
            {/* Contact info */}
            <div>
              {contactInfo.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 28 }}>
                  <div style={{
                    width: 40, height: 40, background: 'var(--surface)',
                    border: '1px solid var(--border)', borderRadius: 6,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 15, color: 'var(--text)', textDecoration: 'none' }}>{item.value}</a>
                    ) : (
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 36, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: 28 }}>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 8 }}>Not sure what you need?</p>
                <p className="body-copy" style={{ fontSize: 11, marginBottom: 16 }}>
                  Request a free audit and we'll diagnose your site, identify the biggest opportunities,
                  and come back with a clear recommendation.
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Free Audit', 'No Commitment', '48h Turnaround'].map((tag) => (
                    <span key={tag} style={{
                      background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 20,
                      padding: '4px 12px', fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted)',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: 40 }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 22, color: 'var(--text)', marginBottom: 6 }}>Send us a message</h2>
              <p className="body-copy" style={{ fontSize: 11, marginBottom: 28 }}>We read every submission personally.</p>

              {status === 'success' ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 20, background: 'rgba(63,185,80,0.08)', border: '1px solid rgba(63,185,80,0.3)', borderRadius: 6 }}>
                  <span>✅</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--green)' }}>
                    Message received! We'll be in touch within one business day.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ opacity: status === 'sending' ? 0.6 : 1, pointerEvents: status === 'sending' ? 'none' : 'auto' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        name="user_name"
                        className="form-input"
                        placeholder="Jane Smith"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Business Name *</label>
                      <input
                        type="text"
                        name="business_name"
                        className="form-input"
                        placeholder="Acme Co."
                        value={formData.business_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-input"
                      placeholder="user@yourbusiness.com"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Website URL</label>
                    <input
                      name="website_url"
                      className="form-input"
                      placeholder="https://yoursite.co.za"
                      value={formData.website_url}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">What can we help you with? *</label>
                    <textarea
                      name="message"
                      className="form-input"
                      placeholder="Tell us about your business and what you're hoping to achieve. The more detail, the better."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>

                  {status === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 0 0', fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#ffb3b3' }}>
                      <span>⚠️</span>
                      <span>Oops! Something went wrong. Please try again or email support@inkwellcx.com.</span>
                    </div>
                  )}
                </form>
              )}

              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted-dark)', textAlign: 'center', marginTop: 16 }}>
                No spam. No sales calls without your permission. Just honest conversation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
