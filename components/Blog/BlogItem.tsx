"use client";

import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, ImageIcon } from "lucide-react";

interface BlogItemProps {
  blog: Blog;
}

/**
 * 博客文章卡片
 * 封面图全幅 + 标题叠加，底部展示描述与日期
 */
const BlogItem = ({ blog }: BlogItemProps) => {
  const { mainImage, title, description, slug, publishedAt, category } = blog;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-800/60 dark:hover:border-gray-700"
    >
      {/* 封面图 + 标题叠加 */}
      <Link href={`/blog/${slug}`} className="relative block aspect-[3/1] overflow-hidden bg-gray-100 dark:bg-gray-700">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <ImageIcon className="h-10 w-10 text-gray-300 dark:text-gray-600" />
          </div>
        )}

        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* 分类标签 */}
        {category && (
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-gray-800 backdrop-blur-sm dark:bg-gray-900/80 dark:text-gray-200">
            {category}
          </span>
        )}

        {/* 标题叠加 */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-white drop-shadow-sm">
            {title}
          </h3>
        </div>
      </Link>

      {/* 底部内容区 */}
      <div className="flex flex-1 flex-col p-4">
        {/* 描述 */}
        {description && (
          <p className="mb-3 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}

        {/* 日期 + 阅读更多 */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <Calendar className="h-3 w-3" />
            {publishedAt
              ? new Date(publishedAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" })
              : "未知日期"}
          </span>
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
          >
            阅读更多
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogItem;