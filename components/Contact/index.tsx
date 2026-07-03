"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Headphones, Mail, Phone } from "lucide-react";

/* ====== 动画配置 ====== */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ====== 联系方式数据 ====== */
const CONTACT_METHODS = [
  {
    title: "商务咨询",
    desc: "了解产品详情、合作方案与定价",
    Icon: Headphones,
    items: [
      { label: "商务邮箱", value: process.env.NEXT_PUBLIC_CONTACT_BUSINESS_EMAIL || "business@payphp.cn", Icon: Mail },
      { label: "联系QQ", value: "236749035", Icon: Phone },
    ],
  },
  {
    title: "技术支持",
    desc: "获取技术帮助与故障处理",
    Icon: Headphones,
    items: [
      { label: "技术邮箱", value: process.env.NEXT_PUBLIC_CONTACT_SUPPORT_EMAIL || "support@payphp.cn", Icon: Mail },
      { label: "联系QQ", value: "236749035", Icon: Phone },
    ],
  },
  {
    title: "投诉建议",
    desc: "提交产品建议与服务投诉",
    Icon: Headphones,
    items: [
      { label: "客服邮箱", value: process.env.NEXT_PUBLIC_CONTACT_FEEDBACK_EMAIL || "feedback@payphp.cn", Icon: Mail },
    ],
  },
];

/* ====== 二维码数据 ====== */
const QR_CODES = [
  { src: "/images/about/qq.png", alt: "联系客服", title: "联系客服", desc: "7×24小时在线服务" },
  { src: "/images/about/qqq.png", alt: "商户交流", title: "商务交流", desc: "商户运营交流" },
  { src: "/images/about/qq.png", alt: "技术支持", title: "技术支持", desc: "接入指导与技术答疑" },
  { src: "/images/about/gzh.jpg", alt: "官方公众号", title: "官方公众号", desc: "获取最新资讯与动态" },
];

/* ====== 联系方式条目子组件 ====== */

/** 联系方式行：图标 + 文本 */
const ContactItem = ({ label, value, Icon }: { label: string; value: string; Icon: typeof Mail }) => (
  <div className="flex items-center gap-3">
    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-blue-900/30 dark:text-blue-400">
      <Icon className="h-4 w-4" />
    </div>
    <div className="min-w-0">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <a
        href={Icon === Mail ? `mailto:${value}` : `https://wpa.qq.com/msgrd?v=3&uin=${value}&site=qq&menu=yes`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-primary transition-colors hover:text-primary/80 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {value}
      </a>
    </div>
  </div>
);

/* ====== 主组件 ====== */

/**
 * 联系我们区域
 * 3 列联系卡片 + 底部扫码区
 */
const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">

        {/* ===== 标题 ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Headphones className="h-3.5 w-3.5" />
            联系我们
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            随时为您
            <span className="text-primary dark:text-blue-400">提供服务</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            无论您有任何问题、建议或合作意向，我们的团队随时准备为您提供专业支持
          </p>
        </motion.div>

        {/* ===== 联系方式卡片 ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CONTACT_METHODS.map((method) => (
            <div
              key={method.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-800/60 dark:hover:border-gray-700"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-blue-900/30 dark:text-blue-400">
                  <method.Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{method.desc}</p>
                </div>
              </div>
              <div className="space-y-4">
                {method.items.map((item) => (
                  <ContactItem key={item.label} {...item} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ===== 扫码联系 ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800/60 sm:p-10">
            <h3 className="mb-8 text-center text-lg font-bold text-gray-900 dark:text-white">
              扫码联系我们
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {QR_CODES.map((qr) => (
                <div key={qr.alt} className="flex flex-col items-center">
                  <div className="relative h-36 w-36 overflow-hidden rounded-xl border border-gray-100 bg-white p-2 transition-all duration-300 hover:border-primary/30 hover:shadow-md dark:border-gray-700 dark:bg-gray-700">
                    <Image
                      src={qr.src}
                      alt={qr.alt}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">{qr.title}</p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{qr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;