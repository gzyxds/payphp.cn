/**
 * 动态生成robots.txt
 * 指导搜索引擎爬虫的行为，优化SEO效果
 */

import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://payphp.cn';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // 禁止爬取的路径
        disallow: [
          '/api/',           // API接口
          '/admin/',         // 管理后台
          '/private/',       // 私有内容
          '/auth/signup',    // 注册页面
          '/auth/login',     // 登录页面
          '/auth/reset',     // 密码重置页面
          '/search',         // 搜索结果页面
          '/*?*',           // 带参数的URL
          '/tmp/',          // 临时文件
          '/*.json',        // JSON文件
          '/*.xml$',        // XML文件（除了sitemap）
        ],
      },
      {
        // 针对百度爬虫的特殊规则
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/auth/',
          '/search',
        ],
        // 百度爬虫访问频率限制
        crawlDelay: 1,
      },
      {
        // 针对Google爬虫的特殊规则
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/auth/signup',
          '/auth/login',
          '/auth/reset',
          '/search',
        ],
      },
    ],
    // 指向sitemap文件
    sitemap: `${SITE_URL}/sitemap.xml`,
    // 主机信息
    host: SITE_URL,
  };
}