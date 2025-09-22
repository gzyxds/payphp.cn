import React from "react";
import Link from "next/link";
import { getAllBlogCategories, getBlogsByCategory } from "@/lib/blog";

/**
 * 博客分类列表组件
 * 显示所有可用的博客分类及文章数量
 */
const CategoryList = () => {
  // 获取所有分类并计算每个分类的文章数量
  const allCategories = getAllBlogCategories();
  const categories = allCategories.map((category, index) => {
    const blogs = getBlogsByCategory(category);
    return {
      id: index + 1,
      name: category,
      slug: encodeURIComponent(category),
      count: blogs.length,
    };
  });
  return (
    <div>
      <h4 className="mb-7.5 text-xl font-semibold text-black dark:text-white">
        文章分类
      </h4>
      
      <div className="flex flex-col gap-4.5">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog/category/${category.slug}`}
            className="group flex items-center justify-between rounded-md px-4 py-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <span className="text-base font-medium text-body-color transition-all duration-300 group-hover:text-primary dark:text-body-color-dark">
              {category.name}
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-body-color transition-all duration-300 group-hover:bg-primary group-hover:text-white dark:bg-gray-800 dark:text-body-color-dark">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
      
      {/* 查看所有分类链接 */}
      <div className="mt-7.5 text-center">
        <Link
          href="/blog/categories"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 hover:underline"
        >
          查看所有分类
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;