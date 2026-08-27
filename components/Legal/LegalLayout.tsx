/**
 * 法律页通用布局组件
 * 为《隐私政策》《法律声明》《服务条款》提供统一的页面外壳与小节排版，
 * 样式沿用站点设计令牌（max-w-c-1450、text-primary、border-stroke 等），以白色背景为主、响应式。
 */
import React from "react";

/**
 * 法律页整体外壳：标题 + 导语 + 正文容器
 */
interface LegalPageProps {
  /** 页面主标题，如「隐私政策」 */
  title: string;
  /** 页面导语（可选），通常为一段概述性说明 */
  intro?: React.ReactNode;
  /** 小节内容 */
  children: React.ReactNode;
}

export function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <div className="bg-white dark:bg-blacksection">
      <div className="mx-auto max-w-c-1450 px-4 pb-20 pt-40 md:px-8 2xl:px-0">
        <h1 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
          {title}
        </h1>
        {intro ? (
          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {intro}
          </div>
        ) : null}
        <div className="mt-10 border-t border-stroke dark:border-strokedark">{children}</div>
      </div>
    </div>
  );
}

/**
 * 法律页小节：带锚点（id）的标题 + 正文，便于页内跳转与目录引用
 */
interface LegalSectionProps {
  /** 锚点 id，用于目录或外部链接跳转 */
  id: string;
  /** 小节标题 */
  title: string;
  /** 小节正文 */
  children: React.ReactNode;
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-stroke py-8 dark:border-strokedark"
    >
      <h2 className="text-xl font-semibold text-black dark:text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </section>
  );
}
