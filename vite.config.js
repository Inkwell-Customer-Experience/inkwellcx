import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Only makes non-critical CSS async after the critical bundle loads */
function optimizeCssPlugin() {
  return {
    name: 'optimize-css',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml(html) {
      // Keep the first CSS bundle render-blocking (critical CSS)
      // Only async-load subsequent bundles
      let styleIndex = 0;
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
        (_, href) => {
          styleIndex++;
          if (styleIndex === 1) {
            // First stylesheet is critical - keep it render-blocking
            return `<link rel="stylesheet" crossorigin href="${href}">`;
          } else {
            // Later stylesheets can be async
            return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
          }
        },
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), optimizeCssPlugin()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-core': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
      },
    },
    modulePreload: {
      polyfill: false,
    },
    reportCompressedSize: false,
    cssCodeSplit: true,
  },
});

