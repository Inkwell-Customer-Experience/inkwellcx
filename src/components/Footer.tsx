/* eslint-disable @next/next/no-img-element -- Theme-swapped SVG logos load reliably from /public without client-side theme state. */
import Link from 'next/link';
import { config } from '@/config/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo-link" aria-label="InkwellCX home">
              <img
                className="theme-logo theme-logo-dark"
                src="/logo-dark.svg"
                alt="InkwellCX"
                width="160"
                height="72"
                loading="lazy"
              />
              <img
                className="theme-logo theme-logo-light"
                src="/logo-light.svg"
                alt="InkwellCX"
                width="160"
                height="72"
                loading="lazy"
              />
            </Link>
            <p className="footer-desc">
              InkwellCX builds and manages websites that convert. We're obsessed with
              performance, driven by data, and committed to your growth.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><Link href="/services">Design & Development</Link></li>
              <li><Link href="/web-design-south-africa">Web Design South Africa</Link></li>
              <li><Link href="/website-maintenance">Website Maintenance</Link></li>
              <li><Link href="/audit">Website Audits</Link></li>
              <li><Link href="/seo">SEO & Growth</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href={config.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={config.contact.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} InkwellCX. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
            <a href={config.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={config.contact.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
