"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MDXContentProps {
  content: string;
}

const MDXContent: React.FC<MDXContentProps> = ({ content }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!content) {
      setIsLoading(false);
      return;
    }

    try {
      // 简单的 Markdown 转 HTML 处理
      const html = content
        // 标题
        .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6 mt-8">$1</h1>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-4 mt-8">$1</h2>')
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-3 mt-6">$1</h3>')
        // 强调
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        // 列表
        .replace(/^\s*\n\* (.*)/gim, '<ul>\n<li>$1</li>')
        .replace(/^\* (.*)/gim, '<li>$1</li>')
        .replace(/^\s*\n\d+\. (.*)/gim, '<ol>\n<li>$1</li>')
        .replace(/^\d+\. (.*)/gim, '<li>$1</li>')
        // 链接
        .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-primary hover:text-primary/80 underline" target="_blank" rel="noopener noreferrer">$1</a>')
        // 图片
        .replace(/!\[([^\]]+)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="my-4 rounded-lg max-w-full h-auto" />')
        // 代码块
        .replace(/```(.*?)\n([\s\S]*?)```/gim, '<pre class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto"><code>$2</code></pre>')
        // 行内代码
        .replace(/`(.*?)`/gim, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">$1</code>')
        // 引用
        .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-primary pl-4 my-6 italic">$1</blockquote>')
        // 水平线
        .replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gim, '<hr class="my-8 border-gray-200 dark:border-gray-700">')
        // 段落
        .replace(/^\s*(\n)?(.+)/gim, function(m) {
          return /\<(\/)?(h1|h2|h3|h4|h5|h6|blockquote|pre|table|ul|ol|li|hr|img|code|em|strong|a)\b/.test(m) ? m : '<p class="mb-4 leading-relaxed">' + m + '</p>';
        })
        // 清理
        .replace(/\n/gim, '<br>');

      setHtmlContent(html);
      setIsLoading(false);
    } catch (err) {
      console.error('Markdown 渲染错误:', err);
      setError('内容加载失败，请稍后重试。');
      setIsLoading(false);
    }
  }, [content]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <span className="ml-3">加载中...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">⚠️ {error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="text-primary hover:text-primary/80 underline"
        >
          重新加载
        </button>
      </div>
    );
  }

  if (!htmlContent) {
    return (
      <div className="text-center py-12">
        <div>暂无内容</div>
      </div>
    );
  }

  return (
    <div className="blog-details prose prose-lg max-w-none dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default MDXContent;