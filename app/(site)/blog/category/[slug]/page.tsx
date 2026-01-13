import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogCategories, getBlogsByCategory, formatDate } from "@/lib/blog";
import type { Blog } from "@/types/blog";

/**
 * 页面参数类型
 */
interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * 生成静态参数
 */
export async function generateStaticParams() {
  const categories = getAllBlogCategories();
  
  return categories.map((category) => ({
    slug: encodeURIComponent(category),
  }));
}

/**
 * 生成页面元数据
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = getCategoryNameFromSlug(slug);
  
  if (!categoryName) {
    return {
      title: "分类未找到 - PaYphp",
      description: "抱歉，您访问的分类不存在。",
    };
  }

  const blogs = getBlogsByCategory(categoryName);
  
  return {
    title: `${categoryName} - 博客分类 - PaYphp`,
    description: `浏览 ${categoryName} 分类下的所有文章，共 ${blogs.length} 篇。`,
    keywords: [categoryName, "博客", "文章", "PaYphp"],
  };
}

/**
 * 单个分类页面组件
 */
const CategoryPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const categoryName = getCategoryNameFromSlug(slug);
  
  // 如果分类不存在，返回 404
  if (!categoryName) {
    notFound();
  }

  // 获取该分类下的所有文章
  const blogs = getBlogsByCategory(categoryName);
  
  // 如果分类存在但没有文章，也显示页面（不是 404）
  const allCategories = getAllBlogCategories();

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* 面包屑导航 */}
        <nav className="mb-8 flex items-center space-x-2 text-sm text-body-color dark:text-body-color-dark">
          <Link href="/blog" className="hover:text-primary">
            博客
          </Link>
          <span>/</span>
          <Link href="/blog/categories" className="hover:text-primary">
            分类
          </Link>
          <span>/</span>
          <span className="text-dark dark:text-white">{categoryName}</span>
        </nav>

        {/* 分类标题 */}
        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            {categoryName}
          </span>
          <h1 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
            {categoryName} 分类文章
          </h1>
          <p className="text-base text-body-color dark:text-body-color-dark">
            共找到 {blogs.length} 篇关于 {categoryName} 的文章
          </p>
        </div>

        {/* 文章列表 */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        ) : (
          /* 空状态 */
          <div className="mx-auto max-w-[400px] text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-400"
                >
                  <path
                    d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17ZM17 21V11H13V7H7V19H17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
              暂无文章
            </h3>
            <p className="mb-6 text-body-color dark:text-body-color-dark">
              {categoryName} 分类下暂时还没有文章，请关注我们的更新。
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-primary/90"
            >
              浏览所有文章
            </Link>
          </div>
        )}

        {/* 其他分类推荐 */}
        {allCategories.length > 1 && (
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-dark dark:text-white">
              其他分类
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allCategories
                .filter(cat => cat !== categoryName)
                .slice(0, 6)
                .map((category) => {
                  const categorySlug = encodeURIComponent(category);
                  const categoryBlogs = getBlogsByCategory(category);
                  
                  return (
                    <Link
                      key={category}
                      href={`/blog/category/${categorySlug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary"
                    >
                      {category}
                      <span className="text-xs opacity-70">
                        ({categoryBlogs.length})
                      </span>
                    </Link>
                  );
                })}
            </div>
          </div>
        )}

        {/* 返回链接 */}
        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/blog/categories"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-base font-medium text-body-color transition-all duration-300 hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-body-color-dark"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                fill="currentColor"
              />
            </svg>
            所有分类
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-primary/90"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                fill="currentColor"
              />
            </svg>
            博客首页
          </Link>
        </div>
      </div>
    </section>
  );
};

/**
 * 博客卡片组件
 */
function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="group cursor-pointer">
      <Link href={`/blog/${blog.slug}`}>
        {/* 文章图片 */}
        <div className="relative mb-6 overflow-hidden rounded-lg">
          <Image
            src={blog.mainImage || '/images/blog/default.jpg'}
            alt={blog.title}
            width={400}
            height={240}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* 分类标签 */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
              {blog.category}
            </span>
          </div>
        </div>

        {/* 文章信息 */}
        <div>
          {/* 发布日期和作者 */}
          <div className="mb-3 flex items-center gap-4 text-sm text-body-color dark:text-body-color-dark">
            <span>{formatDate(blog.publishedAt)}</span>
            <span>•</span>
            <span>作者: {blog.author.name}</span>
          </div>

          {/* 文章标题 */}
          <h3 className="mb-3 text-xl font-semibold leading-tight text-dark transition-colors duration-300 group-hover:text-primary dark:text-white">
            {blog.title}
          </h3>

          {/* 文章摘要 */}
          <p className="mb-4 text-body-color dark:text-body-color-dark">
            {blog.description || blog.paragraph || '暂无摘要'}
          </p>

          {/* 标签 */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-100 px-2 py-1 text-xs text-body-color dark:bg-gray-800 dark:text-body-color-dark"
                >
                  #{tag}
                </span>
              ))}
              {blog.tags.length > 3 && (
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-body-color dark:bg-gray-800 dark:text-body-color-dark">
                  +{blog.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

/**
 * 从 slug 获取分类名称
 */
function getCategoryNameFromSlug(slug: string): string | null {
  const allCategories = getAllBlogCategories();
  
  try {
    // 首先尝试URL解码
    const decodedSlug = decodeURIComponent(slug);
    
    // 尝试精确匹配解码后的分类名称
    const exactMatch = allCategories.find(
      category => category === decodedSlug
    );
    
    if (exactMatch) {
      return exactMatch;
    }
    
    // 如果解码失败或没有匹配，尝试原来的逻辑（向后兼容）
    const legacyMatch = allCategories.find(
      category => category.toLowerCase().replace(/\s+/g, '-') === slug
    );
    
    if (legacyMatch) {
      return legacyMatch;
    }
    
    // 尝试模糊匹配（处理一些常见的变体）
    const slugVariants = [
      slug.replace(/-/g, ' '),
      slug.replace(/-/g, ''),
      slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
    ];
    
    for (const variant of slugVariants) {
      const match = allCategories.find(
        category => category.toLowerCase() === variant.toLowerCase()
      );
      if (match) {
        return match;
      }
    }
    
  } catch (error) {
    console.error('解码分类 slug 时出错:', error);
  }
  
  return null;
}

export default CategoryPage;