"use client";

import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, User, HelpCircle,
  BookOpen, Code, Zap, Layers, ExternalLink, Cloud, Sparkles,
  FileText, Archive, Newspaper, ShoppingCart, Cpu, Smartphone
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import ThemeToggler from "./ThemeToggler";

// ─── Constants ───

const SCROLL_THRESHOLD = 20;
const MOBILE_BREAKPOINT = 768;

const URL_MERCH = "https://merch.payphp.cn";
const URL_DOCS = "https://docs.payphp.cn/";

interface NavSubItem {
  name: string;
  path: string;
  icon: React.ReactElement;
  description: string;
  external?: boolean;
  url?: string;
}

interface NavItem {
  name: string;
  path?: string;
  dropdown?: boolean;
  items?: NavSubItem[];
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    name: "产品服务",
    dropdown: true,
    items: [
      { name: "产品介绍", path: "/products", icon: <Layers className="h-5 w-5" />, description: "PaYphp产品中心" },
      { name: "解决方案", path: "/industry", icon: <Cpu className="h-5 w-5" />, description: "行业解决方案" },
      { name: "应用市场", path: "/market", icon: <ShoppingCart className="h-5 w-5" />, description: "丰富的功能扩展" },
      { name: "购买源码", path: "/auth", icon: <Archive className="h-5 w-5" />, description: "获取开源代码" },
    ],
  },
  {
    name: "服务支持",
    dropdown: true,
    items: [
      { name: "商户文档", path: "https://docs.payphp.cn/8033235m0", icon: <BookOpen className="h-5 w-5" />, description: "商户接入与使用指南", external: true, url: "https://docs.payphp.cn/8033235m0" },
      { name: "项目文档", path: "/docs", icon: <BookOpen className="h-5 w-5" />, description: "开发者技术参考文档" },
      { name: "新闻资讯", path: "/blog", icon: <Newspaper className="h-5 w-5" />, description: "最新动态和资讯" },
      { name: "服务支持", path: "/support", icon: <HelpCircle className="h-5 w-5" />, description: "专业技术支持" },
    ],
  },
  {
    name: "相关资源",
    dropdown: true,
    items: [
      { name: "智言AIGC", path: "https://aigc.cnai.art/", icon: <Sparkles className="h-5 w-5" />, description: "一站式AIGC智能创作平台", external: true, url: "https://aigc.cnai.art/" },
      { name: "艺创AI", path: "https://urlnet.cn/", icon: <Sparkles className="h-5 w-5" />, description: "用一套源码系统承载你的 AI 应用业务", external: true, url: "https://urlnet.cn/" },
      { name: "优刻云计算", path: "https://www.cloudcvm.com/", icon: <Cloud className="h-5 w-5" />, description: "上云特惠-4核4G云服务器38元/年-限时秒杀官方", external: true, url: "https://www.cloudcvm.com/" },
      { name: "免费领流量卡", path: "https://www.urlka.cn/", icon: <Smartphone className="h-5 w-5" />, description: "全国超值流量卡免费领，顺丰包邮到家", external: true, url: "https://www.urlka.cn/" },
    ],
  },
  { name: "关于我们", path: "/about" },
  { name: "官方文档", path: URL_DOCS, external: true },
];

const MOBILE_MENU_VARIANTS = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

const DROPDOWN_VARIANTS = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 },
};

// ─── Helpers ───

const navLinkClass = (isActive: boolean) =>
  `group flex items-center text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
    isActive
      ? "text-primary bg-blue-50/70 dark:text-blue-400 dark:bg-blue-950/50"
      : "text-gray-700 hover:text-primary hover:bg-blue-50/70 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50"
  }`;

const DROPDOWN_DESC: Record<string, string> = {
  "产品服务": "探索我们的产品解决方案",
  "服务支持": "获取服务支持和资源",
  "相关资源": "相关资源和合作伙伴",
};


const MOBILE_DROPDOWN_ID: Record<string, string> = {
  "产品服务": "products",
  "开发者": "developer",
  "相关资源": "resources",
};

function renderMenuItemName(itemName: string) {
  const badges: Record<string, { letter: string; color: string }> = {
    "相关资源": { letter: "源", color: "bg-blue-500" },
    "产品服务": { letter: "务", color: "bg-red-500" },
  };

  const badge = badges[itemName];
  if (badge) {
    return (
      <span className="relative flex items-center">
        <span>{itemName.slice(0, -1)}</span>
        <span className="relative inline-block">
          <span>{badge.letter}</span>
          <span className={`absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 ${badge.color} rounded-full animate-pulse`} />
        </span>
      </span>
    );
  }
  return <span>{itemName}</span>;
}

// ─── Sub-components ───

const MobileMenuItem = memo(function MobileMenuItem({
  subItem, onNavigate, onOpenExternal,
}: {
  subItem: NavSubItem;
  onNavigate: () => void;
  onOpenExternal: (url: string) => void;
}) {
  const className = "flex flex-col items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30";

  const content = (
    <>
      <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-1.5">
        {React.cloneElement(subItem.icon, { className: "h-5 w-5" })}
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-1">{subItem.name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{subItem.description}</span>
      </div>
    </>
  );

  if (subItem.external) {
    return (
      <div className={`${className} cursor-pointer relative`} onClick={() => onOpenExternal(subItem.url!)}>
        {content}
        <ExternalLink className="h-3 w-3 text-gray-400 absolute top-2 right-2 dark:text-gray-500" />
      </div>
    );
  }

  return (
    <Link href={subItem.path} className={className} onClick={onNavigate}>
      {content}
    </Link>
  );
});

function DropdownItem({
  subItem, onNavigate, onOpenExternal,
}: {
  subItem: NavSubItem;
  onNavigate: () => void;
  onOpenExternal: (url: string) => void;
}) {
  const inner = (
    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-white/5">
      <div className="flex-shrink-0">
        <div className="h-8 w-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {React.cloneElement(subItem.icon, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" })}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {subItem.name}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 ">{subItem.description}</div>
      </div>
    </div>
  );

  if (subItem.external) {
    return (
      <div className="cursor-pointer" onClick={() => onOpenExternal(subItem.url!)}>
        {inner}
      </div>
    );
  }

  return (
    <Link href={subItem.path}  onClick={onNavigate}>
      {inner}
    </Link>
  );
}

function DropdownPanel({
  item, onNavigate, onOpenExternal,
}: {
  item: NavItem;
  onNavigate: () => void;
  onOpenExternal: (url: string) => void;
}) {
  return (
    <motion.div
      variants={DROPDOWN_VARIANTS}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[620px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-black/[0.08] dark:shadow-black/60 border border-gray-200/80 dark:border-gray-700/50 z-50"
    >
      {/* Arrow */}
      <div className="absolute -top-[6px] left-1/2 -translate-x-1/2">
        <div className="w-3 h-3 bg-white dark:bg-gray-900 border-l border-t border-gray-200/80 dark:border-gray-700/50 rotate-45" />
      </div>

      {/* Header */}
      <div className="px-6 pt-5 pb-3 border-b border-gray-100 dark:border-gray-800">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{DROPDOWN_DESC[item.name] || ""}</p>
      </div>

      {/* Items Grid */}
      <div className="p-3">
        <div className="grid grid-cols-2 gap-1">
          {item.items?.map((sub) => (
            <DropdownItem key={sub.name} subItem={sub} onNavigate={onNavigate} onOpenExternal={onOpenExternal} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 dark:border-gray-800">
        <a
          href={item.items?.[0]?.external ? undefined : "/"}
          className="flex items-center justify-between px-6 py-3.5 text-xs text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group/footer"
        >
          <span>探索更多</span>
          <span className="inline-flex items-center gap-1 text-blue-500 dark:text-blue-400 font-medium opacity-0 group-hover/footer:opacity-100 transition-all duration-200 translate-x-[-4px] group-hover/footer:translate-x-0">
            查看全部
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" fill="currentColor" />
            </svg>
          </span>
        </a>
      </div>
    </motion.div>
  );
}

const MOBILE_ICON_MAP: Record<string, { icon: React.ElementType; bg: string; iconColor: string }> = {
  "产品服务": { icon: Layers, bg: "bg-blue-100 dark:bg-blue-900/50", iconColor: "text-blue-600 dark:text-blue-400" },
  "开发者": { icon: Code, bg: "bg-indigo-100 dark:bg-indigo-900/50", iconColor: "text-indigo-600 dark:text-indigo-400" },
  "相关资源": { icon: Sparkles, bg: "bg-orange-100 dark:bg-orange-900/50", iconColor: "text-orange-600 dark:text-orange-400" },
};

function MobileCategoryBlock({
  item, isOpen, onToggle, onNavigate, onOpenExternal,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  onOpenExternal: (url: string) => void;
}) {
  const meta = MOBILE_ICON_MAP[item.name] || { icon: Zap, bg: "bg-gray-100 dark:bg-gray-800", iconColor: "text-gray-600 dark:text-gray-400" };
  const Icon = meta.icon;

  return (
    <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-gray-800/50">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-blue-50/70 transition-colors duration-200 dark:hover:bg-blue-950/50"
      >
        <div className="font-medium text-gray-800 flex items-center dark:text-gray-200">
          <div className={`w-10 h-10 rounded-lg ${meta.bg} flex items-center justify-center mr-3`}>
            <Icon className={`h-5 w-5 ${meta.iconColor}`} />
          </div>
          <div className="flex flex-col items-start">
            {renderMenuItemName(item.name)}
            <span className="text-xs text-gray-500 dark:text-gray-400">{DROPDOWN_DESC[item.name] || ""}</span>
          </div>
        </div>
        <ChevronDown className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={MOBILE_MENU_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-4"
          >
            <div className="p-3 bg-white/90 rounded-lg dark:bg-gray-900/90">
              <div className="grid grid-cols-2 gap-2.5">
                {item.items?.map((sub) => (
                  <MobileMenuItem key={sub.name} subItem={sub} onNavigate={onNavigate} onOpenExternal={onOpenExternal} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const QUICK_LINKS = [
  { key: "home", href: "/", label: "首页", desc: "返回首页", icon: Zap, bg: "bg-cyan-100 dark:bg-cyan-900/50", iconColor: "text-cyan-600 dark:text-cyan-400" },
  { key: "about", href: "/about", label: "关于我们", desc: "了解团队", icon: User, bg: "bg-emerald-100 dark:bg-emerald-900/50", iconColor: "text-emerald-600 dark:text-emerald-400" },
  { key: "docs", href: URL_DOCS, label: "官方文档", desc: "查看文档", icon: FileText, bg: "bg-amber-100 dark:bg-amber-900/50", iconColor: "text-amber-600 dark:text-amber-400", external: true },
];

// ─── Main Header ───

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavigation = useCallback(() => {
    setMobileMenuOpen(false);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  }, []);

  const openExternalLink = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((p) => !p), []);
  const toggleMobileDropdown = useCallback((name: string) => setActiveDropdown((p) => (p === name ? null : name)), []);

  const handleMenuMouseEnter = useCallback((menuName: string) => {
    if (hoverTimeoutRef.current) { clearTimeout(hoverTimeoutRef.current); hoverTimeoutRef.current = null; }
    setHoveredMenu(menuName);
  }, []);

  const handleMenuMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => setHoveredMenu(null), 150);
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) { clearTimeout(hoverTimeoutRef.current); hoverTimeoutRef.current = null; }
  }, []);

  const handleDropdownMouseLeave = useCallback(() => setHoveredMenu(null), []);

  // Scroll + resize
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  // Click outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Cleanup timer
  useEffect(() => () => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm py-2 dark:bg-gray-900/95"
          : "bg-white border-b border-gray-100 py-3 dark:bg-gray-900 dark:border-gray-800"
      }`}
    >
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center group" onClick={handleNavigation}>
              <div className="flex items-center">
                <Image src="/images/logo/logo-dark.svg" priority alt="PaYphp" width={120} height={30} className="h-8 w-auto dark:hidden" />
                <Image src="/images/logo/logo-light.svg" alt="PaYphp" width={120} height={30} className="h-8 w-auto hidden dark:block" />
                <span className="ml-1.5 text-xs bg-blue-100 text-primary px-1.5 py-0.5 rounded-full font-medium dark:bg-blue-900 dark:text-blue-300">官网</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/" className={navLinkClass(pathname === "/")}>首页</Link>

              {NAV_ITEMS.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMenuMouseEnter(item.name)}
                    onMouseLeave={handleMenuMouseLeave}
                  >
                    <button
                      aria-expanded={hoveredMenu === item.name}
                      aria-haspopup="true"
                      className={navLinkClass(hoveredMenu === item.name)}
                    >
                      {renderMenuItemName(item.name)}
                      <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${hoveredMenu === item.name ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {hoveredMenu === item.name && (
                        <div onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                          <DropdownPanel item={item} onNavigate={handleNavigation} onOpenExternal={openExternalLink} />
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.external ? (
                  <a key={item.name} href={item.path!} target="_blank" rel="noopener noreferrer" className={navLinkClass(pathname === item.path)}>
                    {renderMenuItemName(item.name)}
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link key={item.name} href={item.path!} className={navLinkClass(pathname === item.path)}>
                    {renderMenuItemName(item.name)}
                  </Link>
                )
              )}
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggler />

            <Link
              href={URL_MERCH}
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-normal text-white transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <User className="h-4 w-4" />
              登入注册
            </Link>

            <Link
              href="/auth"
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-md border border-primary px-5 py-2 text-sm font-normal text-primary transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <ShoppingCart className="h-4 w-4" />
              购买授权
            </Link>

            <button
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-gray-600 dark:text-gray-400" /> : <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
              {NAV_ITEMS.filter((n) => n.dropdown).map((item) => (
                <MobileCategoryBlock
                  key={item.name}
                  item={item}
                  isOpen={activeDropdown === MOBILE_DROPDOWN_ID[item.name]}
                  onToggle={() => toggleMobileDropdown(MOBILE_DROPDOWN_ID[item.name])}
                  onNavigate={handleNavigation}
                  onOpenExternal={openExternalLink}
                />
              ))}

              {/* Quick nav */}
              <div className="grid grid-cols-2 gap-2">
                {QUICK_LINKS.map((link) => {
                  const base = "flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30";
                  const inner = (
                    <>
                      <div className={`w-9 h-9 rounded-lg ${link.bg} flex items-center justify-center mr-2.5`}>
                        <link.icon className={`h-4 w-4 ${link.iconColor}`} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{link.label}</span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400">{link.desc}</span>
                      </div>
                    </>
                  );

                  if (link.external) {
                    return (
                      <a key={link.key} href={link.href} target="_blank" rel="noopener noreferrer" className={base} onClick={() => setMobileMenuOpen(false)}>
                        {inner}
                      </a>
                    );
                  }
                  return (
                    <Link key={link.key} href={link.href} className={base} onClick={handleNavigation}>
                      {inner}
                    </Link>
                  );
                })}
              </div>

              {/* Auth */}
              <div className="pt-4 space-y-2.5">
                <div className="p-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg dark:from-blue-950/50 dark:to-indigo-950/50">
                  <div className="flex items-center mb-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-2 dark:bg-blue-900/50">
                      <User className="h-3.5 w-3.5 text-primary dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">账户中心</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href={URL_MERCH} target="_blank" rel="noopener noreferrer">
                      <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-lg transition-all duration-200 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 text-sm py-2.5 px-4">
                        <User className="h-4 w-4 mr-1.5 inline" />
                        登录
                      </button>
                    </Link>
                    <Link href={URL_MERCH} target="_blank" rel="noopener noreferrer">
                      <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-200 text-sm py-2.5 px-4">
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
}
