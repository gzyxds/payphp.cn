"use client";

import { motion } from "framer-motion";
import {
  Zap,
  MessageCircle,
  Wallet,
  CreditCard,
  MessagesSquare,
  Building2,
  Cloud,
  Banknote,
  ScanLine,
  FileCheck,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

/* ====== 动画配置 ====== */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ====== 支付方式数据 ====== */
const PAYMENT_METHODS = [
  { id: "wechat", name: "微信支付", desc: "国民级社交支付", Icon: MessageCircle, bg: "bg-green-500", text: "text-white" },
  { id: "alipay", name: "支付宝", desc: "全场景支付平台", Icon: Wallet, bg: "bg-blue-500", text: "text-white" },
  { id: "unionpay", name: "银联支付", desc: "银行卡支付网络", Icon: CreditCard, bg: "bg-red-500", text: "text-white" },
  { id: "qq", name: "QQ钱包", desc: "年轻用户首选", Icon: MessagesSquare, bg: "bg-sky-500", text: "text-white" },
  { id: "bank", name: "网银支付", desc: "企业大额支付", Icon: Building2, bg: "bg-slate-700", text: "text-white" },
  { id: "cloud", name: "云闪付", desc: "银联移动支付", Icon: Cloud, bg: "bg-rose-500", text: "text-white" },
  { id: "dcash", name: "数字人民币", desc: "法定数字货币", Icon: Banknote, bg: "bg-orange-500", text: "text-white" },
  { id: "qrcode", name: "扫码支付", desc: "快捷扫码收款", Icon: ScanLine, bg: "bg-gray-100 dark:bg-gray-700", text: "text-gray-700 dark:text-gray-200" },
];

/* ====== 接入步骤数据 ====== */
const STEPS = [
  { step: "01", title: "注册商户", desc: "提交企业资质，快速完成商户认证", Icon: FileCheck },
  { step: "02", title: "集成SDK", desc: "选择语言，5分钟完成SDK接入", Icon: Code2 },
  { step: "03", title: "上线收款", desc: "通过测试后一键上线，即刻开始收款", Icon: Rocket },
];

/* ====== SDK 支持 ====== */
const SDK_LANGS = ["Node.js", "PHP", "Java", "Python", "Go", ".NET"];

/* ====== 组件 ====== */

/**
 * 支付集成板块
 * 展示支持的支付方式、接入流程和 SDK 支持，传达"快速集成"的信任感
 */
const Integration = () => {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">

        {/* ===== 标题区域 ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Zap className="h-3.5 w-3.5" />
            支付集成
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            丰富的支付渠道，
            <span className="text-primary dark:text-blue-400">快速接入</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            完善的 API 和 SDK，支持主流支付方式。简单几行代码即可完成集成，让业务快速上线收款功能。
          </p>
        </motion.div>

        {/* ===== 支付方式卡片网格 ===== */}
        <div className="mb-20 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {PAYMENT_METHODS.map((method, i) => (
            <motion.div
              key={method.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100 dark:border-gray-800 dark:bg-gray-800/60 dark:hover:border-gray-700 dark:hover:shadow-gray-900/20">
                {/* 品牌图标 */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${method.bg} ${method.text} transition-transform duration-300 group-hover:scale-110`}>
                  <method.Icon className="h-6 w-6" />
                </div>
                {/* 名称 */}
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{method.name}</div>
                  <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{method.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== 接入流程 + SDK ===== */}
        <div className="grid gap-8 lg:grid-cols-5">

          {/* 接入步骤 —— 占 3 列 */}
          <div className="lg:col-span-3">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-gray-50/50 p-8 dark:border-gray-800 dark:bg-gray-800/40"
            >
              <h3 className="mb-8 text-center text-lg font-bold text-gray-900 dark:text-white lg:text-left">
                三步完成接入
              </h3>
              <div className="grid gap-6 sm:grid-cols-3">
                {STEPS.map((s, i) => (
                  <div key={s.step} className="relative text-center sm:text-left">
                    {/* 步骤图标 */}
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                      <s.Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mb-1.5 text-sm font-semibold text-gray-900 dark:text-white">{s.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed dark:text-gray-400">{s.desc}</p>
                    {/* 连接线（桌面端） */}
                    {i < STEPS.length - 1 && (
                      <div className="absolute top-5 right-0 hidden h-px w-full bg-gray-200 dark:bg-gray-700 sm:block" style={{ width: "calc(100% - 2.75rem)", left: "2.75rem" }} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SDK 支持 —— 占 2 列 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex h-full flex-col justify-center rounded-2xl border border-gray-100 bg-gray-50/50 p-8 dark:border-gray-800 dark:bg-gray-800/40">
              <h3 className="mb-4 text-center text-lg font-bold text-gray-900 dark:text-white lg:text-left">
                多语言 SDK 支持
              </h3>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                提供主流编程语言的 SDK，覆盖您的技术栈
              </p>
              <div className="flex flex-wrap gap-2">
                {SDK_LANGS.map((lang) => (
                  <span
                    key={lang}
                    className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-primary/30 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:text-blue-400"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              {/* CTA */}
              <div className="mt-8">
                <motion.button
                  type="button"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span>查看完整文档</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Integration;