'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  FileText, 
  Bookmark, 
  Rss, 
  ChevronRight, 
  Github, 
  Twitter 
} from 'lucide-react';

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

const social = [
  {
    name: 'GitHub',
    href: 'https://github.com/payphp',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/payphp',
    icon: Twitter,
  },
];

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <main className="mx-auto w-full max-w-7xl px-6 pt-10 pb-16 sm:pb-24 lg:px-8">
        <Link href="/" className="block mx-auto h-12 w-fit relative mb-8">
            <Image
              src="/images/logo/logo-light.svg"
              alt="PaYphp"
              width={150}
              height={40}
              className="dark:hidden mx-auto h-full w-auto"
            />
            <Image
              src="/images/logo/logo-dark.svg"
              alt="PaYphp"
              width={150}
              height={40}
              className="hidden dark:block mx-auto h-full w-auto"
            />
        </Link>
        
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base font-semibold text-primaryho">404</p>
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
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10 dark:ring-white/10 bg-white dark:bg-white/5 group-hover:bg-primaryho/5 transition-colors">
                  <link.icon className="h-6 w-6 text-primaryho" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-primaryho transition-colors">
                    <Link href={link.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{link.description}</p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primaryho transition-colors" aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <Link href="/" className="text-sm font-semibold leading-6 text-primaryho hover:text-primaryho/80 flex items-center gap-1">
              <span aria-hidden="true">&larr;</span> 返回首页
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-gray-100 dark:border-gray-800 py-6 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
          <p className="text-sm leading-7 text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} PaYphp.cn All rights reserved.
          </p>
          <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-gray-200 dark:bg-gray-700" />
          <div className="flex gap-x-4">
            {social.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
