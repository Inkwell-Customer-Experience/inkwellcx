// Web Vitals monitoring for performance tracking
// Uses native Web Vitals API available in all modern browsers

export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // Use PerformanceObserver to track metrics
  try {
    // Track Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          console.log('FID:', entry.processingDuration);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Track Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Log when page becomes interactive (First Contentful Paint)
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`${entry.name}: ${entry.startTime}`);
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
    }
  } catch (e) {
    console.debug('Performance monitoring not fully supported');
  }
}
