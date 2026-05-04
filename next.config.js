/** @type {import('next').NextConfig} */
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
  
  // Enable SWR (Stale-While-Revalidate) headers for better caching
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, s-maxage=86400',
        },
      ],
    },
  ],
};

export default nextConfig;
