/**
 * 面包屑导航组件
 * 提供页面导航路径，提升用户体验和SEO效果
 */

import React from 'react';
import Link from 'next/link';
// 使用lucide-react替代@heroicons/react，因为项目中已安装lucide-react
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * 面包屑导航组件
 * @param items 面包屑项目数组
 * @param className 自定义样式类名
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav 
      className={`flex ${className}`} 
      aria-label="面包屑导航"
      role="navigation"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {/* 首页链接 */}
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            aria-label="返回首页"
          >
            <Home className="w-4 h-4 mr-2" />
            首页
          </Link>
        </li>

        {/* 面包屑项目 */}
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            {item.current ? (
              <span 
                className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;