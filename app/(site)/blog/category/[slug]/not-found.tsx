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
    <section className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* 404 大数字显示 */}
          <div className="relative animate-fade-in px-4">
            <div className="text-[80px] xs:text-[100px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-black text-gray-100 dark:text-gray-800 leading-none select-none animate-bounce-slow">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700 animate-float backdrop-blur-sm">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:w-12 sm:h-12 text-primary mx-auto animate-pulse"
                >
                  <path
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 错误信息 */}
          <div className="space-y-4 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark dark:text-white leading-tight">
              分类未找到
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-body-color dark:text-body-color-dark max-w-3xl mx-auto leading-relaxed">
              抱歉，您访问的博客分类不存在或已被移除。让我们帮您找到正确的内容。
            </p>
          </div>

          {/* 建议操作 */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm mx-4">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-dark dark:text-white mb-4 sm:mb-6">
              您可以尝试以下操作
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-body-color dark:text-body-color-dark">
                  检查 URL 拼写
                </span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-body-color dark:text-body-color-dark">
                  浏览可用分类
                </span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path
                      d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-body-color dark:text-body-color-dark">
                  返回博客首页
                </span>
              </div>
            </div>
          </div>

          {/* 快速导航按钮 */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/blog"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-hover:-translate-x-1"
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
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl border-2 border-gray-200 bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-body-color shadow-lg transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-105 dark:border-gray-700 dark:bg-gray-800 dark:text-body-color-dark dark:hover:bg-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-hover:rotate-12"
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
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-lg mx-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="sm:w-4 sm:h-4 text-primary">
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-dark dark:text-white">
                  可用分类
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
                {allCategories.map((category) => {
                  const categorySlug = encodeURIComponent(category);
                  
                  return (
                    <Link
                      key={category}
                      href={`/blog/category/${categorySlug}`}
                      className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50 text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105 dark:border-gray-700 dark:bg-gray-700 dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary"
                    >
                      <span className="font-medium">{category}</span>
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
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* 搜索建议 */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20 dark:border-primary/30 mx-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="sm:w-5 sm:h-5 text-primary">
                  <path
                    d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-dark dark:text-white">
                找不到您要的内容？
              </h4>
            </div>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-body-color dark:text-body-color-dark leading-relaxed">
              您可以尝试搜索相关关键词，或者联系我们获取帮助。我们会持续更新内容，为您提供更好的阅读体验。
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                href="/blog"
                className="group inline-flex items-center justify-center gap-1 sm:gap-2 rounded-xl bg-primary px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:scale-105"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="sm:w-4 sm:h-4 transition-transform group-hover:scale-110">
                  <path
                    d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                使用博客搜索功能
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-1 sm:gap-2 rounded-xl border border-primary/30 bg-white/50 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-primary font-medium transition-all duration-300 hover:bg-white hover:border-primary dark:bg-gray-800/50 dark:hover:bg-gray-800"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="sm:w-4 sm:h-4 transition-transform group-hover:scale-110">
                  <path
                    d="M8 12H16M8 8H16M8 16H12M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryNotFound;

// 添加自定义动画样式
const styles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes bounce-slow {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }
  
  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;

// 注入样式到页面
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}