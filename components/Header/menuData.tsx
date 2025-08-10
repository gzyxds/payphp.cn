import { Menu } from "@/types/menu";

/**
 * 网站主导航菜单数据配置
 * 重新设计的菜单排序遵循以下原则：
 * 1. 按用户访问频率和重要性排序
 * 2. 将相关功能分组到子菜单中
 * 3. 保持菜单层级简洁明了
 * 4. 避免重复菜单项
 */
const menuData: Menu[] = [
  {
    id: 1,
    title: "首页",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "产品服务",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "产品介绍",
        newTab: false,
        path: "/products",
      },
      {
        id: 22,
        title: "功能特性",
        newTab: false,
        path: "/#features",
      },
      {
        id: 23,
        title: "解决方案",
        newTab: false,
        path: "/industry",
      },
    ],
  },
  {
    id: 3,
    title: "开发者",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "API文档",
        newTab: false,
        path: "/docs",
      },
      {
        id: 32,
        title: "技术博客",
        newTab: false,
        path: "/blog",
      },
      {
        id: 33,
        title: "技术支持",
        newTab: false,
        path: "/support",
      },
    ],
  },
  {
    id: 4,
    title: "用户中心",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "购买源码",
        newTab: false,
        path: "/auth",
      },
      {
        id: 42,
        title: "用户注册",
        newTab: false,
        path: "/auth/signup",
      },
    ],
  },
  {
    id: 5,
    title: "关于我们",
    newTab: false,
    path: "/about",
  },
];

export default menuData;
