import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment the line below if you're not using a custom domain
  // basePath: '/rhysbutler.com',
};

export default nextConfig;
