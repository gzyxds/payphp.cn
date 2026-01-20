import { Menu } from "@/types/menu";

/**
 * 网站主导航菜单数据配置
 * 重新设计的菜单排序遵循以下原则：
 * 1. 按用户访问频率和重要性排序
 * 2. 将相关功能分组到子菜单中
 * 3. 保持菜单层级简洁明了
 * 4. 避免重复菜单项
 * 5. 优化SEO友好的URL结构
 */
const menuData: Menu[] = [
  {
    id: 1,
    title: "首页",
    newTab: false,
    path: "/",
    // SEO优化：首页是最重要的页面，权重最高
  },
  {
    id: 2,
    title: "产品服务",
    newTab: false,
    // SEO优化：产品相关页面分组，便于搜索引擎理解网站结构
    submenu: [
      {
        id: 21,
        title: "产品介绍",
        newTab: false,
        path: "/products",
        // SEO优化：产品页面使用简洁的URL
      },
      {
        id: 23,
        title: "解决方案",
        newTab: false,
        path: "/industry",
        // SEO优化：行业解决方案独立页面
      },
      {
        id: 22,
        title: "应用市场",
        newTab: false,
        path: "/market",
        // SEO优化：应用市场页面，提供丰富的功能扩展
      },
      {
        id: 4,
        title: "购买源码",
        newTab: false,
        path: "/auth",
        // SEO优化：商业转化页面，重要性较高
      },
    ],
  },
  {
    id: 3,
    title: "开发者",
    newTab: false,
    // SEO优化：开发者相关资源分组
    submenu: [
      {
        id: 31,
        title: "项目文档",
        newTab: false,
        path: "/docs",
        // SEO优化：文档页面对技术SEO很重要
      },
      {
        id: 32,
        title: "新闻资讯",
        newTab: false,
        path: "/blog",
        // SEO优化：博客页面提供丰富的内容，有利于SEO
      },
      {
        id: 33,
        title: "服务支持",
        newTab: false,
        path: "/support",
        // SEO优化：支持页面增强用户信任度
      },
    ],
  },
  {
    id: 5,
    title: "官网文档",
    newTab: true,
    path: "https://docs.payphp.cn/",
    // SEO优化：联系页面增强用户信任度
  },
  {
    id: 9,
    title: "艺创AI",
    newTab: true,
    path: "https://urlnet.cn/",
    // SEO优化：外部链接使用新窗口打开，避免用户流失
  },
  {
    id: 7,
    title: "优刻云",
    newTab: true,
    path: "https://www.cloudcvm.com/",
    // SEO优化：外部链接使用新窗口打开
  },
  {
    id: 8,
    title: "领流量卡",
    newTab: true,
    path: "https://www.urlka.cn/",
    // SEO优化：联系页面增强用户信任度
  },

  {
    id: 6,
    title: "关于我们",
    newTab: false,
    path: "/about",
    // SEO优化：关于页面增强网站权威性和信任度
  },
  {
    id: 10,
    title: "官方文档",
    newTab: true,
    path: "https://docs.payphp.cn/",
    // SEO优化：官方文档链接
  },
];

export default menuData;
