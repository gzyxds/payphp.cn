"use client";

import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';

// 自定义 MDX 组件
const components = {
  // 自定义图片组件
  img: ({ src, alt, ...props }) => (
    <div className="my-8 overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt || ''}
        width={800}
        height={400}
        className="w-full h-auto object-cover"
        {...props}
      />
    </div>
  ),
  
  // 自定义链接组件
  a: ({ href, children, ...props }) => (
    <Link
      href={href}
      className="text-primary hover:text-primary/80 underline transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </Link>
  ),
  
  // 自定义标题组件
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl font-bold text-black dark:text-white mb-6 mt-8" {...props}>
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  
  h3: ({ children, ...props }) => (
    <h3 className="text-xl font-semibold text-black dark:text-white mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  
  // 自定义段落组件
  p: ({ children, ...props }) => (
    <p className="text-body-color dark:text-body-color-dark mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  
  // 自定义列表组件
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-body-color dark:text-body-color-dark" {...props}>
      {children}
    </ul>
  ),
  
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-body-color dark:text-body-color-dark" {...props}>
      {children}
    </ol>
  ),
  
  li: ({ children, ...props }) => (
    <li className="mb-1" {...props}>
      {children}
    </li>
  ),
  
  // 自定义代码块组件
  pre: ({ children, ...props }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto" {...props}>
      {children}
    </pre>
  ),
  
  code: ({ children, ...props }) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  
  // 自定义引用组件
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-body-color dark:text-body-color-dark" {...props}>
      {children}
    </blockquote>
  ),
  
  // 自定义表格组件
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border border-gray-200 dark:border-gray-700" {...props}>
        {children}
      </table>
    </div>
  ),
  
  th: ({ children, ...props }) => (
    <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 bg-gray-50 dark:bg-gray-800 font-semibold text-left" {...props}>
      {children}
    </th>
  ),
  
  td: ({ children, ...props }) => (
    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2" {...props}>
      {children}
    </td>
  ),
  
  // 自定义分割线组件
  hr: (props) => (
    <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
  ),
};

interface MDXContentProps {
  content: string;
}

const MDXContent: React.FC<MDXContentProps> = ({ content }) => {
  // 简单的错误处理
  if (!content) {
    return (
      <div className="text-center py-12">
        <div className="text-body-color dark:text-body-color-dark">暂无内容</div>
      </div>
    );
  }

  return (
    <div className="blog-details prose prose-lg max-w-none dark:prose-invert">
      <div className="mdx-content">
        {/* 使用 React Server Components 版本的 MDXRemote */}
        <MDXRemote 
          source={content} 
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              format: 'mdx'
            }
          }}
        />
      </div>
    </div>
  );
};

export default MDXContent;
