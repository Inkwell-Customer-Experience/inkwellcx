import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BlueStar() {
  return (
    <span
      className="blue-star"
      style={{
        display: 'inline-block',
        width: 14,
        height: 14,
        background: 'var(--accent)',
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      }}
    />
  );
}

const services = [
  { tag: '01 / design', name: 'Website Design & Development', desc: 'Custom-built, fast-loading websites designed to convert. No templates. No compromises.' },
  { tag: '02 / hosting', name: 'Hosting & Management', desc: 'We host, update, secure, and manage your site on retainer — so it always performs.' },
  { tag: '03 / audit', name: 'Website Audits', desc: 'Deep analysis of your site\'s speed, UX, SEO, and conversions. Know exactly what\'s broken.' },
  { tag: '04 / seo', name: 'SEO Optimisation', desc: 'Rank higher, get found faster. We optimise for the searches that bring paying customers.' },
  { tag: '05 / analytics', name: 'Analytics & Reporting', desc: 'Monthly reports that show what\'s working, what isn\'t, and exactly what we\'re doing about it.' },
  { tag: '06 / cro', name: 'CTA & Conversion Optimisation', desc: 'We test and improve the buttons, forms, and flows that turn visitors into customers.' },
];

const testimonials = [
  {
    quote: '"We\'d been with our old agency for three years and nothing measurably improved. InkwellCX overhauled our site in 6 weeks and our enquiries literally doubled in the first month."',
    author: 'A client — Professional services',
  },
  {
    quote: '"The monthly reports showed us exactly where visitors were dropping off and why. Once they fixed it, our lead form submissions went through the roof. Real data, real results."',
    author: 'A client — Property services',
  },
  {
    quote: '"Finally, an agency that actually measures things. The audit alone was eye-opening — I had no idea my site was losing 40% of visitors before they even saw my offer."',
    author: 'A client — Technology sector',
  },
];

const processSteps = [
  { num: '01', title: 'Audit', desc: 'We dissect your current site — speed, UX, SEO, conversions — and identify exactly what\'s costing you.' },
  { num: '02', title: 'Fix', desc: 'We rebuild or redesign with conversion and performance baked in from the first line of code.' },
  { num: '03', title: 'Optimise', desc: 'Launch is just the beginning. We run monthly improvements — A/B tests, copy tweaks, speed gains.' },
  { num: '04', title: 'Grow', desc: 'With SEO and analytics compounding month-on-month, your site becomes a genuine growth asset.' },
];

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="page-fade-in">
      {/* ── HERO ── */}
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
            <button className="btn-primary" onClick={() => go('/contact')}>
              Get a Free Audit →
            </button>
            <a href="https://wa.me/27710921755" className="btn-ghost" target="_blank" rel="noopener noreferrer">
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
          <div className="metric-num">140+</div>
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
            {services.map((s) => (
              <div className="service-card" key={s.tag}>
                <span className="service-tag">{s.tag}</span>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE DIFFERENCE ── */}
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ gap: 60 }}>
            <div>
              <span className="page-tag">// the inkwellcx difference</span>
              <h2 className="section-headline" style={{ marginBottom: 16 }}>
                We don't build websites.<br />We build growth engines.
              </h2>
              <p className="body-copy" style={{ marginBottom: 32 }}>
                Most agencies hand you a site and disappear. We stay in your corner — optimising,
                reporting, and improving every single month.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { title: 'Ongoing, not once-off', desc: 'Retainer model means we\'re constantly improving your site — not just building and billing.' },
                  { title: 'Results you can measure', desc: 'Every decision is data-driven. You\'ll see exactly what changed and what it delivered.' },
                  { title: 'Full-stack CX focus', desc: 'Design, speed, SEO, copy, and UX — all aligned toward one goal: more conversions.' },
                  { title: 'South Africa–based. Always reachable.', desc: 'Real people, real time zone. No outsourced support, no 3-day email threads.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--green)', fontFamily: "'Space Mono', monospace", fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                    <div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{item.title}</div>
                      <p className="body-copy" style={{ fontSize: 11 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="comparison-table">
                <div className="comparison-header">
                  <div />
                  <div className="comp-head">Typical Agency</div>
                  <div className="comp-head">InkwellCX</div>
                </div>
                {[
                  'Ongoing optimisation',
                  'Monthly reporting',
                  'Conversion focus',
                  'SEO included',
                  'Performance guarantee',
                  'Fixed monthly cost',
                ].map((row) => (
                  <div className="comparison-row" key={row}>
                    <div className="comp-label">{row}</div>
                    <div className="comp-no">✕</div>
                    <div className="comp-yes">✓</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="section">
        <div className="container">
          <span className="page-tag">// real results</span>
          <h2 className="section-headline" style={{ marginBottom: 40 }}>
            Numbers that matter. Not vanity metrics.
          </h2>
          <div className="results-grid">
            {[
              { num: '3.4×', desc: 'Average conversion rate increase within 90 days of launch — across all active clients.', source: 'Avg. across InkwellCX client portfolio' },
              { num: '-62%', desc: 'Reduction in page load time after our performance optimisation. Faster sites rank better and convert more.', source: 'Avg. load time improvement on managed sites' },
              { num: '+218%', desc: 'Organic traffic growth in the first 6 months for clients on our SEO + management retainer.', source: 'Avg. 6-month organic traffic growth' },
            ].map((r, i) => (
              <div key={i} style={{ padding: '36px 32px', borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 48, color: 'var(--accent)', lineHeight: 1, marginBottom: 12 }}>{r.num}</div>
                <p className="body-copy" style={{ marginBottom: 16 }}>{r.desc}</p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted-dark)', fontStyle: 'italic' }}>{r.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="container">
          <span className="page-tag">// how it works</span>
          <h2 className="section-headline" style={{ marginBottom: 40 }}>
            From audit to growth, we have a clear path.
          </h2>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-step" key={step.num}>
                <span className="step-number">step {step.num}</span>
                <div className="step-title">{step.title}</div>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
            <div>
              <span className="page-tag">// featured work</span>
              <h2 className="section-headline">Websites built to perform.</h2>
            </div>
            <button className="btn-ghost" onClick={() => go('/services')} style={{ flexShrink: 0 }}>
              View All →
            </button>
          </div>
          <div className="featured-work-grid">
            {[
              { title: 'WA Fourie Inc', meta: 'Law firm', url: 'https://onlymechris.github.io/Wa-Fourie/', link: 'Demo — WA Fourie Inc' },
              { title: 'Agrisilo', meta: 'Agriculture', url: 'https://onlymechris.github.io/agrisilo/', link: 'Demo — Agrisilo' },
            ].map((work, i) => (
              <div
                key={i}
                style={{
                  borderRight: i === 0 ? '1px solid var(--border)' : 'none',
                  background: 'var(--surface)',
                }}
              >
                <div
                  style={{
                    height: 200,
                    background: 'var(--bg)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {/* Mock browser frame */}
                  <div style={{ width: '85%', height: '80%', background: 'var(--surface)', borderRadius: 6, overflow: 'hidden' }}>
                    <div style={{ height: 10, background: 'var(--border)', margin: '8px 8px 6px', borderRadius: 2 }} />
                    <div style={{ background: 'var(--bg)', margin: '0 8px', borderRadius: 4, padding: '10px 10px' }}>
                      <div style={{ height: 5, background: 'var(--border)', borderRadius: 2, marginBottom: 5, width: '70%' }} />
                      <div style={{ height: 5, background: 'var(--border)', borderRadius: 2, marginBottom: 5, width: '50%' }} />
                      <div style={{ height: 20, background: 'var(--accent)', borderRadius: 4, width: '40%', marginBottom: 8 }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, margin: '0 8px' }}>
                      <div style={{ height: 30, background: 'var(--bg)', borderRadius: 3 }} />
                      <div style={{ height: 30, background: 'var(--bg)', borderRadius: 3 }} />
                      <div style={{ height: 30, background: 'var(--bg)', borderRadius: 3 }} />
                    </div>
                  </div>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{work.title}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted-dark)', marginBottom: 8 }}>{work.meta}</div>
                  <a href={work.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--blue-link)', textDecoration: 'none' }}
                  >
                    {work.link} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="container">
          <span className="page-tag">// client feedback</span>
          <h2 className="section-headline" style={{ marginBottom: 40 }}>Don't take our word for it.</h2>
          <div>
            {testimonials.map((t, i) => (
              <div className="testimonial-row" key={i}>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-meta">
                  <div className="testimonial-author">{t.author}</div>
                  <div className="stars-row">
                    {[1,2,3,4,5].map(n => <BlueStar key={n} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(31,111,235,0.06) 0%, rgba(31,111,235,0.01) 100%)',
              border: '1px solid rgba(31,111,235,0.2)',
              borderRadius: 12,
              padding: '64px 48px',
              textAlign: 'center',
            }}
          >
            <span className="status-badge" style={{ marginBottom: 24, display: 'inline-flex' }}>
              <span className="pulse-dot" />
              limited slots available
            </span>
            <h2 className="section-headline" style={{ maxWidth: 600, margin: '0 auto 16px' }}>
              Ready to turn your website into your best salesperson?
            </h2>
            <p className="body-copy" style={{ maxWidth: 480, margin: '0 auto 32px' }}>
              Start with a free audit. We'll show you exactly what your site is costing you —
              and exactly how to fix it. No fluff, no obligation.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => go('/contact')}>
                Get Your Free Audit →
              </button>
              <a href="https://wa.me/27710921755" className="btn-ghost" target="_blank" rel="noopener noreferrer">
                💬 Chat on WhatsApp
              </a>
            </div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted-dark)', marginTop: 20 }}>
              No credit card. No commitment. Just clarity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
