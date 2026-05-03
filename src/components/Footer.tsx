'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from './ThemeContext';
import { useEffect, useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch - only render after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ width: 120, height: 40, marginBottom: 16, background: 'var(--surface)', borderRadius: 4 }} />
              <p className="footer-desc">
                InkwellCX builds and manages websites that convert. We're obsessed with
                performance, driven by data, and committed to your growth.
              </p>
            </div>

            <div>
              <div className="footer-col-title">Services</div>
              <ul className="footer-links">
                <li><Link href="/services">Design & Development</Link></li>
                <li><Link href="/audit">Website Audits</Link></li>
                <li><Link href="/seo">SEO & Growth</Link></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><a href="https://wa.me/27710921755" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Legal</div>
              <ul className="footer-links">
                <li><Link href="/">Privacy Policy</Link></li>
                <li><Link href="/">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {currentYear} InkwellCX. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="footer-logo-link" style={{ display: 'inline-block', marginBottom: 16 }}>
              <Image
                src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
                alt="InkwellCX Logo"
                width={120}
                height={30}
                style={{ height: 'auto', width: 'auto', maxWidth: '100%' }}
                priority = {false}
              />
            </Link>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><Link href="/services">Design & Development</Link></li>
              <li><Link href="/audit">Website Audits</Link></li>
              <li><Link href="/seo">SEO & Growth</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="https://wa.me/27710921755" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} InkwellCX. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}