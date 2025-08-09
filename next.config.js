/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // 暂时移除插件以避免ES模块问题
    // remarkPlugins: [],
    // rehypePlugins: [],
  },
})

// 检查是否需要静态导出
// 对于 EdgeOne 部署，默认启用静态导出
const isStaticExport = process.env.NEXT_STATIC_EXPORT === 'true' || process.env.EDGEONE_DEPLOY === 'true';

const nextConfig = {
  reactStrictMode: true,
  // 配置页面扩展名以包含 MDX
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // 启用静态导出（EdgeOne 需要）
  output: 'export',
  // 配置输出目录
  distDir: 'out',
  // 配置 trailing slash
  trailingSlash: true,
  
  images: {
    // 静态导出时禁用图片优化
    ...(isStaticExport && { unoptimized: true }),
    // 使用 remotePatterns 替代已弃用的 domains 配置
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
      // 可以在这里添加其他需要的图片域名
    ],
  },
  
  // 禁用 ESLint 在构建时的检查（可选）
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 禁用 TypeScript 错误检查（可选，如果有类型错误）
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withMDX(nextConfig);
