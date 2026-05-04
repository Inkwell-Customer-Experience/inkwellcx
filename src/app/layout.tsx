import type { Metadata } from 'next';
import { Syne, Space_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GridBackground } from '@/components/GridBackground';
import { SpeedInsights } from '@vercel/speed-insights/next';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })
const syne = Syne({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'InkwellCX - High-Converting Websites & Web Design Services',
  description: 'High-converting websites built with design, hosting, SEO & analytics. Websites that turn visitors into paying customers.',
  alternates: {
    canonical: 'https://inkwellcx.com',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'InkwellCX - High-Converting Websites & Web Design Services',
    description: 'High-converting websites built with design, hosting, SEO & analytics. Websites that turn visitors into paying customers.',
    url: 'https://inkwellcx.com',
    siteName: 'InkwellCX',
    images: [
      {
        url: 'https://inkwellcx.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InkwellCX - High-Converting Websites & Web Design Services',
    description: 'High-converting websites built with design, hosting, SEO & analytics.',
    images: ['https://inkwellcx.com/og-image.png'],
  },
};

export const viewport = 'width=device-width, initial-scale=1.0';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Optimize theme injection to prevent flash */}
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              const theme = localStorage.getItem('theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {}
          `
        }} />
        {/* Schema.org structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'InkwellCX',
              url: 'https://inkwellcx.com',
              logo: 'https://inkwellcx.com/logo-dark.svg',
              description: 'High-converting websites built with design, hosting, SEO & analytics.',
              sameAs: [
                'https://twitter.com/inkwellcx',
                'https://linkedin.com/company/inkwellcx',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                url: 'https://inkwellcx.com/contact',
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'USD',
                offers: [
                  {
                    '@type': 'Offer',
                    name: 'Web Design Services',
                    description: 'Custom high-converting website design',
                  },
                  {
                    '@type': 'Offer',
                    name: 'SEO Optimization',
                    description: 'Search engine optimization services',
                  },
                  {
                    '@type': 'Offer',
                    name: 'Website Audit',
                    description: 'Comprehensive website performance audit',
                  },
                ],
              },
            })
          }}
        />
      </head>
      <body className={`${syne.className} ${spaceMono.className}`}>
        <ThemeProvider>
          <GridBackground />
          <div style={{ position: 'relative', minHeight: '100vh' }}>
            <div className="page-wrapper">
              <Navbar />
              {children}
              <SpeedInsights />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
