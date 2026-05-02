import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import GridBackground from './components/GridBackground.jsx';

// Defer Vercel analytics to avoid blocking initial render
const SpeedInsights = lazy(() => 
  new Promise(resolve => {
    // Load after page is interactive
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          import('@vercel/speed-insights/react').then((mod) => resolve({ default: mod.SpeedInsights }));
        }, 2000);
      });
    } else {
      setTimeout(() => {
        import('@vercel/speed-insights/react').then((mod) => resolve({ default: mod.SpeedInsights }));
      }, 2000);
    }
  })
);

const Analytics = lazy(() => 
  new Promise(resolve => {
    // Load after page is interactive
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          import('@vercel/analytics/react').then((mod) => resolve({ default: mod.Analytics }));
        }, 2000);
      });
    } else {
      setTimeout(() => {
        import('@vercel/analytics/react').then((mod) => resolve({ default: mod.Analytics }));
      }, 2000);
    }
  })
);
const Services = lazy(() => import('./pages/Services.jsx'));
const Audit = lazy(() => import('./pages/Audit.jsx'));
const SEO = lazy(() => import('./pages/SEO.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE;

function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <GridBackground />
        <div className="page-wrapper">
          <Navbar />
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>  
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/seo" element={<SEO />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
      <a href={`https://wa.me/${WHATSAPP_PHONE}`} className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-2.401-2.548-.52-.457-1.085-.693-1.657-.501-.42.138-.77.414-1.064.747-.23.266-.355.547-.412.83-.057.283-.058.577.024.87.16.57.561 1.174 1.127 1.697 1.337 1.234 2.729 2.072 4.098 2.395.371.088.72.088 1.044-.016.447-.143.773-.497 1.02-.904.256-.42.36-.92.28-1.38z" />
          <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.304A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 11.998 2zm.002 18a7.964 7.964 0 0 1-4.073-1.113l-.291-.173-3.012.79.8-2.927-.19-.302A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
        </svg>
      </a>
      <Suspense fallback={null}>
        <SpeedInsights />
        <Analytics />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;