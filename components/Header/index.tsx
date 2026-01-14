"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Github, Bell,
  Moon, Sun, User, Settings, HelpCircle,
  BookOpen, Code, Zap, Layers, ExternalLink, Cloud, Gift, Sparkles,
  FileText, Archive, Newspaper, ShoppingCart, Cpu, Globe, Smartphone
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import ThemeToggler from "./ThemeToggler";

/**
 * 导航子菜单项类型定义
 */
interface NavSubItem {
  name: string;
  path: string;
  icon: React.ReactElement;
  color: string;
  description: string;
  external?: boolean;
  url?: string;
}

/**
 * 导航菜单项类型定义
 */
interface NavItem {
  name: string;
  path?: string;
  dropdown?: boolean;
  items?: NavSubItem[];
}

/**
 * 常量定义
 */
const SCROLL_THRESHOLD = 20;
const MOBILE_BREAKPOINT = 768;

/**
 * 导航菜单配置
 */
const NAV_ITEMS: NavItem[] = [
  {
    name: "产品服务",
    dropdown: true,
    items: [
      { name: "产品介绍", path: "/products", icon: <Layers className="h-5 w-5" />, color: "indigo", description: "PaYphp产品中心" },
      { name: "解决方案", path: "/industry", icon: <Cpu className="h-5 w-5" />, color: "indigo", description: "行业解决方案" },
      { name: "应用市场", path: "/market", icon: <ShoppingCart className="h-5 w-5" />, color: "purple", description: "丰富的功能扩展" },
      { name: "购买源码", path: "/auth", icon: <Archive className="h-5 w-5" />, color: "amber", description: "获取开源代码" }
    ]
  },
  {
    name: "开发者",
    dropdown: true,
    items: [
      { name: "项目文档", path: "/docs", icon: <BookOpen className="h-5 w-5" />, color: "indigo", description: "详细的技术文档" },
      { name: "新闻资讯", path: "/blog", icon: <Newspaper className="h-5 w-5" />, color: "purple", description: "最新动态和资讯" },
      { name: "服务支持", path: "/support", icon: <HelpCircle className="h-5 w-5" />, color: "cyan", description: "专业技术支持" }
    ]
  },
  {
    name: "相关资源",
    dropdown: true,
    items: [
      { name: "官网文档", path: "https://doc.PaYphp.cn/help", icon: <FileText className="h-5 w-5" />, color: "amber", description: "官方文档中心", external: true, url: "https://doc.PaYphp.cn/help" },
      { name: "艺创AI", path: "https://urlnet.cn/", icon: <Sparkles className="h-5 w-5" />, color: "amber", description: "AI智能平台", external: true, url: "https://urlnet.cn/" },
      { name: "优刻云", path: "https://www.cloudcvm.com/", icon: <Cloud className="h-5 w-5" />, color: "sky", description: "云端计算服务", external: true, url: "https://www.cloudcvm.com/" },
      { name: "领流量卡", path: "https://www.urlka.cn/", icon: <Smartphone className="h-5 w-5" />, color: "pink", description: "流量卡服务", external: true, url: "https://www.urlka.cn/" }
    ]
  },
  { name: "关于我们", path: "/about" }
];

/**
 * 优化后的动画配置 - 减少动画复杂度
 */
const MOBILE_MENU_VARIANTS = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 }
};

const DROPDOWN_VARIANTS = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 }
};

/**
 * 网站头部导航组件
 * 功能：响应式导航、下拉菜单、暗黑模式切换、用户菜单、滚动监听
 */
export default function Header(): JSX.Element {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * 处理导航点击
   */
  const handleNavigation = useCallback(() => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }, []);

  /**
   * 处理外部链接在新窗口打开
   */
  const openExternalLink = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  /**
   * 切换移动端菜单
   */
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  /**
   * 切换移动端下拉菜单
   */
  const toggleMobileDropdown = useCallback((name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  }, []);

  /**
   * 鼠标悬停菜单处理函数
   */
  const handleMenuMouseEnter = useCallback((menuName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredMenu(menuName);
  }, []);

  const handleMenuMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 150);
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    setHoveredMenu(null);
  }, []);

  /**
   * 初始化暗黑模式
   */
  useEffect(() => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  /**
   * 滚动监听
   */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * 窗口大小变化监听
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  /**
   * 点击外部区域关闭菜单
   */
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  /**
   * 清理悬停定时器
   */
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  /**
   * 渲染特殊菜单项名称（带动画点）
   */
  const renderMenuItemName = (itemName: string) => {
    if (itemName === "相关资源") {
      return (
        <span className="relative flex items-center">
          <span>相关资</span>
          <span className="relative inline-block">
            <span>源</span>
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          </span>
        </span>
      );
    }
    if (itemName === "产品服务") {
      return (
        <span className="relative flex items-center">
          <span>产品服</span>
          <span className="relative inline-block">
            <span>务</span>
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </span>
        </span>
      );
    }
    return <span>{itemName}</span>;
  };

  /**
   * 优化：提取为独立组件，避免每次渲染重新创建
   */
  const MobileMenuItem = memo(({ subItem }: { subItem: NavSubItem }) => {
    const baseClass = "flex flex-col items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30";
    const iconWrapperClass = "w-9 h-9 rounded-lg flex items-center justify-center mb-1.5";

    const content = (
      <>
        <div className={iconWrapperClass}>
          {React.cloneElement(subItem.icon, { className: "h-5 w-5" })}
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-1">{subItem.name}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{subItem.description}</span>
        </div>
      </>
    );

    return (
      <div>
        {subItem.external ? (
          <div
            className={`${baseClass} cursor-pointer relative`}
            onClick={() => openExternalLink(subItem.url!)}
          >
            {content}
            <ExternalLink className="h-3 w-3 text-gray-400 absolute top-2 right-2 dark:text-gray-500" />
          </div>
        ) : (
          <Link href={subItem.path} className={baseClass} onClick={handleNavigation}>
            {content}
          </Link>
        )}
      </div>
    );
  });

  /**
   * 优化：使用CSS Grid两行两列布局
   */
  const renderMobileCategorizedMenu = useCallback((items: NavSubItem[]) => {
    return (
      <div className="grid grid-cols-2 gap-2.5">
        {items.map((item) => <MobileMenuItem key={item.name} subItem={item} />)}
      </div>
    );
  }, [handleNavigation, openExternalLink]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm py-2 dark:bg-gray-900/95"
          : "bg-white border-b border-gray-100 py-3 dark:bg-gray-900 dark:border-gray-800"
      }`}
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex items-center justify-between h-14">
            {/* Logo区域 */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center group" onClick={handleNavigation}>
                <div className="flex items-center">
                  <Image
                    src="/images/logo/logo-dark.svg"
                    alt="PaYphp"
                    width={120}
                    height={30}
                    className="h-8 w-auto dark:hidden"
                  />
                  <Image
                    src="/images/logo/logo-light.svg"
                    alt="PaYphp"
                    width={120}
                    height={30}
                    className="h-8 w-auto hidden dark:block"
                  />
                  <span className="ml-1.5 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-medium dark:bg-blue-900 dark:text-blue-300">官网</span>
                </div>
              </Link>

            {/* 桌面端导航 */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                className={`group flex items-center text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                  pathname === "/"
                    ? "text-[#015bfe] bg-blue-50/70 dark:text-blue-400 dark:bg-blue-950/50"
                    : "text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50"
                }`}
              >
                首页
              </Link>

              {NAV_ITEMS.map((item) => (
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMenuMouseEnter(item.name)}
                    onMouseLeave={handleMenuMouseLeave}
                  >
                    <button
                      className={`group flex items-center text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                        hoveredMenu === item.name
                          ? "text-[#015bfe] bg-blue-50/70 dark:text-blue-400 dark:bg-blue-950/50"
                          : "text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50"
                      }`}
                    >
                      {renderMenuItemName(item.name)}
                      <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                        hoveredMenu === item.name ? "rotate-180" : ""
                      }`} />
                    </button>

                    {/* 悬停展开的下拉菜单 */}
                    <AnimatePresence>
                      {hoveredMenu === item.name && (
                        <motion.div
                          variants={DROPDOWN_VARIANTS}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 right-0 mx-auto top-full mt-3 w-[480px] bg-white dark:bg-gray-900 shadow-xl border border-gray-200/60 dark:border-gray-700/60 rounded-lg backdrop-blur-sm z-50"
                          style={{ marginLeft: '-210px' }}
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          {/* 箭头指示器 */}
                          <div className="absolute -top-2 left-0 right-0 mx-auto" style={{ width: 'fit-content' }}>
                            <div className="w-4 h-4 bg-white dark:bg-gray-900 border-l border-t border-gray-200/60 dark:border-gray-700/60 transform rotate-45"></div>
                          </div>
                          {/* 菜单标题区域 */}
                          <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wide">
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {item.name === "产品服务" ? "探索我们的产品解决方案" :
                               item.name === "开发者" ? "获取开发者资源和支持" : "相关资源和合作伙伴"}
                            </p>
                          </div>
                          {/* 菜单项网格 */}
                          <div className="p-4">
                            <div className="grid grid-cols-2 gap-2">
                              {item.items?.map((subItem) => (
                                <div key={subItem.name}>
                                  {subItem.external ? (
                                    <div
                                      className="enterprise-menu-item group/item cursor-pointer"
                                      onClick={() => openExternalLink(subItem.url!)}
                                    >
                                      <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                                        {/* 简约图标区域 */}
                                        <div className="flex-shrink-0 mt-0.5">
                                          <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-900/30 transition-colors duration-200">
                                            {React.cloneElement(subItem.icon, { className: "w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200" })}
                                          </div>
                                        </div>
                                        {/* 文本内容区域 */}
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200 leading-tight">
                                            {subItem.name}
                                          </div>
                                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed line-clamp-2">
                                            {subItem.description}
                                          </div>
                                        </div>
                                        {/* 简约箭头指示器 */}
                                        <div className="flex-shrink-0 mt-1">
                                          <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 opacity-0 group-hover/item:opacity-100 group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 transition-all duration-200" />
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      href={subItem.path}
                                      className="enterprise-menu-item group/item"
                                      onClick={handleNavigation}
                                    >
                                      <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                                        {/* 简约图标区域 */}
                                        <div className="flex-shrink-0 mt-0.5">
                                          <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-900/30 transition-colors duration-200">
                                            {React.cloneElement(subItem.icon, { className: "w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200" })}
                                          </div>
                                        </div>
                                        {/* 文本内容区域 */}
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200 leading-tight">
                                            {subItem.name}
                                          </div>
                                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed line-clamp-2">
                                            {subItem.description}
                                          </div>
                                        </div>
                                        {/* 简约箭头指示器 */}
                                        <div className="flex-shrink-0 mt-1">
                                          <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 opacity-0 group-hover/item:opacity-100 group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 transition-all duration-200" />
                                        </div>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.path!}
                    className={`group flex items-center text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                      pathname === item.path
                        ? "text-[#015bfe] bg-blue-50/70 dark:text-blue-400 dark:bg-blue-950/50"
                        : "text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50"
                    }`}
                  >
                    {renderMenuItemName(item.name)}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* 右侧操作区域 */}
          <div className="flex items-center space-x-3">
            <ThemeToggler />

            <Link
              href="/auth"
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-lg border border-[#015bfe] px-5 py-2 text-sm font-semibold text-[#015bfe] transition-all hover:bg-[#015bfe] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#015bfe] focus:ring-offset-2"
            >
              <ShoppingCart className="h-4 w-4" />
              购买授权
            </Link>

            <Link
              href="https://merch.payphp.cn"
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-lg bg-[#015bfe] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#015bfe]/90 focus:outline-none focus:ring-2 focus:ring-[#015bfe] focus:ring-offset-2"
            >
              <User className="h-4 w-4" />
              登入注册
            </Link>

            {/* 移动端菜单按钮 */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={MOBILE_MENU_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {/* 产品服务菜单 */}
              <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-gray-800/50">
                <button
                  onClick={() => toggleMobileDropdown('products')}
                  className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-blue-50/70 transition-colors duration-200 dark:hover:bg-blue-950/50"
                >
                  <div className="font-medium text-gray-800 flex items-center dark:text-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900/50">
                      <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex flex-col items-start">
                      {renderMenuItemName("产品服务")}
                      <span className="text-xs text-gray-500 dark:text-gray-400">探索产品解决方案</span>
                    </div>
                  </div>
                  <div
                    className="transition-transform duration-200"
                    style={{ transform: activeDropdown === 'products' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      variants={MOBILE_MENU_VARIANTS}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="p-3 bg-white/90 rounded-lg dark:bg-gray-900/90">
                        {renderMobileCategorizedMenu(NAV_ITEMS.find(item => item.name === "产品服务")?.items || [])}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 开发者菜单 */}
              <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-gray-800/50">
                <button
                  onClick={() => toggleMobileDropdown('developer')}
                  className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-blue-50/70 transition-colors duration-200 dark:hover:bg-blue-950/50"
                >
                  <div className="font-medium text-gray-800 flex items-center dark:text-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-3 dark:bg-indigo-900/50">
                      <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span>开发者</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">开发者资源和支持</span>
                    </div>
                  </div>
                  <div
                    className="transition-transform duration-200"
                    style={{ transform: activeDropdown === 'developer' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'developer' && (
                    <motion.div
                      variants={MOBILE_MENU_VARIANTS}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="p-3 bg-white/90 rounded-lg dark:bg-gray-900/90">
                        {renderMobileCategorizedMenu(NAV_ITEMS.find(item => item.name === "开发者")?.items || [])}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 相关资源菜单 */}
              <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-gray-800/50">
                <button
                  onClick={() => toggleMobileDropdown('resources')}
                  className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-blue-50/70 transition-colors duration-200 dark:hover:bg-blue-950/50"
                >
                  <div className="font-medium text-gray-800 flex items-center dark:text-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mr-3 dark:bg-orange-900/50">
                      <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex flex-col items-start">
                      {renderMenuItemName("相关资源")}
                      <span className="text-xs text-gray-500 dark:text-gray-400">相关资源和合作伙伴</span>
                    </div>
                  </div>
                  <div
                    className="transition-transform duration-200"
                    style={{ transform: activeDropdown === 'resources' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      variants={MOBILE_MENU_VARIANTS}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="p-3 bg-white/90 rounded-lg dark:bg-gray-900/90">
                        {renderMobileCategorizedMenu(NAV_ITEMS.find(item => item.name === "相关资源")?.items || [])}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 快速导航网格 */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  key="home"
                  href="/"
                  className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30"
                  onClick={handleNavigation}
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-100 flex items-center justify-center mr-2.5 dark:bg-cyan-900/50">
                    <Zap className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">首页</span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">返回首页</span>
                  </div>
                </Link>

                <Link
                  key="about"
                  href="/about"
                  className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30"
                  onClick={handleNavigation}
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center mr-2.5 dark:bg-emerald-900/50">
                    <User className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">关于我们</span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">了解团队</span>
                  </div>
                </Link>
              </div>

              {/* 登录和注册按钮 */}
              <div className="pt-4 space-y-2.5">
                <div className="p-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg dark:from-blue-950/50 dark:to-indigo-950/50">
                  <div className="flex items-center mb-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-2 dark:bg-blue-900/50">
                      <User className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">账户中心</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link key="login" href="https://merch.payphp.cn" target="_blank" rel="noopener noreferrer">
                      <button
                        className="border-[#015bfe] text-[#015bfe] hover:bg-[#015bfe] hover:text-white w-full font-medium rounded-lg transition-all duration-200 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 text-sm py-2.5 px-4"
                      >
                        <User className="h-4 w-4 mr-1.5 inline" />
                        登录
                      </button>
                    </Link>
                    <Link key="register" href="https://merch.payphp.cn" target="_blank" rel="noopener noreferrer">
                      <button className="bg-gradient-to-r from-[#015bfe] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white w-full font-medium rounded-lg transition-all duration-200 text-sm py-2.5 px-4">
                        <Sparkles className="h-4 w-4 mr-1.5 inline" />
                        注册
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


