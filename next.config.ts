import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,   // 💡 this prevents build from failing on lint warnings
  },
};

export default nextConfig;
