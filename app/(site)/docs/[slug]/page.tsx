import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import SidebarLink from "@/components/Docs/SidebarLink";
import { getDocData, docExists, getAllDocs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/Docs/MDXComponents";

/* ====== 静态生成 ====== */

/** 生成所有文档 slug */
export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({ slug: doc.slug }));
}

/** 动态元数据 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDocData(slug);
  if (!doc) return { title: "文档未找到" };
  return {
    title: `${doc.title} - 易支付文档`,
    description: doc.description || "",
  };
}

/* ====== 页面组件 ====== */

/**
 * 文档详情页
 * 左侧导航 + 右侧文章内容
 */
export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!docExists(slug)) notFound();

  const docData = await getDocData(slug);
  if (!docData) notFound();

  const formattedDate = docData.date
    ? new Date(docData.date).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">

        {/* ===== 返回链接 ===== */}
        <Link
          href="/docs"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4" />
          返回文档中心
        </Link>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* 左侧导航 */}
          <aside className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-800/60">
              <SidebarLink />
            </div>
          </aside>

          {/* 右侧文章 */}
          <div className="min-w-0 flex-1">
            <article className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800/60 sm:p-10">
              {/* 标题区 */}
              <div className="mb-8 border-b border-gray-100 pb-8 dark:border-gray-800">
                <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                  {docData.title}
                </h1>
                {docData.description && (
                  <p className="mb-4 leading-relaxed text-gray-500 dark:text-gray-400">
                    {docData.description}
                  </p>
                )}
                {formattedDate && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
                    <Calendar className="h-3.5 w-3.5" />
                    {formattedDate}
                  </span>
                )}
              </div>

              {/* MDX 正文 */}
              <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary prose-strong:text-gray-900 dark:prose-headings:text-white dark:prose-p:text-gray-400 dark:prose-strong:text-white">
                {/* @ts-expect-error Server Component */}
                <MDXRemote source={docData.content} components={mdxComponents} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}