import React from "react";
import Link from "next/link";
import { getAllBlogCategories } from "@/lib/blog";

/**
 * 博客分类 404 页面
 * 当访问不存在的分类时显示
 */
const CategoryNotFound = () => {
  // 获取所有可用分类
  const allCategories = getAllBlogCategories();
  
  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="mx-auto max-w-[600px] text-center">
          {/* 404 图标 */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-400"
              >
                <path
                  d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* 错误信息 */}
          <h1 className="mb-4 text-4xl font-bold text-dark dark:text-white md:text-5xl">
            分类未找到
          </h1>
          
          <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
            抱歉，您访问的博客分类不存在或已被移除。
          </p>

          {/* 建议操作 */}
          <div className="mb-12 space-y-4">
            <p className="text-body-color dark:text-body-color-dark">
              您可以尝试以下操作：
            </p>
            <ul className="space-y-2 text-left text-body-color dark:text-body-color-dark">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                检查 URL 拼写是否正确
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                浏览下方的可用分类
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                返回博客首页查看所有文章
              </li>
            </ul>
          </div>

          {/* 快速导航按钮 */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-primary/90"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              返回博客首页
            </Link>
            
            <Link
              href="/blog/categories"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-base font-medium text-body-color transition-all duration-300 hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-body-color-dark"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              浏览所有分类
            </Link>
          </div>

          {/* 可用分类列表 */}
          {allCategories.length > 0 && (
            <div>
              <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white">
                可用分类
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {allCategories.map((category) => {
                  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
                  
                  return (
                    <Link
                      key={category}
                      href={`/blog/category/${categorySlug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary"
                    >
                      {category}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* 搜索建议 */}
          <div className="mt-12 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <h4 className="mb-3 text-lg font-semibold text-dark dark:text-white">
              找不到您要的内容？
            </h4>
            <p className="mb-4 text-body-color dark:text-body-color-dark">
              您可以尝试搜索相关关键词，或者联系我们获取帮助。
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              使用博客搜索功能
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryNotFound;