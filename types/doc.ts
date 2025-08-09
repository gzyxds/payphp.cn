/**
 * 文档接口定义
 */
export interface DOC {
  slug: string;
  title: string;
  description?: string;
  date: string;
  category: string;
  subcategory: string;
  order: number;
  icon?: string;
}

/**
 * 子分类接口定义
 */
export interface DocSubcategory {
  slug: string;
  name: string;
  docs: DOC[];
  icon?: string;
  order?: number;
}

/**
 * 文档分类接口定义
 */
export interface DocCategory {
  slug: string;
  name: string;
  icon?: string;
  order?: number;
  subcategories: DocSubcategory[];
}
