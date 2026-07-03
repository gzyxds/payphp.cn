import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getAllBlogCategories, getBlogsByCategory } from "@/lib/blog";

/**
 * 博客分类列表（侧边栏组件）
 * 显示所有分类及文章计数
 */
const CategoryList = () => {
  const allCategories = getAllBlogCategories();
  const categories = allCategories.map((category) => {
    const blogs = getBlogsByCategory(category);
    return {
      name: category,
      slug: encodeURIComponent(category),
      count: blogs.length,
    };
  });

  if (categories.length === 0) return null;

  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
        文章分类
      </h4>
      <div className="flex flex-col">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/blog/category/${category.slug}`}
            className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
          >
            <span className="font-medium text-gray-700 group-hover:text-primary dark:text-gray-300 dark:group-hover:text-blue-400">
              {category.name}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
              <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gray-100 px-1.5 text-xs font-medium text-gray-600 group-hover:bg-primary/10 group-hover:text-primary dark:bg-gray-700 dark:text-gray-400">
                {category.count}
              </span>
              <ChevronRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;