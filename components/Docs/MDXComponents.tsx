import React from "react";

type HTMLProps<T extends HTMLElement> = React.PropsWithChildren<
  React.HTMLAttributes<T> & { href?: string }
>;

export const mdxComponents = {
  pre: ({ children, ...props }: HTMLProps<HTMLPreElement>) => (
    <pre
      className="overflow-x-auto rounded-xl bg-gray-900 p-5 text-sm text-gray-100 dark:bg-gray-800"
      {...props}
    >
      {children}
    </pre>
  ),

  code: ({ children, ...props }: HTMLProps<HTMLElement>) => {
    if (typeof children === "string" && !children.includes("\n")) {
      return (
        <code
          className="rounded-md bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className="text-sm" {...props}>
        {children}
      </code>
    );
  },

  h1: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white" {...props}>
      {children}
    </h1>
  ),

  h2: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900 dark:text-white" {...props}>
      {children}
    </h2>
  ),

  h3: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900 dark:text-white" {...props}>
      {children}
    </h3>
  ),

  p: ({ children, ...props }: HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400" {...props}>
      {children}
    </p>
  ),

  ul: ({ children, ...props }: HTMLProps<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc text-gray-600 dark:text-gray-400" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: HTMLProps<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal text-gray-600 dark:text-gray-400" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: HTMLProps<HTMLLIElement>) => (
    <li className="mb-1.5" {...props}>
      {children}
    </li>
  ),

  a: ({ children, href, ...props }: HTMLProps<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-primary underline transition-colors hover:text-primary/80"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  blockquote: ({ children, ...props }: HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="mb-4 border-l-4 border-primary/30 bg-gray-50 p-4 italic text-gray-600 dark:border-blue-900 dark:bg-gray-800 dark:text-gray-400"
      {...props}
    >
      {children}
    </blockquote>
  ),

  table: ({ children, ...props }: HTMLProps<HTMLTableElement>) => (
    <div className="mb-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="min-w-full" {...props}>
        {children}
      </table>
    </div>
  ),

  th: ({ children, ...props }: HTMLProps<HTMLTableCellElement>) => (
    <th
      className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      {...props}
    >
      {children}
    </th>
  ),

  td: ({ children, ...props }: HTMLProps<HTMLTableCellElement>) => (
    <td
      className="border-b border-gray-100 px-4 py-3 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400"
      {...props}
    >
      {children}
    </td>
  ),

  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
  ),
};