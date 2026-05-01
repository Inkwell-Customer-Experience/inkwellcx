import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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
        background: 'var(--navbar-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
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
            {theme === 'dark' ? (
              <img src="/logo-dark.svg" alt="InkwellCX" width={144} height={64} fetchPriority="high" style={{ height: 64, width: 'auto' }} />
            ) : (
              <img src="/logo-light.svg" alt="InkwellCX" width={144} height={64} fetchPriority="high" style={{ height: 64, width: 'auto' }} />
            )}
          </button>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }} aria-label="Main navigation">
            {[
              { path: '/services', label: '/services' },
              { path: '/audit', label: '/audit' },
              { path: '/seo', label: '/seo' },
              { path: '/about', label: '/about' },
            ].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + theme toggle + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              className="btn-primary"
              onClick={() => handleNav('/contact')}
              style={{ fontSize: 11, padding: '9px 16px', display: 'flex' }}
            >
              → Let's Talk
            </button>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            {/* Hamburger */}
            <button
              className="hamburger-btn"
              style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: 22, cursor: 'pointer' }}
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
            borderTop: '1px solid var(--border)',
            background: 'var(--surface)',
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
                    color: 'var(--muted)',
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
    </header>
  );
}
