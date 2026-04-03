import React from "react";

type HTMLProps<T extends HTMLElement> = React.PropsWithChildren<
  React.HTMLAttributes<T> & { href?: string }
>;

export const mdxComponents = {
  pre: ({ children, ...props }: HTMLProps<HTMLPreElement>) => (
    <pre
      className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100 dark:bg-gray-800"
      {...props}
    >
      {children}
    </pre>
  ),

  code: ({ children, ...props }: HTMLProps<HTMLElement>) => {
    if (typeof children === "string" && !children.includes("\n")) {
      return (
        <code
          className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:bg-gray-800 dark:text-gray-200"
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
    <h1 className="mb-6 text-3xl font-bold text-black dark:text-white" {...props}>
      {children}
    </h1>
  ),

  h2: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h2 className="mb-4 mt-8 text-2xl font-semibold text-black dark:text-white" {...props}>
      {children}
    </h2>
  ),

  h3: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h3 className="mb-3 mt-6 text-xl font-semibold text-black dark:text-white" {...props}>
      {children}
    </h3>
  ),

  p: ({ children, ...props }: HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-4 text-body-color dark:text-body-color-dark leading-relaxed" {...props}>
      {children}
    </p>
  ),

  ul: ({ children, ...props }: HTMLProps<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc text-body-color dark:text-body-color-dark" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: HTMLProps<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal text-body-color dark:text-body-color-dark" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: HTMLProps<HTMLLIElement>) => (
    <li className="mb-2" {...props}>
      {children}
    </li>
  ),

  a: ({ children, href, ...props }: HTMLProps<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  blockquote: ({ children, ...props }: HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary bg-gray-50 p-4 italic text-body-color dark:bg-gray-800 dark:text-body-color-dark"
      {...props}
    >
      {children}
    </blockquote>
  ),

  table: ({ children, ...props }: HTMLProps<HTMLTableElement>) => (
    <div className="mb-4 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600" {...props}>
        {children}
      </table>
    </div>
  ),

  th: ({ children, ...props }: HTMLProps<HTMLTableCellElement>) => (
    <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold dark:border-gray-600 dark:bg-gray-700" {...props}>
      {children}
    </th>
  ),

  td: ({ children, ...props }: HTMLProps<HTMLTableCellElement>) => (
    <td className="border border-gray-300 px-4 py-2 dark:border-gray-600" {...props}>
      {children}
    </td>
  ),

  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-gray-300 dark:border-gray-600" {...props} />
  ),
};
