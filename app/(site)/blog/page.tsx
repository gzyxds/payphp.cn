import BlogItem from "@/components/Blog/BlogItem";
import { getAllBlogs, getBlogStats } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "易支付_码支付_行业领先的第三方免签约聚合支付平台",
  description: "易支付平台是第三方聚合支付产品;完美解决站长收款难题。帮助开发者快速集成支付接口,免签约接入支付宝,微信,财付通,QQ钱包,微信wap;效率高.见效快.费率低！",
  keywords: ['易支付,彩虹易支付,聚合支付,支付宝免签约即时到账,支付平台,财付通收款接口,支付接口,微信免签约支付,码支付,QQ钱包扫码收款,云支付,免签约支付,云智付,第三方支付平台,支付系统'],
  // other metadata
};

const BlogPage = async () => {
  // 从 Markdown 文件获取博客数据
  const blogs = getAllBlogs();
  const stats = getBlogStats();

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <div className="bg-zumthor inline-block rounded-full px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
              <span className="text-sectiontitle font-medium text-black dark:text-white">
                我们的博客
              </span>
            </div>
            <h2 className="mx-auto mb-4 mt-7.5 max-w-c-1235 text-3xl font-bold text-black dark:text-white md:text-sectiontitle2 xl:text-sectiontitle">
              最新新闻和博客
            </h2>
            <p className="mx-auto max-w-c-1235 text-lg">
              这里是我们最新的新闻和博客文章，涵盖了技术、产品更新和行业洞察。
              目前共有 {stats.totalBlogs} 篇文章，涵盖 {stats.totalCategories} 个分类。
            </p>
          </div>
        </div>

        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {blogs.map((blog, key) => (
                <BlogItem blog={blog} key={blog.slug || key} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                暂无博客文章
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                请在 markdown/blog 目录下添加 .mdx 文件来创建博客文章。
              </p>
            </div>
          )}
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
