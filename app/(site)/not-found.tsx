'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-5xl font-bold text-[#05f] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">页面未找到</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        抱歉，您访问的页面不存在或已被移除。
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-[#05f] hover:bg-[#05f]/90 text-white rounded-lg transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}