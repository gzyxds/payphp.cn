import React from 'react';

// 自定义组件映射
export const mdxComponents = {
  // 自定义代码块组件
  pre: ({ children, ...props }: any) => {
    return (
      <pre 
        className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100 dark:bg-gray-800" 
        {...props}
      >
        {children}
      </pre>
    );
  },
  
  // 自定义代码组件
  code: ({ children, ...props }: any) => {
    // 如果是内联代码
    if (typeof children === 'string' && !children.includes('\n')) {
      return (
        <code 
          className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          {...props}
        >
          {children}
        </code>
      );
    }
    
    // 代码块
    return (
      <code className="text-sm" {...props}>
        {children}
      </code>
    );
  },

  // 自定义标题组件
  h1: ({ children, ...props }: any) => (
    <h1 className="mb-6 text-3xl font-bold text-black dark:text-white" {...props}>
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }: any) => (
    <h2 className="mb-4 mt-8 text-2xl font-semibold text-black dark:text-white" {...props}>
      {children}
    </h2>
  ),
  
  h3: ({ children, ...props }: any) => (
    <h3 className="mb-3 mt-6 text-xl font-semibold text-black dark:text-white" {...props}>
      {children}
    </h3>
  ),

  // 自定义段落组件
  p: ({ children, ...props }: any) => (
    <p className="mb-4 text-body-color dark:text-body-color-dark leading-relaxed" {...props}>
      {children}
    </p>
  ),

  // 自定义列表组件
  ul: ({ children, ...props }: any) => (
    <ul className="mb-4 ml-6 list-disc text-body-color dark:text-body-color-dark" {...props}>
      {children}
    </ul>
  ),
  
  ol: ({ children, ...props }: any) => (
    <ol className="mb-4 ml-6 list-decimal text-body-color dark:text-body-color-dark" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: any) => (
    <li className="mb-2" {...props}>
      {children}
    </li>
  ),

  // 自定义链接组件
  a: ({ children, href, ...props }: any) => (
    <a 
      href={href}
      className="text-primary hover:text-primary/80 underline transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  // 自定义引用组件
  blockquote: ({ children, ...props }: any) => (
    <blockquote 
      className="border-l-4 border-primary bg-gray-50 p-4 italic text-body-color dark:bg-gray-800 dark:text-body-color-dark" 
      {...props}
    >
      {children}
    </blockquote>
  ),

  // 自定义表格组件
  table: ({ children, ...props }: any) => (
    <div className="mb-4 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600" {...props}>
        {children}
      </table>
    </div>
  ),
  
  th: ({ children, ...props }: any) => (
    <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold dark:border-gray-600 dark:bg-gray-700" {...props}>
      {children}
    </th>
  ),
  
  td: ({ children, ...props }: any) => (
    <td className="border border-gray-300 px-4 py-2 dark:border-gray-600" {...props}>
      {children}
    </td>
  ),

  // 自定义分割线
  hr: (props: any) => (
    <hr className="my-8 border-gray-300 dark:border-gray-600" {...props} />
  ),
};
