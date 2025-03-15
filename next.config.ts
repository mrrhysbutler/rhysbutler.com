import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep output: 'export' if you need static exports for Vercel
  // For most Vercel deployments, you can remove this line as Vercel handles SSR natively
  // output: 'export',
  
  // For Vercel, you can use the default image optimization
  images: {
    // Remove unoptimized: true as Vercel supports image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rhysbutler.com',
        pathname: '**',
      },
    ],
  },
  
  // Exclude test files from the build
  eslint: {
    // Only run ESLint on these directories during production builds
    dirs: ['src/app', 'src/components', 'src/lib', 'src/content'],
  },
};

export default nextConfig;
