/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    unoptimized: true
  },
  experimental: {
    turbo: {
      resolveExtensions: [
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.json',
        '.wasm',
      ],
    },
  },
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/参考/**', '**/node_modules/**'],
    };
    return config;
  },
};

module.exports = nextConfig;
