"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

/**
 * 客户评价区域
 * 3 列评价卡片网格，展示合作方真实反馈
 */
const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">

        {/* ===== 标题 ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Star className="h-3.5 w-3.5" />
            客户评价
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            合作伙伴
            <span className="text-primary dark:text-blue-400">真实反馈</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            他们的成功就是我们服务质量的最好证明，专业的支付解决方案助力企业增长
          </p>
        </motion.div>

        {/* ===== 评价卡片网格 ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <SingleTestimonial review={review} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;