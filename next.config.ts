import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep output: 'export' if you need static exports for Vercel
  // For most Vercel deployments, you can remove this line as Vercel handles SSR natively
  // output: 'export',
  
  // For Vercel, you can use the default image optimization
  images: {
    // Remove unoptimized: true as Vercel supports image optimization
    domains: ['rhysbutler.com'], // Add your domain if you're hosting images there
  },
};

export default nextConfig;
