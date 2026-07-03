import BlogItem from "@/components/Blog/BlogItem";
import { getAllBlogs } from "@/lib/blog";
import { Metadata } from "next";
import { Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "博客 - 易支付",
  description: "了解最新的支付行业动态、技术分享和产品更新",
};

/**
 * 博客列表页
 * 展示所有已发布的博客文章，3 列卡片网格布局
 */
const BlogPage = async () => {
  const blogs = getAllBlogs();

  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">

        {/* ===== 标题区域 ===== */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Newspaper className="h-3.5 w-3.5" />
            博客资讯
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            最新
            <span className="text-primary dark:text-blue-400">博客文章</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            技术分享、产品更新和行业洞察
            {blogs.length > 0 && ` — 共 ${blogs.length} 篇文章`}
          </p>
        </div>

        {/* ===== 文章网格 ===== */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogItem blog={blog} key={blog.slug} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <Newspaper className="mx-auto mb-4 h-12 w-12 text-gray-300 dark:text-gray-600" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              暂无博客文章
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              请在 markdown/blog 目录下添加 .mdx 文件来创建博客文章
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;