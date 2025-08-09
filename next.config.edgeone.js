/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // 暂时移除插件以避免ES模块问题
    // remarkPlugins: [],
    // rehypePlugins: [],
  },
})

const nextConfig = {
  reactStrictMode: true,
  // 配置页面扩展名以包含 MDX
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // 启用静态导出（EdgeOne 专用）
  output: 'export',
  trailingSlash: true,
  assetPrefix: './',
  
  images: {
    // 禁用图片优化以支持静态导出
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // 禁用 ESLint 在构建时的检查
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 禁用 TypeScript 错误检查
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withMDX(nextConfig);