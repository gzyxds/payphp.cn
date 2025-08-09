import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import type { Blog } from "@/types/blog";
import { getAllBlogs } from "@/lib/blog";

const Blog = () => {
  const allBlogs = getAllBlogs();
  const latestPosts = allBlogs.slice(0, 3);

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `最新资讯`,
              subtitle: `新闻与博客`,
              description: `了解最新的技术动态、产品更新和行业洞察，获取有价值的开发经验和最佳实践分享。`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1390 px-4 md:px-8 xl:mt-20 2xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {latestPosts.length > 0 ? (
            latestPosts.map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                暂无博客文章，请稍后再来查看。
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
