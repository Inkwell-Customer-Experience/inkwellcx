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
    <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            className="navbar-logo-button"
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
          <div className="navbar-actions">
            <button
              className="btn-primary navbar-cta"
              onClick={() => handleNav('/contact')}
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
        <div className="mobile-nav-panel">
          <div className="container">
            <div className="mobile-nav-items">
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
