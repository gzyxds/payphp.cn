"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ArrowRight, MessageSquare } from "lucide-react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

/* ====== 动画配置 ====== */
const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

/**
 * FAQ 常见问题区域
 * 左右分栏布局，垂直居中对齐：左侧标题与引导，右侧手风琴问答列表
 */
const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  /** 切换 FAQ 展开/收起 */
  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-16 md:py-24 lg:py-32 dark:bg-gray-900/30">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-50/40 blur-3xl dark:bg-blue-900/5" />
      </div>

      <div className="relative mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">

          {/* ===== 左侧：标题与引导 ===== */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 xl:w-[42%]"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <HelpCircle className="h-3.5 w-3.5" />
              常见问题
            </span>

            {/* 主标题 */}
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl xl:text-5xl dark:text-white">
              关于支付的
              <br />
              <span className="text-primary dark:text-blue-400">常见疑问</span>
              解答
            </h2>

            {/* 描述 */}
            <p className="mt-5 max-w-sm text-base leading-relaxed text-gray-500 dark:text-gray-400">
              快速了解支付接入的常见问题，如未找到答案请联系我们的技术支持团队，7×24 小时在线为您服务。
            </p>

            {/* 数据点 */}
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">300+</div>
                <div className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">服务商户</div>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-700" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                <div className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">系统可用性</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <MessageSquare className="h-4 w-4" />
                <span>联系技术支持</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* ===== 右侧：FAQ 手风琴列表 ===== */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 xl:w-[58%]"
          >
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm ring-1 ring-gray-900/5 dark:border-gray-800 dark:bg-gray-800/60 dark:ring-white/5">
              {/* 卡片微标题栏 */}
              <div className="flex items-center gap-2.5 border-b border-gray-50 bg-gray-50/80 px-6 py-3.5 dark:border-gray-700/50 dark:bg-gray-800/50 sm:px-8">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  共 {faqData.length} 个常见问题
                </span>
              </div>

              {/* FAQ 列表 */}
              <div className="px-6 py-0.5 sm:px-8">
                {faqData.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    isOpen={activeId === faq.id}
                    onToggle={handleToggle}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;