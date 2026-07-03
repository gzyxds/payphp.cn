import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ImageIcon } from "lucide-react";

interface RelatedPostProps {
  relatedBlogs: Blog[];
}

/**
 * 相关文章组件（侧边栏）
 * 显示与当前文章相关的其他博客
 */
const RelatedPost = ({ relatedBlogs }: RelatedPostProps) => {
  if (!relatedBlogs || relatedBlogs.length === 0) return null;

  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
        相关文章
      </h4>
      <div className="space-y-3">
        {relatedBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group flex gap-3 rounded-lg p-2 -mx-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
          >
            {/* 缩略图 */}
            <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
              {blog.mainImage ? (
                <Image
                  src={blog.mainImage}
                  alt={blog.title}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <ImageIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                </div>
              )}
            </div>
            {/* 信息 */}
            <div className="flex-1 min-w-0">
              <h5 className="line-clamp-2 text-sm font-medium text-gray-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-blue-400">
                {blog.title}
              </h5>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="h-3 w-3" />
                {blog.publishedAt
                  ? new Date(blog.publishedAt).toLocaleDateString("zh-CN")
                  : "未知"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;