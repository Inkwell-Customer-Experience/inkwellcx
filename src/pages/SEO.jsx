import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const seoPillars = [
  { icon: '🔧', title: 'Technical SEO', desc: 'Site speed, crawlability, schema markup, Core Web Vitals, canonical tags, and indexing fixes. The foundation everything else is built on.' },
  { icon: '📝', title: 'Content Strategy', desc: 'We identify the keywords your customers actually search and build content that ranks, educates, and converts — not just filler articles.' },
  { icon: '📍', title: 'Local SEO', desc: 'Dominate your local market with optimised Google Business profiles, local citations, and location-targeted content.' },
  { icon: '⚡', title: 'Speed Optimisation', desc: 'Google rewards fast sites. We compress, cache, and optimise until your Core Web Vitals are green — because speed is the cheapest SEO win there is.' },
];

const chartBars = [
  { h: 20, color: '#21262D' },
  { h: 25, color: '#21262D' },
  { h: 30, color: '#21262D' },
  { h: 38, color: 'rgba(31,111,235,0.4)' },
  { h: 48, color: 'rgba(31,111,235,0.5)' },
  { h: 60, color: 'rgba(31,111,235,0.6)' },
  { h: 75, color: '#1F6FEB' },
  { h: 90, color: '#3FB950' },
  { h: 100, color: '#3FB950' },
];

export default function SEO() {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="page-fade-in">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// seo & growth</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            Be found by the people<br />who are{' '}
            <span className="outline">ready to buy.</span>
          </h1>
          <p className="body-copy" style={{ maxWidth: 560 }}>
            We build sustainable organic growth — not tricks. Technical SEO, content strategy,
            and local optimisation that compounds month after month.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Approach + chart */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start', marginBottom: 64 }}>
            <div>
              <span className="page-tag">// our seo approach</span>
              <h2 className="section-headline" style={{ marginBottom: 16 }}>
                SEO that <span style={{ color: '#1F6FEB' }}>lasts</span>, not tricks that fade.
              </h2>
              <p className="body-copy" style={{ marginBottom: 16 }}>
                We've seen businesses burned by agencies promising page-1 rankings in 30 days.
                That's not how it works. Real SEO is a compound interest machine — it gets stronger every month.
              </p>
              <p className="body-copy" style={{ marginBottom: 28 }}>
                Our approach starts with your technical foundation, builds out your content structure,
                and optimises for the specific searches your ideal customers are making.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="card">
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, color: '#1F6FEB', marginBottom: 4 }}>+218%</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#7D8590' }}>Avg. traffic growth in 6 months</div>
                </div>
                <div className="card">
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, color: '#3FB950', marginBottom: 4 }}>4.2×</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#7D8590' }}>Avg. lead growth from organic</div>
                </div>
              </div>
            </div>

            {/* Traffic chart */}
            <div className="card">
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#484F58', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>
                Organic Traffic Growth — Novex Property Group
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 120, marginBottom: 16 }}>
                {chartBars.map((bar, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${bar.h}%`,
                      background: bar.color,
                      borderRadius: '3px 3px 0 0',
                    }}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#7D8590' }}>
                {['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr'].map(m => <span key={m}>{m}</span>)}
              </div>
              <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="pulse-dot" />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#7D8590' }}>
                  +280% organic sessions since SEO programme started
                </span>
              </div>
            </div>
          </div>

          {/* SEO pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '1px solid #21262D', marginBottom: 64 }}>
            {seoPillars.map((p, i) => (
              <div
                key={p.title}
                style={{
                  padding: '28px',
                  borderRight: i % 2 === 0 ? '1px solid #21262D' : 'none',
                  borderBottom: i < 2 ? '1px solid #21262D' : 'none',
                  background: '#111820',
                }}
              >
                <div className="icon-box">{p.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: '#E6EDF3', marginBottom: 8 }}>{p.title}</h3>
                <p className="body-copy" style={{ fontSize: 11 }}>{p.desc}</p>
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
            <h2 className="section-headline" style={{ marginBottom: 12 }}>Start growing your organic traffic today.</h2>
            <p className="body-copy" style={{ maxWidth: 480, margin: '0 auto 28px' }}>
              Book a free SEO audit and we'll show you exactly where you're leaving organic traffic on the table.
            </p>
            <button className="btn-primary" onClick={() => go('/contact')}>Get My Free SEO Audit →</button>
          </div>
        </div>
      </section>
    </main>
  );
}
