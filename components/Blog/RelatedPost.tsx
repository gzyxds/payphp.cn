import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

interface RelatedPostProps {
  relatedBlogs: Blog[];
}

const RelatedPost = ({ relatedBlogs }: RelatedPostProps) => {
  // 如果没有相关博客，不显示组件
  if (!relatedBlogs || relatedBlogs.length === 0) {
    return null;
  }

  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          相关文章
        </h4>

        <div>
          {relatedBlogs.map((blog, index) => (
            <div 
              key={blog.slug} 
              className={`flex items-center gap-4 ${index < relatedBlogs.length - 1 ? 'mb-7.5' : ''}`}
            >
              {/* 博客缩略图 */}
              <div className="h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                {blog.mainImage ? (
                  <Image
                      src={blog.mainImage}
                      alt={blog.title}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                ) : (
                  <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <svg
                      className="h-8 w-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* 博客信息 */}
              <div className="flex-1 min-w-0">
                <h5>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="mb-[6px] block text-sm font-medium leading-snug text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary line-clamp-2"
                  >
                    {blog.title}
                  </Link>
                </h5>
                <p className="text-xs text-body dark:text-bodydark">
                  {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('zh-CN') : '未知日期'}
                </p>
                {/* 显示分类 */}
                {blog.category && (
                  <p className="mt-1 text-xs text-primary">
                    {blog.category}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
