import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [],
  },
  
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules/**', '**/.next/**'],
      };
    }
    
    return config;
  },
  
  // Configurações de CSS
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig;
