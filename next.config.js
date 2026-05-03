/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export - no server needed
  output: 'export',
  
  // Optimize images
  images: {
    unoptimized: false,  // ✅ Enable optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Ensure trailing slashes for static export
  trailingSlash: true,
  
  // Preload critical resources
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
};

export default nextConfig;
