import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { Star } from "lucide-react";

/**
 * 单条客户评价卡片
 * 展示星级、评价内容、客户头像与身份
 */
const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-800/60 dark:hover:border-gray-700">
      {/* 星级 */}
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* 评价内容 */}
      <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* 作者 */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-700">
        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">{name}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;