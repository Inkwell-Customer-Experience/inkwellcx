import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const auditItems = [
  'Page speed & Core Web Vitals',
  'Mobile responsiveness & UX',
  'SEO health & keyword gaps',
  'Conversion funnel analysis',
  'CTA effectiveness & placement',
  'Analytics & tracking accuracy',
  'Security & technical health',
];

const scoreRows = [
  { label: 'Page Speed', pct: 38, color: '#E84545' },
  { label: 'Mobile UX', pct: 55, color: '#F5A623' },
  { label: 'SEO Health', pct: 62, color: '#F5A623' },
  { label: 'Conversions', pct: 28, color: '#E84545' },
  { label: 'Analytics', pct: 45, color: '#F5A623' },
];

const auditFeatures = [
  { icon: '⚡', title: '48-Hour Turnaround', desc: 'Submit your site on Monday, have a full report by Wednesday. No waiting around.' },
  { icon: '📋', title: 'Prioritised Action Plan', desc: 'Not just a score — a clear list of what to fix first, ranked by impact on your bottom line.' },
  { icon: '💰', title: 'Revenue Impact Estimate', desc: 'We translate technical issues into Rand estimates — so you know exactly what fixing it is worth.' },
  { icon: '🎯', title: 'Free for Qualified Businesses', desc: 'If your business is a fit for our services, the audit costs you nothing. No strings attached.' },
];

export default function Audit() {
  const navigate = useNavigate();
  const barsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      if (barsRef.current) {
        barsRef.current.querySelectorAll('.score-bar-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width');
        });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="page-fade-in">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// website audits</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            Find out what your website is{' '}
            <span className="outline">actually</span> costing you.
          </h1>
          <p className="body-copy" style={{ maxWidth: 560, marginBottom: 32 }}>
            Most websites lose over 60% of their potential customers to slow load times, confusing
            layouts, and weak calls to action. Our audit reveals every single one of those leaks.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => go('/contact')}>Request Your Free Audit →</button>
            <a href="https://wa.me/27710921755" className="btn-ghost" target="_blank" rel="noopener noreferrer">💬 Ask a Question</a>
          </div>
        </div>
      </section>

      {/* Main audit content */}
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ gap: 60, marginBottom: 64 }}>
            <div>
              <span className="page-tag">// what we audit</span>
              <h2 className="section-headline" style={{ marginBottom: 16 }}>A 360° view of why your site isn't converting.</h2>
              <p className="body-copy" style={{ marginBottom: 24 }}>
                We don't just check your Google speed score. We conduct a thorough analysis across
                five dimensions — and give you a prioritised action plan, not just a list of problems.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {auditItems.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--green)', fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" ref={barsRef}>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Sample Audit Report</p>
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: 'var(--text)', marginBottom: 4 }}>yoursite.co.za</p>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted)', marginBottom: 24 }}>Audit run: April 2025</p>
              {scoreRows.map((row) => (
                <div className="score-bar-row" key={row.label}>
                  <div className="score-bar-label">{row.label}</div>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill"
                      data-width={`${row.pct}%`}
                      style={{ width: '0%' }}
                    />
                  </div>
                  <div className="score-bar-val" style={{ color: row.color }}>{row.pct}</div>
                </div>
              ))}
              <div style={{ marginTop: 24, padding: 16, background: 'var(--bg)', borderRadius: 6, border: '1px solid var(--border)' }}>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--text)' }}>Key finding:</strong> Your site is losing an estimated{' '}
                  <strong style={{ color: '#E84545' }}>R48,000/month</strong> in potential revenue due to slow load times and poor mobile experience.
                </p>
              </div>
            </div>
          </div>

          {/* Audit features */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '1px solid var(--border)', marginBottom: 64 }}>
            {auditFeatures.map((f, i) => (
              <div
                key={f.title}
                style={{
                  padding: '28px',
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  background: 'var(--surface)',
                }}
              >
                <div className="icon-box">{f.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 8 }}>{f.title}</h3>
                <p className="body-copy" style={{ fontSize: 11 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(31,111,235,0.06) 0%, rgba(31,111,235,0.01) 100%)',
            border: '1px solid rgba(31,111,235,0.2)',
            borderRadius: 12,
            padding: '48px',
            textAlign: 'center',
          }}>
            <h2 className="section-headline" style={{ marginBottom: 12 }}>Get your free audit today.</h2>
            <p className="body-copy" style={{ maxWidth: 440, margin: '0 auto 28px' }}>We have limited slots each month. Claim yours before they're gone.</p>
            <button className="btn-primary" onClick={() => go('/contact')}>Request My Free Audit →</button>
          </div>
        </div>
      </section>
    </main>
  );
}
