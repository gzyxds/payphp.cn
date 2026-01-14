import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { DOC, DocCategory, DocSubcategory } from '@/types/doc';
// 导入静态数据
import { getStaticDocsData, getStaticCategoriesData } from './docs-data';

// 文档目录路径
const docsDirectory = path.join(process.cwd(), 'markdown/docs');

// 递归获取所有 .mdx 文件
const getAllMdxFiles = (dir: string): string[] => {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMdxFiles(filePath));
    } else if (path.extname(filePath) === '.mdx') {
      results.push(filePath);
    }
  });
  return results;
};


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
  const filePaths = getAllMdxFiles(docsDirectory);

  const allDocsData = filePaths.map((filePath) => {
    // 从文件路径创建 slug，并确保路径分隔符为 /
    const slug = path.relative(docsDirectory, filePath).replace(/\\/g, '/').replace(/\.mdx$/, '');

    // 读取 MDX 文件内容
    const fileContents = fs.readFileSync(filePath, 'utf8');

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

  const filePaths = getAllMdxFiles(docsDirectory);
  return filePaths
    .map((filePath) => {
      return {
        params: {
          slug: path.relative(docsDirectory, filePath).replace(/\\/g, '/').replace(/\.mdx$/, ''),
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
  if (fs.existsSync(fullPath)) {
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

  // 如果物理文件不存在，尝试从静态数据中获取
  const staticDocs = getStaticDocsData();
  const staticDoc = staticDocs.find(doc => doc.slug === slug);

  if (staticDoc) {
    // 从静态数据中找到了文档，但需要提供一个默认的内容
    return {
      ...staticDoc,
      content: `# ${staticDoc.title}\n\n${staticDoc.description || '暂无内容'}\n\n此文档正在建设中，敬请期待。`
    };
  }

  // 检查是否是分类
  const staticCategories = getStaticCategoriesData();
  const category = staticCategories.find(cat => cat.slug === slug);

  if (category) {
    return {
      slug,
      title: category.name,
      description: `${category.name}分类下的所有文档`,
      date: new Date().toISOString(),
      category: category.name,
      subcategory: '默认',
      order: category.order || 999,
      icon: category.icon || '📂',
      content: `# ${category.name}\n\n这是${category.name}分类的概述页面。\n\n请从侧边栏选择具体的文档进行阅读。`
    };
  }

  // 检查是否是子分类
  for (const cat of staticCategories) {
    const subcategory = cat.subcategories.find(subcat => subcat.slug === slug);
    if (subcategory) {
      return {
        slug,
        title: subcategory.name,
        description: `${cat.name} > ${subcategory.name}下的所有文档`,
        date: new Date().toISOString(),
        category: cat.name,
        subcategory: subcategory.name,
        order: subcategory.order || 999,
        icon: subcategory.icon || '📄',
        content: `# ${subcategory.name}\n\n这是${cat.name}分类下${subcategory.name}子分类的概述页面。\n\n请从侧边栏选择具体的文档进行阅读。`
      };
    }
  }

  return null;
}

/**
 * 检查文档是否存在
 * @param slug 文档的 slug
 * @returns 返回布尔值表示文档是否存在
 */
export function docExists(slug: string): boolean {
  // 首先检查物理文件是否存在
  const fullPath = path.join(docsDirectory, `${slug}.mdx`);
  if (fs.existsSync(fullPath)) {
    return true;
  }

  // 如果物理文件不存在，检查静态数据中是否有该文档
  const staticDocs = getStaticDocsData();
  if (staticDocs.some(doc => doc.slug === slug)) {
    return true;
  }

  // 检查是否是分类或子分类
  const staticCategories = getStaticCategoriesData();
  if (staticCategories.some(category => category.slug === slug)) {
    return true;
  }

  if (staticCategories.some(category =>
    category.subcategories.some(subcategory => subcategory.slug === slug)
  )) {
    return true;
  }

  return false;
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
