import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SearchBox from "@/components/Blog/SearchBox";
import CategoryList from "@/components/Blog/CategoryList";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import MDXContent from "@/components/Blog/MDXContent";
import { getBlogData, getAllBlogSlugs, getRelatedBlogs } from "@/lib/blog";

// 生成静态路径
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((item) => ({
    slug: item.params.slug,
  }));
}

// 生成动态元数据
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogData(slug);

  if (!blog) {
    return {
      title: "博客文章未找到",
      description: "请求的博客文章不存在",
    };
  }

  return {
    title: `${blog.title}_易支付_码支付官网`,
    description: blog.description || "易支付平台是第三方聚合支付产品;完美解决站长收款难题。帮助开发者快速集成支付接口,免签约接入支付宝,微信,财付通,QQ钱包,微信wap;效率高.见效快.费率低！",
    keywords: ['易支付,彩虹易支付,聚合支付,支付宝免签约即时到账,支付平台,财付通收款接口,支付接口,微信免签约支付,码支付,QQ钱包扫码收款,云支付,免签约支付,云智付,第三方支付平台,支付系统'],
    openGraph: {
      title: blog.title,
      description: blog.description || "",
      images: blog.mainImage ? [blog.mainImage] : [],
    },
  };
}

const SingleBlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  // 解析 params
  const { slug } = await params;

  // 获取博客数据
  const blog = await getBlogData(slug);

  // 如果博客不存在，返回 404
  if (!blog) {
    notFound();
  }

  // 获取相关文章
  const relatedBlogs = getRelatedBlogs(slug, 3);
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <SearchBox />
              </div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <CategoryList />
              </div>

              {/* 相关文章 */}
              {relatedBlogs.length > 0 && (
                <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                  <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                    相关文章
                  </h4>

                  <div className="space-y-6">
                    {relatedBlogs.map((relatedBlog) => (
                      <div key={relatedBlog.slug} className="group">
                        <div className="flex gap-4">
                          {relatedBlog.mainImage && (
                            <div className="flex-shrink-0">
                              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                                <Image
                                  src={relatedBlog.mainImage}
                                  alt={relatedBlog.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                              </div>
                            </div>
                          )}
                          <div className="flex-1">
                            <h5 className="mb-2 line-clamp-2 text-sm font-medium text-black transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                              <Link href={`/blog/${relatedBlog.slug}`}>
                                {relatedBlog.title}
                              </Link>
                            </h5>
                            <p className="text-xs text-body dark:text-bodydark">
                              {relatedBlog.publishedAt ? new Date(relatedBlog.publishedAt).toLocaleDateString('zh-CN') : '未知日期'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <RelatedPost relatedBlogs={relatedBlogs} />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                {/* 博客主图 */}
                {blog.mainImage && (
                  <div className="mb-10 w-full overflow-hidden">
                    <div className="relative aspect-[97/40] w-full sm:aspect-[97/35]">
                      <Image
                        src={blog.mainImage}
                        alt={blog.title}
                        fill
                        className="rounded-md object-cover object-center"
                      />
                    </div>
                  </div>
                )}

                {/* 博客标题 */}
                <h1 className="mb-5 pr-5 text-3xl font-semibold text-black dark:text-white xl:text-hero">
                  {blog.title}
                </h1>

                {/* 博客元信息 */}
                <div className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  {/* 发布日期 */}
                  <span className="flex items-center gap-3 font-medium text-black dark:text-white">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.89531 2.67814C3.89531 2.67814 3.89531 1.9219 3.89531 1.5C3.89531 1.07812 4.24844 0.75 4.67031 0.75H5.25C5.67188 0.75 6 1.07812 6 1.5V2.67814H9V1.5C9 1.07812 9.32812 0.75 9.75 0.75H10.3297C10.7516 0.75 11.0797 1.07812 11.0797 1.5V2.67814C11.0797 2.67814 12.1406 2.67814 12.75 2.67814C13.7859 2.67814 14.625 3.49219 14.625 4.52814V12.9844C14.625 14.0203 13.7859 14.8594 12.75 14.8594H2.25C1.21406 14.8594 0.375 14.0203 0.375 12.9844V4.52814C0.375 3.49219 1.21406 2.67814 2.25 2.67814C2.85938 2.67814 3.89531 2.67814 3.89531 2.67814ZM12.75 9.14062H9.1875V12.1875H12.75V9.14062ZM7.3125 9.14062H3.75V12.1875H7.3125V9.14062ZM12.75 5.25H9.1875V8.29688H12.75V5.25ZM7.3125 5.25H3.75V8.29688H7.3125V5.25Z"
                        fill="currentColor"
                      />
                    </svg>
                    {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('zh-CN') : '未知日期'}
                  </span>

                  {/* 作者信息 */}
                  <span className="flex items-center gap-3 font-medium text-black dark:text-white">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 0C5.51562 0 3.9375 1.57812 3.9375 3.5625C3.9375 5.54688 5.51562 7.125 7.5 7.125C9.48438 7.125 11.0625 5.54688 11.0625 3.5625C11.0625 1.57812 9.48438 0 7.5 0ZM7.5 5.625C6.34375 5.625 5.4375 4.71875 5.4375 3.5625C5.4375 2.40625 6.34375 1.5 7.5 1.5C8.65625 1.5 9.5625 2.40625 9.5625 3.5625C9.5625 4.71875 8.65625 5.625 7.5 5.625ZM15 13.125C15 15 13.125 15 13.125 15H1.875C1.875 15 0 15 0 13.125C0 11.25 1.875 9.375 7.5 9.375C13.125 9.375 15 11.25 15 13.125ZM13.125 13.125C13.125 12.1875 11.25 10.875 7.5 10.875C3.75 10.875 1.875 12.1875 1.875 13.125H13.125Z"
                        fill="currentColor"
                      />
                    </svg>
                    {blog.author?.name || '匿名作者'}
                  </span>

                  {/* 分类信息 */}
                  {blog.category && (
                    <span className="flex items-center gap-3 font-medium text-black dark:text-white">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.25 2.25H6.75C7.16421 2.25 7.5 2.58579 7.5 3V7.5C7.5 7.91421 7.16421 8.25 6.75 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5V3C1.5 2.58579 1.83579 2.25 2.25 2.25ZM8.25 2.25H12.75C13.1642 2.25 13.5 2.58579 13.5 3V7.5C13.5 7.91421 13.1642 8.25 12.75 8.25H8.25C7.83579 8.25 7.5 7.91421 7.5 7.5V3C7.5 2.58579 7.83579 2.25 8.25 2.25ZM2.25 9.75H6.75C7.16421 9.75 7.5 10.0858 7.5 10.5V15C7.5 15.4142 7.16421 15.75 6.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V10.5C1.5 10.0858 1.83579 9.75 2.25 9.75ZM8.25 9.75H12.75C13.1642 9.75 13.5 10.0858 13.5 10.5V15C13.5 15.4142 13.1642 15.75 12.75 15.75H8.25C7.83579 15.75 7.5 15.4142 7.5 15V10.5C7.5 10.0858 7.83579 9.75 8.25 9.75Z"
                          fill="currentColor"
                        />
                      </svg>
                      {blog.category}
                    </span>
                  )}
                </div>

                {/* 标签 */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* 博客内容 */}
                {blog.body && <MDXContent content={blog.body} />}

                {/* 分享组件 */}
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
