export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { StructuredData } from '@/components/StructuredData';
import { breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy - InkwellCX',
  description:
    'Privacy policy for Inkwell Customer Experience, including how personal information, analytics, cookies, third-party services, and POPIA rights are handled.',
  alternates: {
    canonical: 'https://inkwellcx.com/privacy/',
  },
};

const listStyle = {
  margin: '12px 0 18px',
  paddingLeft: 22,
  color: 'var(--text)',
} as const;

const sectionHeadingStyle = {
  fontSize: 28,
  margin: '32px 0 16px',
} as const;

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="body-copy" style={listStyle}>
      {items.map((item) => (
        <li key={item} style={{ marginBottom: 8 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <main id="main-content" className="page-fade-in">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy/' },
        ])}
      />
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// privacy</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            Privacy Policy.
          </h1>
          <p className="body-copy" style={{ maxWidth: 620 }}>
            Last Updated: May 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: 820 }}>
            <h2 className="section-headline" style={{ fontSize: 28, marginBottom: 16 }}>
              1. Introduction
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Inkwell Customer Experience ("InkwellCX", "we", "our", or "us") respects your
              privacy and is committed to protecting your personal information in accordance with
              the Protection of Personal Information Act 4 of 2013 ("POPIA") and other applicable
              laws.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              This Privacy Policy explains how we collect, use, store, and protect personal
              information when you interact with our website, services, or communications.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              By using our website or engaging our services, you agree to the practices described in
              this Policy.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              2. Information We Collect
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              We may collect the following categories of information:
            </p>
            <h3 className="section-headline" style={{ fontSize: 20, margin: '20px 0 10px' }}>
              Information You Provide Directly
            </h3>
            <PolicyList
              items={[
                'Full name',
                'Email address',
                'Phone number',
                'Business name',
                'Billing information',
                'Project requirements',
                'Contact form submissions',
                'Communications sent to us',
              ]}
            />
            <h3 className="section-headline" style={{ fontSize: 20, margin: '20px 0 10px' }}>
              Automatically Collected Information
            </h3>
            <p className="body-copy">When you visit our website, we may automatically collect:</p>
            <PolicyList
              items={[
                'IP address',
                'Browser type',
                'Device information',
                'Pages visited',
                'Referral sources',
                'Session duration',
                'Website usage analytics',
                'Cookie and tracking data',
              ]}
            />

            <h2 className="section-headline" style={sectionHeadingStyle}>
              3. How We Use Your Information
            </h2>
            <p className="body-copy">
              We use personal information for the following purposes:
            </p>
            <PolicyList
              items={[
                'Providing web development and digital services',
                'Responding to enquiries',
                'Preparing quotations and invoices',
                'Managing projects and retainers',
                'Website hosting and support',
                'Analytics and website performance reporting',
                'Improving our services and website',
                'Security and fraud prevention',
                'Compliance with legal obligations',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              We do not sell personal information to third parties.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              4. Cookies & Analytics
            </h2>
            <p className="body-copy">
              Our website may use cookies and analytics technologies, including tools such as:
            </p>
            <PolicyList
              items={[
                'Google Analytics',
                'Meta Pixel',
                'Performance and analytics tracking tools',
              ]}
            />
            <p className="body-copy">These technologies help us:</p>
            <PolicyList
              items={[
                'understand website traffic',
                'improve user experience',
                'and measure marketing performance',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              You may disable cookies in your browser settings, although certain website
              functionality may be affected.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              5. Third-Party Services
            </h2>
            <p className="body-copy">We may use trusted third-party providers including:</p>
            <PolicyList
              items={[
                'hosting providers',
                'payment processors',
                'domain registrars',
                'analytics platforms',
                'cloud infrastructure providers',
                'authentication services',
                'and communication tools',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              These third parties may process data outside South Africa.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              While we take reasonable care in selecting service providers, we are not responsible
              for the privacy practices, outages, or security failures of third-party platforms.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              6. Cross-Border Data Transfers
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Certain services used by InkwellCX may store or process data outside South Africa.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Where cross-border transfers occur, we take reasonable steps to ensure that
              appropriate safeguards and protections are in place in accordance with POPIA.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              7. Data Security
            </h2>
            <p className="body-copy">
              We implement reasonable technical and organisational safeguards to protect personal
              information against:
            </p>
            <PolicyList
              items={[
                'unauthorised access',
                'disclosure',
                'loss',
                'misuse',
                'or alteration',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              However, no online platform, transmission method, or storage system can be guaranteed
              completely secure. Use of our website and services is at your own risk.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              8. Data Retention
            </h2>
            <p className="body-copy">
              We retain personal information only for as long as reasonably necessary to:
            </p>
            <PolicyList
              items={[
                'provide services',
                'comply with legal obligations',
                'resolve disputes',
                'and maintain business records',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Retention periods may vary depending on the nature of the information and legal
              requirements.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              9. Your Rights Under POPIA
            </h2>
            <p className="body-copy">
              Subject to applicable law, you may have the right to:
            </p>
            <PolicyList
              items={[
                'request access to your personal information',
                'request correction of inaccurate information',
                'request deletion of information',
                'object to certain processing activities',
                'withdraw consent where applicable',
                'and lodge complaints with the Information Regulator',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Requests may be submitted using the contact details below.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              10. Client Responsibilities
            </h2>
            <p className="body-copy">
              Clients using InkwellCX services are responsible for ensuring that:
            </p>
            <PolicyList
              items={[
                'they have lawful rights to provide content and data',
                'their websites comply with applicable privacy laws',
                'and any required cookie notices or consent mechanisms are implemented',
              ]}
            />

            <h2 className="section-headline" style={sectionHeadingStyle}>
              11. Changes to This Policy
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              We may update this Privacy Policy from time to time.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Updated versions will be published on this page with a revised "Last Updated" date.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Continued use of our website or services after updates constitutes acceptance of the
              revised Policy.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              12. Contact Information
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              For privacy-related queries or requests, contact:
            </p>
            <p className="body-copy" style={{ marginBottom: 8 }}>
              Inkwell Customer Experience
            </p>
            <p className="body-copy" style={{ marginBottom: 8 }}>
              Email:{' '}
              <a href="mailto:support@inkwellcx.com" style={{ color: 'var(--blue-link)' }}>
                support@inkwellcx.com
              </a>
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Website:{' '}
              <a href="https://inkwellcx.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-link)' }}>
                https://inkwellcx.com
              </a>
            </p>
            <p className="body-copy" style={{ marginBottom: 8 }}>
              If you believe your rights have been infringed, you may contact the Information
              Regulator of South Africa at:
            </p>
            <p className="body-copy">
              <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-link)' }}>
                https://www.justice.gov.za/inforeg/
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
