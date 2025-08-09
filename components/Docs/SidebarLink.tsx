'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DOC, DocCategory } from '@/types/doc';
import { getStaticCategoriesData, getStaticDocsData } from '@/lib/docs-data';

/**
 * 侧边栏导航链接组件
 * 支持二级分类显示文档列表并高亮当前页面
 */
export default function SidebarLink() {
  const pathname = usePathname();
  const [categories, setCategories] = useState<DocCategory[]>([]);
  const [flatDocs, setFlatDocs] = useState<DOC[]>([]);
  const [viewMode, setViewMode] = useState<'categorized' | 'flat'>('categorized');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    // 始终使用静态数据，无论是开发模式还是生产模式
    const staticCategories = getStaticCategoriesData();
    const staticDocs = getStaticDocsData();
    
    console.log('静态分类数据:', staticCategories);
    console.log('静态文档数据:', staticDocs);
    
    setCategories(staticCategories);
    setFlatDocs(staticDocs);
    
    // 默认展开所有分类
    const allCategorySlugs = staticCategories.map(cat => cat.slug);
    setExpandedCategories(new Set(allCategorySlugs));
  }, []);

  // 切换分类展开状态
  const toggleCategory = (categorySlug: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categorySlug)) {
      newExpanded.delete(categorySlug);
    } else {
      newExpanded.add(categorySlug);
    }
    setExpandedCategories(newExpanded);
  };

  // 获取扁平化图标
  const getIcon = (iconName: string | undefined) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      '📖': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
        </svg>
      ),
      '🚀': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
        </svg>
      ),
      '⚙️': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      ),
      '📋': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
        </svg>
      ),
      '❓': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
        </svg>
      ),
      '📄': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
        </svg>
      ),
      '🎨': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2V4a2 2 0 012-2h11a2 2 0 00-2-2H4z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M6 4a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V4zm2 1a1 1 0 000 2h8a1 1 0 100-2H8zm0 4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd"/>
        </svg>
      ),
      '🧩': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
        </svg>
      ),
      '📡': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
          <path d="M2 15.5v2a2 2 0 002 2h12a2 2 0 002-2v-2a22.58 22.58 0 01-8 1.5c-2.8 0-5.6-.5-8-1.5z"/>
        </svg>
      )
    };
    
    return iconMap[iconName || '📄'] || (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
      </svg>
    );
  };

  // 渲染分类视图 - 简洁设计
  const renderCategorizedView = () => (
    <div className="space-y-2">
      {categories.map((category) => {
        const isExpanded = expandedCategories.has(category.slug);
        
        return (
          <div key={category.slug}>
            {/* 分类标题 - 简洁设计 */}
            <button
              onClick={() => toggleCategory(category.slug)}
              className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <div className="text-gray-500 text-sm">
                  {getIcon(category.icon)}
                </div>
                <span className="font-medium text-gray-800 text-sm">{category.name}</span>
              </div>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* 子分类和文档 - 简洁布局 */}
            {isExpanded && category.subcategories && (
              <div className="ml-4 space-y-1">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.slug}>
                    {/* 子分类标题 - 简洁设计 */}
                    <div className="px-2 py-1">
                      <span className="text-xs font-medium text-gray-600">{subcategory.name}</span>
                    </div>

                    {/* 文档列表 - 简洁样式 */}
                    <div className="space-y-0.5">
                      {subcategory.docs.map((doc) => {
                        const isActive = pathname === `/docs/${doc.slug}`;
                        
                        return (
                          <Link
                            key={doc.slug}
                            href={`/docs/${doc.slug}`}
                            className={`
                              block px-2 py-1.5 text-sm transition-colors
                              ${isActive 
                                ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-500' 
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                              }
                            `}
                          >
                            <span>{doc.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  // 渲染扁平视图 - 简洁设计
  const renderFlatView = () => (
    <div className="space-y-0.5">
      {flatDocs.map((doc) => {
        const isActive = pathname === `/docs/${doc.slug}`;
        
        return (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className={`
              block px-3 py-2 text-sm transition-colors
              ${isActive 
                ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-500' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }
            `}
          >
            <span className="font-medium">{doc.title}</span>
            {doc.description && (
              <div className="text-xs text-gray-500 mt-0.5">{doc.description}</div>
            )}
          </Link>
        );
      })}
    </div>
  );

  return (
    <nav className="space-y-3">
      {/* 导航标题和视图切换 - 简洁设计 */}
      <div className="pb-2 border-b border-gray-200">
        <h2 className="text-base font-semibold text-gray-900 mb-2">文档导航</h2>
        
        {/* 视图切换按钮 - 简洁设计 */}
        <div className="flex bg-gray-100 rounded">
          <button
            onClick={() => setViewMode('categorized')}
            className={`
              flex-1 px-2 py-1.5 text-xs font-medium transition-colors rounded-l
              ${viewMode === 'categorized'
                ? 'bg-white text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
          >
            分类
          </button>
          <button
            onClick={() => setViewMode('flat')}
            className={`
              flex-1 px-2 py-1.5 text-xs font-medium transition-colors rounded-r
              ${viewMode === 'flat'
                ? 'bg-white text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
              }
            `}
          >
            列表
          </button>
        </div>
      </div>

      {/* 根据视图模式渲染内容 */}
      {viewMode === 'categorized' ? renderCategorizedView() : renderFlatView()}
    </nav>
  );
}
