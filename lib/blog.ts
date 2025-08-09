import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Blog } from '@/types/blog';

// 博客文章目录路径
const blogDirectory = path.join(process.cwd(), 'markdown/blog');

/**
 * 获取所有博客文章的元数据
 * @returns 返回所有博客文章的元数据数组
 */
export function getAllBlogs(): Blog[] {
  // 检查目录是否存在
  if (!fs.existsSync(blogDirectory)) {
    console.warn('博客目录不存在:', blogDirectory);
    return [];
  }

  try {
    // 获取所有 .mdx 文件
    const fileNames = fs.readdirSync(blogDirectory).filter(name => name.endsWith('.mdx'));
    
    const allBlogsData = fileNames.map((fileName) => {
      // 移除 ".mdx" 扩展名获取 slug
      const slug = fileName.replace(/\.mdx$/, '');

      // 读取 MDX 文件内容
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // 使用 gray-matter 解析文件元数据
      const matterResult = matter(fileContents);

      // 组合数据和 slug
      return {
        id: Date.now() + Math.random(), // 生成唯一 ID
        slug,
        title: matterResult.data.title || slug,
        description: matterResult.data.description || '',
        body: matterResult.content,
        mainImage: matterResult.data.image || '/images/blog/default.png',
        author: {
          name: matterResult.data.author || '匿名作者',
          image: '/images/user/default-avatar.png',
          bio: matterResult.data.authorBio || '',
        },
        tags: matterResult.data.tags || [],
        publishedAt: matterResult.data.date || new Date().toISOString(),
        category: matterResult.data.category || '未分类',
        published: matterResult.data.published !== false, // 默认为已发布
        paragraph: matterResult.data.description || '',
      } as Blog;
    });

    // 过滤已发布的文章并按日期排序（最新的在前）
    return allBlogsData
      .filter(blog => blog.published)
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt || 0).getTime();
        const dateB = new Date(b.publishedAt || 0).getTime();
        return dateB - dateA;
      });
  } catch (error) {
    console.error('读取博客文件时出错:', error);
    return [];
  }
}

/**
 * 获取所有博客文章的 slug 列表
 * @returns 返回所有博客文章的 slug 数组
 */
export function getAllBlogSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  try {
    const fileNames = fs.readdirSync(blogDirectory);
    return fileNames
      .filter(name => name.endsWith('.mdx'))
      .map((fileName) => {
        return {
          params: {
            slug: fileName.replace(/\.mdx$/, ''),
          },
        };
      });
  } catch (error) {
    console.error('获取博客 slug 列表时出错:', error);
    return [];
  }
}

/**
 * 根据 slug 获取博客文章数据
 * @param slug 博客文章的 slug
 * @returns 返回博客文章数据和内容
 */
export async function getBlogData(slug: string): Promise<Blog | null> {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  
  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    console.warn('博客文件不存在:', fullPath);
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析文件元数据
    const matterResult = matter(fileContents);

    // 组合数据和内容
    return {
      id: Date.now() + Math.random(), // 生成唯一 ID
      slug,
      title: matterResult.data.title,
      description: matterResult.data.description,
      body: matterResult.content,
      mainImage: matterResult.data.image || '/images/blog/default.jpg',
      author: {
        name: matterResult.data.author || '匿名作者',
        image: '/images/blog/author-01.png',
        bio: matterResult.data.authorBio || '暂无简介',
      },
      tags: matterResult.data.tags || [],
      publishedAt: matterResult.data.date || new Date().toISOString(),
      category: matterResult.data.category,
      published: matterResult.data.published !== false,
      paragraph: matterResult.data.description,
    } as Blog;
  } catch (error) {
    console.error('读取博客文件时出错:', error);
    return null;
  }
}

/**
 * 检查博客文章是否存在
 * @param slug 博客文章的 slug
 * @returns 返回布尔值表示博客文章是否存在
 */
export function blogExists(slug: string): boolean {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  return fs.existsSync(fullPath);
}

/**
 * 根据分类获取博客文章
 * @param category 分类名称
 * @returns 返回指定分类的博客文章数组
 */
export function getBlogsByCategory(category: string): Blog[] {
  const allBlogs = getAllBlogs();
  return allBlogs.filter(blog => blog.category === category);
}

/**
 * 根据标签获取博客文章
 * @param tag 标签名称
 * @returns 返回包含指定标签的博客文章数组
 */
export function getBlogsByTag(tag: string): Blog[] {
  const allBlogs = getAllBlogs();
  return allBlogs.filter(blog => blog.tags?.includes(tag));
}

/**
 * 搜索博客文章
 * @param query 搜索关键词
 * @returns 返回匹配搜索关键词的博客文章数组
 */
export function searchBlogs(query: string): Blog[] {
  const allBlogs = getAllBlogs();
  const lowercaseQuery = query.toLowerCase();
  
  return allBlogs.filter(blog =>
    blog.title.toLowerCase().includes(lowercaseQuery) ||
    blog.description?.toLowerCase().includes(lowercaseQuery) ||
    blog.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    blog.category?.toLowerCase().includes(lowercaseQuery)
  );
}

/**
 * 获取相关博客文章
 * @param currentSlug 当前博客文章的 slug
 * @param limit 返回数量限制，默认为 3
 * @returns 返回相关博客文章数组
 */
export function getRelatedBlogs(currentSlug: string, limit: number = 3): Blog[] {
  const allBlogs = getAllBlogs();
  const currentBlog = allBlogs.find(blog => blog.slug === currentSlug);
  
  if (!currentBlog) {
    return allBlogs.slice(0, limit);
  }

  // 根据分类和标签计算相关性
  const relatedBlogs = allBlogs
    .filter(blog => blog.slug !== currentSlug)
    .map(blog => {
      let score = 0;
      
      // 同分类加分
      if (blog.category === currentBlog.category) {
        score += 3;
      }
      
      // 共同标签加分
      const commonTags = blog.tags?.filter(tag => 
        currentBlog.tags?.includes(tag)
      ) || [];
      score += commonTags.length * 2;
      
      return { blog, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.blog);

  return relatedBlogs;
}

/**
 * 获取所有博客分类
 * @returns 返回所有博客分类数组
 */
export function getAllBlogCategories(): string[] {
  const allBlogs = getAllBlogs();
  const categories = new Set(allBlogs.map(blog => blog.category).filter(Boolean));
  return Array.from(categories).filter((category): category is string => category !== undefined);
}

/**
 * 获取所有博客标签
 * @returns 返回所有博客标签数组
 */
export function getAllBlogTags(): string[] {
  const allBlogs = getAllBlogs();
  const tags = new Set<string>();
  
  allBlogs.forEach(blog => {
    blog.tags?.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags);
}

/**
 * 获取博客统计信息
 * @returns 返回博客统计数据
 */
export function getBlogStats() {
  const allBlogs = getAllBlogs();
  const categories = getAllBlogCategories();
  const tags = getAllBlogTags();
  
  return {
    totalBlogs: allBlogs.length,
    totalCategories: categories.length,
    totalTags: tags.length,
    latestBlog: allBlogs[0] || null,
    categoriesWithCount: categories.map(category => ({
      name: category,
      count: getBlogsByCategory(category).length
    })),
    tagsWithCount: tags.map(tag => ({
      name: tag,
      count: getBlogsByTag(tag).length
    }))
  };
}

/**
 * 格式化日期
 * @param dateString 日期字符串
 * @returns 返回格式化后的日期字符串
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    
    // 检查日期是否有效
    if (isNaN(date.getTime())) {
      return '日期无效';
    }
    
    // 格式化为 YYYY年MM月DD日
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}年${month}月${day}日`;
  } catch (error) {
    console.error('日期格式化错误:', error);
    return '日期格式错误';
  }
}