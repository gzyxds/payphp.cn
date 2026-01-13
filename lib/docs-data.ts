import { DOC, DocCategory } from '@/types/doc';

/**
 * 获取静态分类数据
 * 用于静态导出模式下的文档分类展示
 */
export function getStaticCategoriesData(): DocCategory[] {
  return [
    {
      slug: 'getting-started',
      name: '开始使用',
      icon: '🚀',
      subcategories: [
        {
          slug: 'introduction',
          name: '介绍',
          docs: [
            {
              slug: 'system',
              title: '系统介绍',
              description: '了解Pay系统的核心功能和特性',
              date: '2024-01-15',
              category: '系统介绍',
              subcategory: '介绍',
              order: 1,
              icon: '📖'
            },
            {
              slug: 'features',
              title: '功能特性',
              description: 'Pay系统的主要功能和特性概述',
              date: '2024-01-16',
              category: '系统介绍',
              subcategory: '介绍',
              order: 2,
              icon: '🚀'
            }
          ]
        },
        {
          slug: 'setup',
          name: '安装配置',
          docs: [
            {
              slug: 'installation',
              title: '安装指南',
              description: '如何安装和部署PaYphp系统',
              date: '2024-01-17',
              category: '开始使用',
              subcategory: '安装配置',
              order: 1,
              icon: '⚙️'
            },
            {
              slug: 'configuration',
              title: '系统配置',
              description: '系统初始化和基本配置说明',
              date: '2024-01-18',
              category: '开始使用',
              subcategory: '安装配置',
              order: 2,
              icon: '⚙️'
            }
          ]
        }
      ]
    },
    {
      slug: 'user-guide',
      name: '使用指南',
      icon: '📋',
      subcategories: [
        {
          slug: 'basic',
          name: '基础功能',
          docs: [
            {
              slug: 'dashboard',
              title: '控制面板使用',
              description: '如何使用系统控制面板',
              date: '2024-01-19',
              category: '使用指南',
              subcategory: '基础功能',
              order: 1,
              icon: '📋'
            },
            {
              slug: 'payment',
              title: '支付管理',
              description: '支付订单管理和处理流程',
              date: '2024-01-20',
              category: '使用指南',
              subcategory: '基础功能',
              order: 2,
              icon: '💰'
            }
          ]
        },
        {
          slug: 'advanced',
          name: '高级功能',
          docs: [
            {
              slug: 'api',
              title: 'API接口使用',
              description: '如何使用系统提供的API接口',
              date: '2024-01-21',
              category: '使用指南',
              subcategory: '高级功能',
              order: 1,
              icon: '🔌'
            },
            {
              slug: 'plugins',
              title: '插件系统',
              description: '系统插件的安装和使用方法',
              date: '2024-01-22',
              category: '使用指南',
              subcategory: '高级功能',
              order: 2,
              icon: '🧩'
            }
          ]
        }
      ]
    }
  ];
}

/**
 * 获取静态文档数据
 * 用于静态导出模式下的文档列表展示
 */
export function getStaticDocsData(): DOC[] {
  // 从分类数据中提取所有文档
  const categories = getStaticCategoriesData();
  const allDocs: DOC[] = [];
  
  categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      subcategory.docs.forEach(doc => {
        allDocs.push(doc);
      });
    });
  });
  
  // 按照order排序
  return allDocs.sort((a, b) => a.order - b.order);
}