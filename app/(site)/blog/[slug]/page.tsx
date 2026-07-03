import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Tag, ChevronLeft, ImageIcon } from "lucide-react";
import SearchBox from "@/components/Blog/SearchBox";
import CategoryList from "@/components/Blog/CategoryList";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import MDXContent from "@/components/Blog/MDXContent";
import { getBlogData, getAllBlogSlugs, getRelatedBlogs } from "@/lib/blog";

/* ====== 静态生成 ====== */

/** 生成所有博客 slug 用于静态导出 */
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((item) => ({ slug: item.params.slug }));
}

/** 动态生成 SEO 元数据 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogData(slug);

  if (!blog) {
    return { title: "文章未找到", description: "请求的博客文章不存在" };
  }

  return {
    title: `${blog.title} - 易支付博客`,
    description: blog.description || "",
    openGraph: {
      title: blog.title,
      description: blog.description || "",
      images: blog.mainImage ? [blog.mainImage] : [],
    },
  };
}

/* ====== 页面组件 ====== */

/**
 * 博客文章详情页
 * 左侧文章内容 + 右侧侧边栏（搜索/分类/相关文章）
 */
const SingleBlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blog = await getBlogData(slug);

  if (!blog) notFound();

  const relatedBlogs = getRelatedBlogs(slug, 3);

  /* 格式化日期 */
  const formattedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">

          {/* ===== 左侧：文章主体 ===== */}
          <div className="w-full lg:w-[65%]">
            {/* 返回链接 */}
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-blue-400"
            >
              <ChevronLeft className="h-4 w-4" />
              返回博客列表
            </Link>

            <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800/60">
              {/* 封面图 */}
              {blog.mainImage && (
                <div className="relative aspect-[21/9] overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={blog.mainImage}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="p-6 sm:p-8 lg:p-10">
                {/* 分类 + 日期 */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  {blog.category && (
                    <Link
                      href={`/blog/category/${encodeURIComponent(blog.category)}`}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                    >
                      {blog.category}
                    </Link>
                  )}
                  {formattedDate && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {formattedDate}
                    </span>
                  )}
                </div>

                {/* 标题 */}
                <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl dark:text-white">
                  {blog.title}
                </h1>

                {/* 作者 */}
                <div className="mb-8 flex items-center gap-3 border-b border-gray-100 pb-8 dark:border-gray-800">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary/10">
                    <Image
                      src="/images/logo/logo-light.svg"
                      alt="PaYphp"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      PaYphp
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      易支付官方技术团队
                    </div>
                  </div>
                </div>

                {/* 标签 */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mb-8 flex flex-wrap items-center gap-2">
                    <Tag className="h-4 w-4 text-gray-400" />
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* MDX 正文 */}
                {blog.body && <MDXContent content={blog.body} />}

                {/* 分享 */}
                <SharePost />
              </div>
            </article>
          </div>

          {/* ===== 右侧：侧边栏 ===== */}
          <aside className="w-full lg:w-[35%]">
            <div className="sticky top-24 space-y-6">
              {/* 搜索 */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-800/60">
                <SearchBox />
              </div>

              {/* 分类 */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-800/60">
                <CategoryList />
              </div>

              {/* 相关文章 */}
              {relatedBlogs.length > 0 && (
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-800/60">
                  <RelatedPost relatedBlogs={relatedBlogs} />
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;