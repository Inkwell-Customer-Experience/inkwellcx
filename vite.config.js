import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Transforms the built index.html so the CSS bundle loads asynchronously
 *  (preload + onload swap) instead of being render-blocking. */
function asyncCssPlugin() {
  return {
    name: 'async-css',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml(html) {
      // Convert every <link rel="stylesheet" href="...assets/..."> to a preload
      // that swaps to a stylesheet once loaded, preventing render-blocking.
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
        (_, href) =>
          `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), asyncCssPlugin()],
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
      polyfill: true,
    },
    reportCompressedSize: false,
  },
});
