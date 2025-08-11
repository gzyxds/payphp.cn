/**
 * 动态生成sitemap.xml
 * 帮助搜索引擎更好地发现和索引网站内容
 */

import { MetadataRoute } from 'next';
import { getAllBlogs } from '@/lib/blog';
import { getAllDocs } from '@/lib/mdx';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://payphp.cn';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 静态页面配置
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0, // 首页优先级最高
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // 产品页面优先级很高
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industry`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // 文档页面对SEO很重要
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/auth`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // 动态生成博客页面
  const blogs = getAllBlogs();
  const blogPages = blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishedAt), // 修复：使用publishedAt而不是date
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 动态生成文档页面
  const docs = getAllDocs();
  const docPages = docs.map((doc) => ({
    url: `${SITE_URL}/docs/${doc.slug}`,
    lastModified: new Date(doc.date || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.7, // 文档页面优先级较高
  }));

  // 生成博客分类页面
  const blogCategories = Array.from(new Set(blogs.map(blog => blog.category).filter(Boolean))); // 修复：使用Array.from替代扩展运算符
  const categoryPages = blogCategories.map((category) => ({
    url: `${SITE_URL}/blog/category/${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  // 合并所有页面
  return [
    ...staticPages,
    ...blogPages,
    ...docPages,
    ...categoryPages,
  ];
}