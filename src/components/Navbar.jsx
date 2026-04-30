import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (path) => {
    setMobileOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(13,17,23,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #21262D',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: 0,
            }}
            aria-label="InkwellCX home"
          >
            <img src="/InkWell1.png" alt="InkwellCX" style={{ height: 48, width: 'auto' }} />
          </button>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} aria-label="Main navigation">
            {[
              { path: '/services', label: '/services' },
              { path: '/audit', label: '/audit' },
              { path: '/seo', label: '/seo' },
              { path: '/about', label: '/about' },
            ].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => ({
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: isActive ? '#E6EDF3' : '#7D8590',
                  letterSpacing: '0.08em',
                  padding: '8px 12px',
                  borderRadius: 4,
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                })}
                onMouseEnter={e => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.color = '#E6EDF3'; }}
                onMouseLeave={e => { if (!e.currentTarget.getAttribute('aria-current')) e.currentTarget.style.color = '#7D8590'; }}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              className="btn-primary"
              onClick={() => handleNav('/contact')}
              style={{ fontSize: 11, padding: '9px 16px', display: 'flex' }}
            >
              → Let's Talk
            </button>
            {/* Hamburger */}
            <button
              style={{ background: 'none', border: 'none', color: '#E6EDF3', fontSize: 22, cursor: 'pointer', display: 'none' }}
              id="hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          style={{
            borderTop: '1px solid #21262D',
            background: '#111820',
            padding: '16px 0',
          }}
        >
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { path: '/', label: 'Home' },
                { path: '/services', label: 'Services' },
                { path: '/audit', label: 'Audits' },
                { path: '/seo', label: 'SEO & Growth' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' },
              ].map(({ path, label }) => (
                <button
                  key={path}
                  onClick={() => handleNav(path)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    color: '#7D8590',
                    padding: '12px 16px',
                    borderRadius: 4,
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #hamburger-btn { display: block !important; }
          nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
