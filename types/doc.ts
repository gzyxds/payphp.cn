export type DOC = {
  date: string;
  title: string;
  slug: string;
  description: string;
  // 新增分类支持
  category?: string;        // 一级分类
  subcategory?: string;     // 二级分类
  order?: number;           // 排序权重
  icon?: string;            // 图标（可选）
};

// 分类结构类型
export type DocCategory = {
  name: string;             // 分类名称
  slug: string;             // 分类标识
  icon?: string;            // 分类图标
  order?: number;           // 排序权重
  subcategories?: DocSubcategory[];  // 子分类
};

// 子分类结构类型
export type DocSubcategory = {
  name: string;             // 子分类名称
  slug: string;             // 子分类标识
  icon?: string;            // 子分类图标
  order?: number;           // 排序权重
  docs: DOC[];              // 该子分类下的文档
};
