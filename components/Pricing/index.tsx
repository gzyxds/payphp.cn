"use client";

import { motion } from "framer-motion";
import { Tag, Check, ArrowRight } from "lucide-react";

/* ====== 套餐数据 ====== */
const PRICING_PLANS = [
  {
    title: "体验套餐",
    price: "¥0",
    period: "/7天",
    desc: "免费体验，无售后支持",
    features: ["费率 3.00%", "每日限额 100元", "每月限额 1000元", "通道数无限制", "通道账号无限制"],
    recommended: false,
    href: "https://merch.PaYphp.cn/login",
  },
  {
    title: "月度会员",
    price: "¥19.89",
    period: "/30天",
    desc: "高性价比，适合中小商户",
    features: ["费率 0.50%", "每日限额无限制", "每月限额无限制", "通道数无限制", "通道账号无限制"],
    recommended: true,
    href: "https://merch.PaYphp.cn/login",
  },
  {
    title: "季度会员",
    price: "¥199",
    period: "/90天",
    desc: "超低费率，适合大流量商户",
    features: ["费率 0.20%", "每日限额无限制", "每月限额无限制", "通道数无限制", "通道账号无限制"],
    recommended: false,
    href: "https://merch.PaYphp.cn/login",
  },
];

/* ====== 组件 ====== */

/**
 * 费率方案区域
 * 3 列定价卡片，推荐方案居中高亮
 */
const Pricing = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 dark:bg-gray-950">
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
            <Tag className="h-3.5 w-3.5" />
            费率方案
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            透明的
            <span className="text-primary dark:text-blue-400">支付费率</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            选择最适合您业务的支付方案，无隐藏费用，按需付费
          </p>
        </motion.div>

        {/* ===== 定价卡片 ===== */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                plan.recommended
                  ? "border-primary/30 bg-gradient-to-b from-primary/5 to-white shadow-primary/10 hover:shadow-primary/20 dark:from-blue-900/20 dark:to-gray-800/60 dark:border-blue-800"
                  : "border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-800/60"
              }`}
            >
              {/* 推荐标签 */}
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-md">
                  推荐
                </span>
              )}

              {/* 价格 */}
              <div className="mb-3">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="text-base text-gray-500 dark:text-gray-400">{plan.period}</span>
              </div>

              {/* 套餐名 + 描述 */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.title}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{plan.desc}</p>

              {/* 特性列表 */}
              <ul className="mt-6 flex-1 space-y-3 border-t border-gray-100 pt-6 dark:border-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                    <Check className="h-4 w-4 flex-shrink-0 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                  plan.recommended
                    ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-primary/30 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:text-blue-400"
                }`}
              >
                选择方案
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;