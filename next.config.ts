import os from "os";
import type { NextConfig } from "next";

function getLocalDevOrigins(): string[] {
  const origins = new Set<string>(['localhost', '127.0.0.1']);

  for (const networkInterface of Object.values(os.networkInterfaces())) {
    for (const details of networkInterface ?? []) {
      if (details.family === 'IPv4' && !details.internal) {
        origins.add(details.address);
      }
    }
  }

  return Array.from(origins);
}

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  images: {
      remotePatterns: [
          new URL('https://academy.cis.fiu.edu/**'),
      ]
  },
  allowedDevOrigins: getLocalDevOrigins(),
};

module.exports = nextConfig;
export default nextConfig;
