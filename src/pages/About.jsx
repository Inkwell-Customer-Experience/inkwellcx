import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const values = [
  { icon: '🎯', title: 'Results over vanity', desc: 'We don\'t chase awards or portfolio pieces. We chase leads, conversions, and revenue for you. If it doesn\'t move the needle, we don\'t do it.' },
  { icon: '📊', title: 'Radical transparency', desc: 'You always know what we\'re doing, what it cost, and what it delivered. Bad months get the same honest reporting as good ones.' },
  { icon: '🔄', title: 'Always improving', desc: 'We never assume a project is finished. We test, learn, and iterate — because the website that converts best today can almost always convert better tomorrow.' },
  { icon: '🤝', title: 'Partnership, not transactions', desc: 'We learn your business, your customers, and your goals. Our success is measured by your growth — not by how many projects we close.' },
];

export default function About() {
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
          <span className="page-tag">// about inkwellcx</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            We're not a web agency.<br />We're your{' '}
            <span className="outline">growth partner.</span>
          </h1>
          <p className="body-copy" style={{ maxWidth: 560 }}>
            InkwellCX was built for businesses that are tired of paying for websites that don't
            deliver. We combine design, tech, and strategy into one accountable team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Story */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start', marginBottom: 64 }}>
            <div>
              <span className="page-tag">// our story</span>
              <h2 className="section-headline" style={{ marginBottom: 20 }}>Built because agencies were letting businesses down.</h2>
              <p className="body-copy" style={{ marginBottom: 16 }}>
                We've seen it too many times: a business invests in a beautiful new website, gets
                excited at launch — and then absolutely nothing changes. No more leads. No better
                conversions. The agency is long gone.
              </p>
              <p className="body-copy" style={{ marginBottom: 16 }}>
                InkwellCX exists to change that. We started with a simple belief: a website is never
                "done". It needs to be tested, improved, and optimised constantly. And the only way
                to do that well is to stay in the relationship.
              </p>
              <p className="body-copy">
                So we built a model around retainers, not projects. We measure what matters. And we
                report everything — the wins and the losses — because accountability is how trust is built.
              </p>
            </div>

            <div>
              <div className="card" style={{ marginBottom: 20 }}>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 600, fontStyle: 'italic', color: '#E6EDF3', lineHeight: 1.5, marginBottom: 20 }}>
                  "A website should be your hardest-working employee. It should sell, educate, and convert — 24 hours a day."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: '#1F6FEB33', border: '1px solid rgba(31,111,235,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Space Mono', monospace", fontSize: 12, fontWeight: 700, color: '#1F6FEB'
                  }}>IK</div>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: '#E6EDF3' }}>Inkwell Team</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#7D8590' }}>InkwellCX Founders</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: '#1F6FEB', marginBottom: 4 }}>50+</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#7D8590' }}>Clients Served</div>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: '#3FB950', marginBottom: 4 }}>98%</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#7D8590' }}>Client Retention</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <span className="page-tag">// our values</span>
          <h2 className="section-headline" style={{ marginBottom: 32 }}>How we work.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '1px solid #21262D', marginBottom: 64 }}>
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  padding: '28px',
                  borderRight: i % 2 === 0 ? '1px solid #21262D' : 'none',
                  borderBottom: i < 2 ? '1px solid #21262D' : 'none',
                  background: '#111820',
                }}
              >
                <div className="icon-box">{v.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: '#E6EDF3', marginBottom: 8 }}>{v.title}</h3>
                <p className="body-copy" style={{ fontSize: 11 }}>{v.desc}</p>
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
            <h2 className="section-headline" style={{ marginBottom: 12 }}>
              Ready to work with a team that's invested in your results?
            </h2>
            <p className="body-copy" style={{ maxWidth: 440, margin: '0 auto 28px' }}>
              Let's start with a conversation. No sales pitch, no pressure.
            </p>
            <button className="btn-primary" onClick={() => go('/contact')}>Let's Talk →</button>
          </div>
        </div>
      </section>
    </main>
  );
}
