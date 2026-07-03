import BlogItem from "./BlogItem";
import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";
import { Newspaper, ArrowRight } from "lucide-react";

/**
 * 首页最新博客区域
 * 展示最新的 3 篇博客文章
 */
const Blog = () => {
  const allBlogs = getAllBlogs();
  const latestPosts = allBlogs.slice(0, 3);

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">

        {/* ===== 标题区域 ===== */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Newspaper className="h-3.5 w-3.5" />
            最新资讯
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            新闻与
            <span className="text-primary dark:text-blue-400">博客</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            了解最新的技术动态、产品更新和行业洞察
          </p>
        </div>

        {/* ===== 文章网格 ===== */}
        {latestPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((blog) => (
                <BlogItem blog={blog} key={blog.slug} />
              ))}
            </div>

            {/* 查看更多 */}
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-primary/30 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:text-blue-400"
              >
                查看全部文章
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              暂无博客文章，请稍后再来查看。
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;