import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
      remotePatterns: [
          new URL('https://academy.cis.fiu.edu/**'),
      ]
  }
};

module.exports = nextConfig;
export default nextConfig;
