export const dynamic = 'force-static';

import type { Metadata } from 'next';
import { StructuredData } from '@/components/StructuredData';
import { breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service - InkwellCX',
  description:
    'Terms of service for Inkwell Customer Experience digital services, including website design, ecommerce, hosting coordination, retainers, analytics, SEO, and consulting.',
  alternates: {
    canonical: 'https://inkwellcx.com/terms/',
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

function TermsList({ items }: { items: string[] }) {
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

export default function TermsOfService() {
  return (
    <main className="page-fade-in">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms/' },
        ])}
      />
      <section className="page-hero">
        <div className="container">
          <span className="page-tag">// terms</span>
          <h1 className="hero-headline" style={{ maxWidth: 700, marginBottom: 20 }}>
            Terms of Service.
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
              1. Acceptance of Terms
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              By accessing this website, requesting services, accepting a quotation, making payment,
              or engaging Inkwell Customer Experience ("InkwellCX", "we", "our", or "us"), you
              agree to these Terms of Service.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              If you do not agree to these Terms, you must not use our services or website.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              2. Services
            </h2>
            <p className="body-copy">
              InkwellCX provides digital services including, but not limited to:
            </p>
            <TermsList
              items={[
                'website design and development',
                'ecommerce development',
                'hosting coordination',
                'website management',
                'retainers',
                'analytics reporting',
                'SEO-related implementation',
                'technical consulting',
                'and related digital services',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Service availability may vary depending on capacity and project requirements.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              3. Quotations & Scope
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              All quotations are valid for thirty (30) days unless otherwise stated. Quoted pricing
              is based on the scope discussed at the time of quoting.
            </p>
            <p className="body-copy">Any work outside the agreed scope may:</p>
            <TermsList
              items={[
                'require a Change Order',
                'incur additional charges',
                'and extend project timelines',
              ]}
            />

            <h2 className="section-headline" style={sectionHeadingStyle}>
              4. Payment Terms
            </h2>
            <p className="body-copy">Unless otherwise agreed in writing:</p>
            <TermsList
              items={[
                'project work requires a deposit before commencement',
                'invoices are payable within seven (7) days',
                'and overdue accounts may incur late fees',
              ]}
            />
            <p className="body-copy">InkwellCX reserves the right to:</p>
            <TermsList
              items={[
                'suspend services',
                'withhold deliverables',
                'revoke access',
                'or pause ongoing work for overdue accounts',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Deposits are non-refundable once work has commenced.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              5. Client Responsibilities
            </h2>
            <p className="body-copy">Clients agree to:</p>
            <TermsList
              items={[
                'provide accurate information',
                'supply required content and approvals on time',
                'ensure lawful use of services',
                'and maintain appropriate backups of business-critical data',
              ]}
            />
            <p className="body-copy">Clients are solely responsible for:</p>
            <TermsList
              items={[
                'website content',
                'legal compliance',
                'ecommerce compliance',
                'POPIA compliance',
                'cookie notices',
                'and any industry-specific obligations',
              ]}
            />

            <h2 className="section-headline" style={sectionHeadingStyle}>
              6. Intellectual Property
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              All intellectual property rights in InkwellCX tools, templates, systems, frameworks,
              methodologies, and processes remain the property of InkwellCX.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Ownership of final project deliverables transfers to the Client only after full and
              final payment has been received.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Rejected concepts, drafts, mockups, prototypes, and unused design materials remain the
              property of InkwellCX unless otherwise agreed in writing.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              InkwellCX reserves the right to display completed projects in its portfolio unless
              otherwise agreed.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              7. Third-Party Services
            </h2>
            <p className="body-copy">Services may involve third-party platforms including:</p>
            <TermsList
              items={[
                'hosting providers',
                'payment gateways',
                'domain registrars',
                'analytics tools',
                'plugins',
                'APIs',
                'and cloud infrastructure providers',
              ]}
            />
            <p className="body-copy">InkwellCX is not responsible for:</p>
            <TermsList
              items={[
                'outages',
                'pricing changes',
                'service interruptions',
                'security incidents',
                'or operational failures caused by third-party services',
              ]}
            />

            <h2 className="section-headline" style={sectionHeadingStyle}>
              8. No Guaranteed Outcomes
            </h2>
            <p className="body-copy">InkwellCX does not guarantee:</p>
            <TermsList
              items={[
                'search engine rankings',
                'sales',
                'conversions',
                'lead generation',
                'advertising performance',
                'website traffic',
                'uptime percentages',
                'or commercial outcomes',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Any projections, recommendations, or estimates are provided in good faith only.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              9. Cybersecurity Disclaimer
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              The Client acknowledges that all online systems involve inherent cybersecurity risks.
            </p>
            <p className="body-copy">
              InkwellCX does not guarantee that any website, hosting environment, integration, or
              platform will be free from:
            </p>
            <TermsList
              items={[
                'vulnerabilities',
                'cyberattacks',
                'malware',
                'ransomware',
                'data breaches',
                'or service interruptions',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Clients remain responsible for maintaining independent backups of all business-critical
              data.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              10. Limitation of Liability
            </h2>
            <p className="body-copy">To the fullest extent permitted by law, InkwellCX shall not be liable for:</p>
            <TermsList
              items={[
                'indirect damages',
                'consequential damages',
                'lost profits',
                'reputational harm',
                'data loss',
                'business interruption',
                'or third-party failures',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Total liability for any claim relating to services shall not exceed the total fees paid
              by the Client to InkwellCX during the three (3) months preceding the event giving rise
              to the claim.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              11. Suspension & Termination
            </h2>
            <p className="body-copy">InkwellCX may suspend or terminate services where:</p>
            <TermsList
              items={[
                'invoices remain unpaid',
                'unlawful activity occurs',
                'abusive behaviour is directed toward staff',
                'or continued service creates operational or security risk',
              ]}
            />
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Outstanding amounts remain payable upon termination.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              12. Confidentiality
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Both parties agree to keep confidential information private and not disclose it to
              unauthorised third parties except where required by law or necessary for service
              delivery.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              13. Force Majeure
            </h2>
            <p className="body-copy">
              InkwellCX is not liable for delays or failures caused by events beyond reasonable
              control including:
            </p>
            <TermsList
              items={[
                'power outages',
                'internet disruptions',
                'cyberattacks',
                'natural disasters',
                'civil unrest',
                'labour disputes',
                'or government actions',
              ]}
            />

            <h2 className="section-headline" style={sectionHeadingStyle}>
              14. Governing Law
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              These Terms are governed by the laws of the Republic of South Africa.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              The parties consent to the jurisdiction of the courts of Gauteng, South Africa.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              15. Updates to These Terms
            </h2>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              We may update these Terms from time to time.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Updated versions will be published on this page with a revised "Last Updated" date.
            </p>
            <p className="body-copy" style={{ marginBottom: 18 }}>
              Continued use of our services after updates constitutes acceptance of the revised
              Terms.
            </p>

            <h2 className="section-headline" style={sectionHeadingStyle}>
              16. Contact
            </h2>
            <p className="body-copy" style={{ marginBottom: 8 }}>
              Inkwell Customer Experience
            </p>
            <p className="body-copy" style={{ marginBottom: 8 }}>
              Email:{' '}
              <a href="mailto:support@inkwellcx.com" style={{ color: 'var(--blue-link)' }}>
                support@inkwellcx.com
              </a>
            </p>
            <p className="body-copy">
              Website:{' '}
              <a href="https://inkwellcx.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue-link)' }}>
                https://inkwellcx.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
