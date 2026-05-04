import type { Metadata } from 'next';
import { Syne, Space_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GridBackground } from '@/components/GridBackground';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })
const syne = Syne({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'InkwellCX — Websites That Convert',
  description: 'InkwellCX builds and manages high-converting websites for ambitious businesses. Design, hosting, SEO, analytics, and ongoing optimisation — all in one place.',
  icons: {
    icon: '/favicon.svg',
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
        {/* Preload critical fonts to improve FCP/LCP */}
        <link 
          rel="preload" 
          as="font" 
          href="https://fonts.gstatic.com/s/syne/v17/ZXuqe3VgLn44N4g4hP1gkCZpWOQvXWDl.woff2" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          as="font" 
          href="https://fonts.gstatic.com/s/spacemono/v13/i7dIEFliZjcOdO9w3G6HUHk3-dg-gdR2.woff2" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
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
      </head>
      <body className={`${syne.className} ${spaceMono.className}`}>
        <ThemeProvider>
          <GridBackground />
          <div style={{ position: 'relative', minHeight: '100vh' }}>
            <div className="page-wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
