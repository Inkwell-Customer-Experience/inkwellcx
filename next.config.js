/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === 'development';

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''} https://va.vercel-scripts.com https://vitals.vercel-insights.com`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob:",
      "connect-src 'self' https://vitals.vercel-insights.com",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig = {
  
  // Optimize images
  images: {
    unoptimized: false,  // ✅ Enable optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Reduce LCP by optimizing image delivery
    minimumCacheTTL: 31536000, // Cache for 1 year
  },
  
  // Ensure trailing slashes for static export
  trailingSlash: true,
  
  // Preload critical resources
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  
  // Compress responses to improve TTFB
  compress: true,

  redirects: async () => [
    {
      source: '/website-audit/',
      destination: '/audit/',
      permanent: true,
    },
  ],
  
  headers: async () => [
    {
      source: '/:path*',
      headers: securityHeaders,
    },
    {
      source: '/api/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
};

export default nextConfig;
