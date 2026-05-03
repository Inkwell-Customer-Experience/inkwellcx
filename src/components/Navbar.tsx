'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './ThemeContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 10));
  }

  const isActive = (path: string) => pathname === path;

  return (
    <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo-button" aria-label="InkwellCX home">
            {theme === 'dark' ? (
              <img src="/logo-dark.svg" alt="InkwellCX" width={144} height={64} style={{ height: 48, width: 'auto' }} fetchPriority='high' />
            ) : (
              <img src="/logo-light.svg" alt="InkwellCX" width={144} height={64} style={{ height: 48, width: 'auto' }} fetchPriority='high' />
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }} aria-label="Main navigation">
            {[
              { path: '/services', label: '/services' },
              { path: '/audit', label: '/audit' },
              { path: '/seo', label: '/seo' },
              { path: '/about', label: '/about' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={isActive(path) ? 'nav-link active' : 'nav-link'}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + theme toggle + hamburger */}
          <div className="navbar-actions">
            <Link href="/contact" className="btn-primary navbar-cta">
              → Let's Talk
            </Link>
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
                <Link
                  key={path}
                  href={path}
                  className={isActive(path) ? 'nav-link active' : 'nav-link'}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
