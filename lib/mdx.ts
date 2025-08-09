import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { DOC, DocCategory, DocSubcategory } from '@/types/doc';

// 文档目录路径
const docsDirectory = path.join(process.cwd(), 'markdown/docs');

/**
 * 获取所有文档的元数据
 * @returns 返回所有文档的元数据数组
 */
export function getAllDocs(): DOC[] {
  // 检查目录是否存在
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  // 获取所有 .mdx 文件
  const fileNames = fs.readdirSync(docsDirectory).filter(name => name.endsWith('.mdx'));
  
  const allDocsData = fileNames.map((fileName) => {
    // 移除 ".mdx" 扩展名获取 slug
    const slug = fileName.replace(/\.mdx$/, '');

    // 读取 MDX 文件内容
    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析文件元数据
    const matterResult = matter(fileContents);

    // 组合数据和 slug
    return {
      slug,
      title: matterResult.data.title || slug,
      description: matterResult.data.description || '',
      date: matterResult.data.date ? String(matterResult.data.date) : '',
      category: matterResult.data.category || '未分类',
      subcategory: matterResult.data.subcategory || '默认',
      order: matterResult.data.order || 999,
      icon: matterResult.data.icon || '📄',
      ...matterResult.data,
    } as DOC;
  });

  // 按日期排序（最新的在前）
  return allDocsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * 获取所有文档的 slug 列表
 * @returns 返回所有文档的 slug 数组
 */
export function getAllDocSlugs() {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(docsDirectory);
  return fileNames
    .filter(name => name.endsWith('.mdx'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.mdx$/, ''),
        },
      };
    });
}

/**
 * 根据 slug 获取文档数据
 * @param slug 文档的 slug
 * @returns 返回文档数据和内容
 */
export async function getDocData(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.mdx`);
  
  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // 使用 gray-matter 解析文件元数据
  const matterResult = matter(fileContents);

  // 组合数据和内容
  return {
    slug,
    content: matterResult.content,
    title: matterResult.data.title || slug,
    description: matterResult.data.description || '',
    date: matterResult.data.date ? String(matterResult.data.date) : '',
    category: matterResult.data.category || '未分类',
    subcategory: matterResult.data.subcategory || '默认',
    order: matterResult.data.order || 999,
    icon: matterResult.data.icon || '📄',
    ...matterResult.data,
  };
}

/**
 * 检查文档是否存在
 * @param slug 文档的 slug
 * @returns 返回布尔值表示文档是否存在
 */
export function docExists(slug: string): boolean {
  const fullPath = path.join(docsDirectory, `${slug}.mdx`);
  return fs.existsSync(fullPath);
}

/**
 * 获取按分类组织的文档结构
 * @returns 返回分类结构的文档树
 */
export function getDocsByCategory(): DocCategory[] {
  const allDocs = getAllDocs();
  const categoryMap = new Map<string, DocCategory>();

  // 遍历所有文档，构建分类结构
  allDocs.forEach(doc => {
    const categorySlug = doc.category || '未分类';
    const subcategorySlug = doc.subcategory || '默认';

    // 获取或创建一级分类
    if (!categoryMap.has(categorySlug)) {
      categoryMap.set(categorySlug, {
        name: categorySlug,
        slug: categorySlug,
        icon: getCategoryIcon(categorySlug),
        order: getCategoryOrder(categorySlug),
        subcategories: []
      });
    }

    const category = categoryMap.get(categorySlug)!;

    // 查找或创建二级分类
    let subcategory = category.subcategories?.find(sub => sub.slug === subcategorySlug);
    if (!subcategory) {
      subcategory = {
        name: subcategorySlug,
        slug: subcategorySlug,
        icon: getSubcategoryIcon(subcategorySlug),
        order: getSubcategoryOrder(subcategorySlug),
        docs: []
      };
      category.subcategories?.push(subcategory);
    }

    // 添加文档到子分类
    subcategory.docs.push(doc);
  });

  // 转换为数组并排序
  const categories = Array.from(categoryMap.values());
  
  // 对分类进行排序
  categories.sort((a, b) => (a.order || 999) - (b.order || 999));
  
  // 对每个分类的子分类和文档进行排序
  categories.forEach(category => {
    if (category.subcategories) {
      category.subcategories.sort((a, b) => (a.order || 999) - (b.order || 999));
      category.subcategories.forEach(subcategory => {
        subcategory.docs.sort((a, b) => (a.order || 999) - (b.order || 999));
      });
    }
  });

  return categories;
}

/**
 * 根据分类名称获取图标
 * @param categoryName 分类名称
 * @returns 返回对应的图标
 */
function getCategoryIcon(categoryName: string): string {
  const iconMap: { [key: string]: string } = {
    '快速开始': '🚀',
    '安装配置': '⚙️',
    '功能使用': '🎮',
    'API文档': '🔌',
    '常见问题': '❓',
    '系统介绍': '📖',
    '未分类': '📂'
  };
  return iconMap[categoryName] || '📂';
}

/**
 * 根据分类名称获取排序权重
 * @param categoryName 分类名称
 * @returns 返回排序权重
 */
function getCategoryOrder(categoryName: string): number {
  const orderMap: { [key: string]: number } = {
    '快速开始': 1,
    '系统介绍': 2,
    '安装配置': 3,
    '功能使用': 4,
    'API文档': 5,
    '常见问题': 6,
    '未分类': 999
  };
  return orderMap[categoryName] || 999;
}

/**
 * 根据子分类名称获取图标
 * @param subcategoryName 子分类名称
 * @returns 返回对应的图标
 */
function getSubcategoryIcon(subcategoryName: string): string {
  const iconMap: { [key: string]: string } = {
    '环境要求': '🔧',
    '安装步骤': '📦',
    '基础配置': '⚙️',
    '高级配置': '🔧',
    '支付管理': '💳',
    '商户管理': '👥',
    '订单管理': '📋',
    '系统管理': '🛠️',
    '接口说明': '📡',
    '示例代码': '💻',
    '错误码': '⚠️',
    '安装问题': '🔧',
    '使用问题': '❓',
    '默认': '📄'
  };
  return iconMap[subcategoryName] || '📄';
}

/**
 * 根据子分类名称获取排序权重
 * @param subcategoryName 子分类名称
 * @returns 返回排序权重
 */
function getSubcategoryOrder(subcategoryName: string): number {
  const orderMap: { [key: string]: number } = {
    '环境要求': 1,
    '安装步骤': 2,
    '基础配置': 3,
    '高级配置': 4,
    '支付管理': 5,
    '商户管理': 6,
    '订单管理': 7,
    '系统管理': 8,
    '接口说明': 1,
    '示例代码': 2,
    '错误码': 3,
    '安装问题': 1,
    '使用问题': 2,
    '默认': 999
  };
  return orderMap[subcategoryName] || 999;
}