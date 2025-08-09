import { DOC, DocCategory } from '@/types/doc';

// 静态文档数据 - 用于静态导出
export const staticDocsData: DOC[] = [
  {
    slug: 'intro',
    title: 'Peak码支付系统介绍',
    description: '了解Peak码支付系统的核心功能和特性',
    date: '2024-01-15',
    category: '系统介绍',
    subcategory: '默认',
    order: 1,
    icon: '📖'
  },
  {
    slug: 'install',
    title: '安装指南',
    description: '详细的系统安装教程和配置指南',
    date: '2024-01-16',
    category: '功能使用',
    subcategory: '默认',
    order: 2,
    icon: '📄'
  },
  {
    slug: 'deploy',
    title: '部署指南',
    description: '系统部署和上线配置指南',
    date: '2024-01-17',
    category: '功能使用',
    subcategory: '默认',
    order: 3,
    icon: '🚀'
  }
];

// 静态分类文档数据 - 用于静态导出
export const staticCategoriesData: DocCategory[] = [
  {
    slug: 'system-intro',
    name: '系统介绍',
    icon: '📖',
    subcategories: [
      {
        slug: 'default',
        name: '默认',
        docs: [
          {
            slug: 'intro',
            title: 'Peak码支付系统介绍',
            description: '了解Peak码支付系统的核心功能和特性',
            date: '2024-01-15',
            category: '系统介绍',
            subcategory: '默认',
            order: 1,
            icon: '📖'
          }
        ]
      }
    ]
  },
  {
    slug: 'usage',
    name: '功能使用',
    icon: '📄',
    subcategories: [
      {
        slug: 'default',
        name: '默认',
        docs: [
          {
            slug: 'install',
            title: '安装指南',
            description: '详细的系统安装教程和配置指南',
            date: '2024-01-16',
            category: '功能使用',
            subcategory: '默认',
            order: 2,
            icon: '📄'
          },
          {
            slug: 'deploy',
            title: '部署指南',
            description: '系统部署和上线配置指南',
            date: '2024-01-17',
            category: '功能使用',
            subcategory: '默认',
            order: 3,
            icon: '🚀'
          }
        ]
      }
    ]
  }
];

// 获取分类文档数据的函数
export function getStaticCategoriesData(): DocCategory[] {
  return staticCategoriesData;
}

// 获取扁平文档数据的函数
export function getStaticDocsData(): DOC[] {
  return staticDocsData;
} 