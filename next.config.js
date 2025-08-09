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
  images: {
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
};

module.exports = withMDX(nextConfig);
