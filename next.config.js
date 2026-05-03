/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export - no server needed
  output: 'export',
  
  // Optimize images
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes for static export
  trailingSlash: true,
  
  // Preload critical resources
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
};

export default nextConfig;
