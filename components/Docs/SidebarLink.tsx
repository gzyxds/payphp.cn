"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { getStaticCategoriesData } from "@/lib/docs-data";

/** 分类图标映射 */
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "getting-started": (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "user-guide": (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
};

/**
 * 文档侧边栏导航
 * 分类折叠 + 当前页高亮，客户端组件以支持 usePathname
 */
const SidebarLink = () => {
  const pathname = usePathname();
  const categories = getStaticCategoriesData();

  return (
    <nav className="space-y-1">
      <div className="mb-3 px-3 py-2">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
          文档导航
        </h3>
      </div>

      {categories.map((cat) => (
        <div key={cat.slug}>
          {/* 分类标题 */}
          <div className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            <span className="text-gray-400 dark:text-gray-500">
              {CATEGORY_ICONS[cat.slug] || null}
            </span>
            <span>{cat.name}</span>
            <ChevronDown className="ml-auto h-3.5 w-3.5 text-gray-400" />
          </div>

          {/* 子分类 + 文档列表 */}
          {cat.subcategories.map((sub) => (
            <div key={sub.slug} className="ml-4 border-l border-gray-100 dark:border-gray-800">
              <div className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                {sub.name}
              </div>
              {sub.docs.map((doc) => {
                const isActive = pathname === `/docs/${doc.slug}`;
                return (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className={`block border-l-2 py-1.5 pl-6 pr-3 text-sm transition-colors ${
                      isActive
                        ? "border-primary bg-primary/5 font-medium text-primary dark:border-blue-500 dark:bg-blue-900/20 dark:text-blue-400"
                        : "border-transparent text-gray-600 hover:border-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-200"
                    }`}
                  >
                    {doc.title}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default SidebarLink;