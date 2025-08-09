import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogCategories, getBlogsByCategory } from "@/lib/blog";

/**
 * 页面元数据
 */
export const metadata: Metadata = {
  title: "博客分类 - PayPHP",
  description: "浏览所有博客分类，查找您感兴趣的技术文章和教程。",
  keywords: ["博客分类", "技术文章", "教程", "PayPHP"],
};

/**
 * 博客分类总览页面
 * 显示所有可用的博客分类及每个分类的文章数量
 */
const BlogCategoriesPage = () => {
  // 获取所有分类
  const categories = getAllBlogCategories();
  
  // 计算每个分类的文章数量
  const categoriesWithCount = categories.map(category => {
    const blogs = getBlogsByCategory(category);
    return {
      name: category,
      slug: category.toLowerCase().replace(/\s+/g, '-'),
      count: blogs.length,
      description: getCategoryDescription(category)
    };
  });

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        {/* 页面标题 */}
        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
          <span className="mb-2 block text-lg font-semibold text-primary">
            博客分类
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
            探索所有分类
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            浏览我们的博客分类，找到您感兴趣的技术文章和教程。
          </p>
        </div>

        {/* 分类网格 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoriesWithCount.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary"
            >
              {/* 分类图标 */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <CategoryIcon category={category.name} />
              </div>

              {/* 分类信息 */}
              <h3 className="mb-2 text-xl font-semibold text-dark transition-all duration-300 group-hover:text-primary dark:text-white">
                {category.name}
              </h3>
              
              <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                {category.description}
              </p>

              {/* 文章数量 */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-body-color dark:text-body-color-dark">
                  {category.count} 篇文章
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* 如果没有分类，显示提示信息 */}
        {categoriesWithCount.length === 0 && (
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
                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
              暂无分类
            </h3>
            <p className="text-body-color dark:text-body-color-dark">
              目前还没有任何博客分类，请稍后再来查看。
            </p>
          </div>
        )}

        {/* 返回博客首页链接 */}
        <div className="mt-12 text-center">
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
            返回博客首页
          </Link>
        </div>
      </div>
    </section>
  );
};

/**
 * 获取分类描述
 */
function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    "技术教程": "深入浅出的技术教程，帮助您掌握最新的开发技能。",
    "产品更新": "了解我们产品的最新功能和改进。",
    "行业资讯": "关注行业动态，把握技术发展趋势。",
    "开发经验": "分享实际开发中的经验和最佳实践。",
    "最佳实践": "总结项目开发中的最佳实践和解决方案。",
    "Next.js": "Next.js 框架相关的技术文章和教程。",
    "React": "React 开发技巧和最佳实践分享。",
    "TypeScript": "TypeScript 类型系统和开发经验。",
    "Web开发": "前端和后端 Web 开发相关内容。",
    "性能优化": "网站和应用性能优化的技巧和方法。",
  };
  
  return descriptions[category] || `关于 ${category} 的相关文章和教程。`;
}

/**
 * 分类图标组件
 */
function CategoryIcon({ category }: { category: string }): React.ReactElement {
  // 根据分类名称返回对应的图标
  const iconMap: Record<string, React.ReactElement> = {
    "技术教程": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "产品更新": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 7V13L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "行业资讯": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 6H18V8H6V6Z" fill="currentColor"/>
        <path d="M6 10H18V12H6V10Z" fill="currentColor"/>
        <path d="M6 14H12V16H6V14Z" fill="currentColor"/>
      </svg>
    ),
    "开发经验": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    "最佳实践": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  // 默认图标
  const defaultIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17ZM17 21V11H13V7H7V19H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return iconMap[category] || defaultIcon;
}

export default BlogCategoriesPage;