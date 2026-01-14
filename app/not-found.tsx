'use client';

import Link from 'next/link';
import {
  BookOpen,
  FileText,
  Bookmark,
  Rss,
  ChevronRight
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const links = [
  {
    name: '文档中心',
    href: '/docs',
    description: '了解如何将我们的工具集成到您的应用中。',
    icon: BookOpen,
  },
  {
    name: 'API 参考',
    href: '/docs',
    description: '完整的 API 接口参考文档。',
    icon: FileText
  },
  {
    name: '接入指南',
    href: '/industry',
    description: '涵盖常见业务场景的接入指南。',
    icon: Bookmark,
  },
  {
    name: '技术博客',
    href: '/blog',
    description: '阅读我们最新的新闻和技术文章。',
    icon: Rss
  },
];

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-6 pt-20 pb-16 sm:pb-24 lg:px-8 flex-grow">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base font-semibold text-[#0055ff]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            页面未找到
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            抱歉，我们找不到您要访问的页面。
          </p>
        </div>

        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">热门页面</h2>
          <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5 dark:divide-white/10 dark:border-white/10">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6 group">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10 dark:ring-white/10 bg-white dark:bg-white/5 group-hover:bg-[#0055ff]/5 transition-colors">
                  <link.icon className="h-6 w-6 text-[#0055ff]" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-[#0055ff] transition-colors">
                    <Link href={link.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{link.description}</p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#0055ff] transition-colors" aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <Link href="/" className="text-sm font-semibold leading-6 text-[#0055ff] hover:text-[#0055ff]/80 flex items-center gap-1">
              <span aria-hidden="true">&larr;</span> 返回首页
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
