"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menuData from "./menuData";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // 检测设备类型
  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 初始检测
    checkDeviceType();

    // 监听窗口大小变化
    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  // 处理粘性导航
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 处理子菜单切换
  const toggleSubmenu = (id: number) => {
    if (activeSubmenu === id) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(id);
    }
  };

  // 关闭菜单
  const closeMenu = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isSticky
          ? "bg-white py-4 shadow-md dark:bg-gray-900"
          : "bg-transparent py-6"
      }`}
      ref={navRef}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/images/logo/logo-dark.svg"
              alt="Logo"
              width={120}
              height={30}
              className="hidden dark:block"
            />
            <Image
              src="/images/logo/logo-light.svg"
              alt="Logo"
              width={120}
              height={30}
              className="block dark:hidden"
            />
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {menuData.map((item) => (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => !isMobile && setActiveSubmenu(item.id)}
                  onMouseLeave={() => !isMobile && setActiveSubmenu(null)}
                >
                  {item.submenu ? (
                    <>
                      <button
                        id={`dropdown-button-${item.id}`}
                        className={`flex items-center space-x-1 py-2 text-base font-medium transition-colors ${
                          activeSubmenu === item.id
                            ? "text-primary"
                            : "text-gray-700 hover:text-primary dark:text-[#05f]"
                        }`}
                        onClick={() => toggleSubmenu(item.id)}
                        aria-expanded={activeSubmenu === item.id}
                        aria-haspopup="true"
                        aria-controls={`dropdown-menu-${item.id}`}
                      >
                        <span>{item.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transition-transform ${
                            activeSubmenu === item.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* 桌面下拉菜单 */}
                      <div
                        id={`dropdown-menu-${item.id}`}
                        className={`absolute left-0 top-full z-10 min-w-[200px] rounded-md bg-white p-2 shadow-lg transition-all dark:bg-gray-800 ${
                          activeSubmenu === item.id
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                        }`}
                        role="menu"
                        aria-labelledby={`dropdown-button-${item.id}`}
                      >
                        <ul className="py-1">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.id}>
                              <Link
                                href={subItem.path || "#"}
                                className={`block rounded px-4 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                  pathname === subItem.path
                                    ? "text-primary"
                                    : "text-gray-700 dark:text-[#05f]"
                                }`}
                                onClick={closeMenu}
                                target={subItem.newTab ? "_blank" : undefined}
                                rel={subItem.newTab ? "noopener noreferrer" : undefined}
                                role="menuitem"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.path || "#"}
                      className={`block py-2 text-base font-medium transition-colors ${
                        pathname === item.path
                          ? "text-primary"
                          : "text-gray-700 hover:text-primary dark:text-[#05f]"
                      }`}
                      onClick={closeMenu}
                      target={item.newTab ? "_blank" : undefined}
                      rel={item.newTab ? "noopener noreferrer" : undefined}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* 右侧操作区 */}
          <div className="hidden items-center space-x-4 md:flex">
            <ThemeToggler />
            <Link
              href="/auth/signup"
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200"
            >
              注册
            </Link>
            <Link
              href="/auth/auth"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              授权
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:text-[#05f] dark:hover:bg-gray-800 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "关闭菜单" : "打开菜单"}
          >
            <span className="sr-only">打开主菜单</span>
            {!isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full z-50 transform bg-white px-2 py-3 transition-all duration-300 ease-in-out dark:bg-gray-900 md:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
        role="navigation"
        aria-label="移动端导航菜单"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {menuData.map((item) => (
            <div key={item.id} className="py-1">
              {item.submenu ? (
                <>
                  <button
                    id={`mobile-dropdown-button-${item.id}`}
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium ${
                      activeSubmenu === item.id
                        ? "bg-gray-100 text-primary dark:bg-gray-800"
                        : "text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-[#05f] dark:hover:bg-gray-800"
                    }`}
                    onClick={() => toggleSubmenu(item.id)}
                    aria-expanded={activeSubmenu === item.id}
                    aria-controls={`mobile-dropdown-menu-${item.id}`}
                    aria-haspopup="true"
                  >
                    <span>{item.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform ${
                        activeSubmenu === item.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* 移动端子菜单 */}
                  <div
                    id={`mobile-dropdown-menu-${item.id}`}
                    className={`mt-1 space-y-1 pl-4 ${
                      activeSubmenu === item.id ? "block" : "hidden"
                    }`}
                    role="menu"
                    aria-labelledby={`mobile-dropdown-button-${item.id}`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.path || "#"}
                        className={`block rounded-md px-3 py-2 text-sm font-medium ${
                          pathname === subItem.path
                            ? "bg-gray-100 text-primary dark:bg-gray-800"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-[#05f] dark:hover:bg-gray-800"
                        }`}
                        onClick={closeMenu}
                        target={subItem.newTab ? "_blank" : undefined}
                        rel={subItem.newTab ? "noopener noreferrer" : undefined}
                        role="menuitem"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.path || "#"}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    pathname === item.path
                      ? "bg-gray-100 text-primary dark:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-[#05f] dark:hover:bg-gray-800"
                  }`}
                  onClick={closeMenu}
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noopener noreferrer" : undefined}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          {/* 移动端操作按钮 */}
          <div className="mt-4 flex flex-col space-y-2 px-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-[#05f]">
                主题切换
              </span>
              <ThemeToggler />
            </div>
            <Link
              href="/auth/signup"
              className="block rounded-md bg-gray-100 px-3 py-2 text-center text-base font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-[#05f] dark:hover:bg-gray-700"
              onClick={closeMenu}
            >
              注册
            </Link>
            <Link
              href="/auth/auth"
              className="block rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-white hover:bg-opacity-90"
              onClick={closeMenu}
            >
              授权
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 动画效果 */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-10px); }
        }

        /* 无障碍支持 */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        /* 减少动画 - 用户偏好减少动画 */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
