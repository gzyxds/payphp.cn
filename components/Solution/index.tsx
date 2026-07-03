"use client";

import { motion } from "framer-motion";

/* ====== 共享动画配置 ====== */
const SLIDE_IN_LEFT = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const SLIDE_IN_RIGHT = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

/* ====== 内联 SVG 图标映射 ====== */
const ICONS = {
  /** 支付/银行卡图标 */
  payment: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
  ),
  /** 盾牌/安全图标 */
  shield: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  /** 闪电/快速 */
  lightning: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  /** 时钟/结算 */
  clock: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  /** 购物袋/电商 */
  cart: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  /** 游戏手柄 */
  game: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-10V3a1 1 0 011-1h4a1 1 0 011 1v1M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  /** 聊天气泡/社交 */
  chat: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  ),
  /** 书本/动漫 */
  book: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  /** 微信 */
  wechat: (
    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.5,13.5A1.5,1.5 0 1,0 7,15A1.5,1.5 0 0,0 8.5,13.5M14.5,13.5A1.5,1.5 0 1,0 13,15A1.5,1.5 0 0,0 14.5,13.5M12,2C6.48,2 2,5.58 2,10C2,12.66 3.61,15.05 6.12,16.46L5.05,19.5L8.24,17.41C9.37,17.79 10.65,18 12,18C17.52,18 22,14.42 22,10C22,5.58 17.52,2 12,2Z" />
    </svg>
  ),
  /** 对话气泡 */
  bubble: (
    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  /** QR码 */
  qrcode: (
    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
    </svg>
  ),
  /** 用户图标 */
  user: (
    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  /** 图表/数据 */
  chart: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  /** 箭头右 */
  arrowRight: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M12.175 9H0V7h12.175l-5.6-5.6L8 0l8 8-8 8-1.425-1.4L12.175 9z" />
    </svg>
  ),
} as const;

/* ====== 数据常量 ====== */

/** 左侧特点列表 */
const FEATURES = [
  { title: "多渠道支付", desc: "支持微信支付、支付宝、银联、QQ钱包等多种支付方式，满足不同用户的支付习惯。", icon: "payment" as const },
  { title: "安全保障", desc: "采用银行级安全加密技术，全方位保障交易安全，防止欺诈和信息泄露。", icon: "shield" as const },
  { title: "快速结算", desc: "支持T+1、D+1等多种结算方式，资金到账快速，提高资金周转效率。", icon: "clock" as const },
];

/** 数据统计 */
const STATS = [
  { value: "99.9%", label: "系统稳定性" },
  { value: "300+", label: "商户接入" },
  { value: "10亿+", label: "年交易额" },
];

/** 行业方案列表 */
const INDUSTRIES = [
  {
    title: "电商支付",
    icon: "cart" as const,
    points: ["支持主流支付渠道，实时到账", "订单管理和营销分账一体化", "资金流转安全高效"],
  },
  {
    title: "游戏支付",
    icon: "game" as const,
    points: ["支持多种渠道，实时到账", "手游端游页游一网打尽", "提供安全便捷的支付方案"],
  },
  {
    title: "社交支付",
    icon: "chat" as const,
    points: ["全自动结算结佣实时到账", "接口接入简单轻松", "覆盖直播社交，公会社交"],
  },
  {
    title: "动漫支付",
    icon: "book" as const,
    points: ["支付接入门槛低", "实时到账", "覆盖网文小说，动漫文章"],
  },
];

/** 支付方式列表 */
const PAYMENT_METHODS = [
  { name: "微信支付", desc: "快捷移动支付", icon: "wechat" as const, bg: "bg-green-500" },
  { name: "支付宝支付", desc: "全场景支付", icon: "payment" as const, bg: "bg-primary" },
  { name: "QQ支付", desc: "社交支付", icon: "bubble" as const, bg: "bg-blue-400" },
  { name: "二维码收款", desc: "扫码支付", icon: "qrcode" as const, bg: "bg-gray-900" },
  { name: "个人码收款", desc: "个人收款", icon: "user" as const, bg: "bg-primary" },
  { name: "商户码收款", desc: "商户收款", icon: "payment" as const, bg: "bg-blue-500" },
];

/** 支付特性标签 */
const PAYMENT_FEATURES = [
  { label: "实时到账", icon: "lightning" as const },
  { label: "安全保障", icon: "shield" as const },
  { label: "快速接入", icon: "clock" as const },
  { label: "数据分析", icon: "chart" as const },
];

/* ====== 通用卡片样式 ====== */
/** 基础卡片 */
const cardBase = "rounded-2xl border border-gray-100 bg-white transition-all duration-300 dark:border-gray-800 dark:bg-gray-800/60";
/** 悬停抬起 */
const cardHover = "hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:hover:border-gray-700";
/** 完整卡片样式 */
const cardStyle = `${cardBase} ${cardHover}`;

/* ====== 组件 ====== */

/**
 * 支付解决方案区域
 * 双 section 布局：行业解决方案 + 核心优势（支付方式展示）
 * 桌面端左右分栏，移动端垂直堆叠
 */
const Solution = () => {
  return (
    <>
      {/* ===== Section 1: 行业支付解决方案 ===== */}
      <section className="overflow-hidden bg-gray-50 py-16 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-20 xl:gap-24">

            {/* 左侧：特点卡片 + 数据统计 */}
            <motion.div
              variants={SLIDE_IN_LEFT}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              {/* 主标题 */}
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 dark:text-white">
                  一站式<span className="text-primary dark:text-blue-400">支付解决方案</span>
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed dark:text-gray-400">
                  为您的业务提供全方位的支付服务，满足各种场景需求，提升用户体验与转化率。
                </p>
              </div>

              {/* 特点卡片列表 */}
              <div className="space-y-3">
                {FEATURES.map((item) => (
                  <motion.div
                    key={item.title}
                    className={`${cardBase} p-4`}
                    whileHover={{ x: 2 }}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-blue-50 text-primary flex items-center justify-center dark:bg-blue-900/30 dark:text-blue-400">
                        {ICONS[item.icon]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="mt-0.5 text-sm text-gray-500 leading-relaxed dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 数据统计 */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className={`${cardBase} text-center p-3`}>
                    <div className="text-2xl font-bold text-primary mb-1 dark:text-blue-400">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 右侧：行业方案卡片网格 */}
            <motion.div
              variants={SLIDE_IN_RIGHT}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              {/* 标签 */}
              <div className="mb-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white">
                  {ICONS.lightning}
                  行业支付解决方案
                </span>
              </div>

              <h2 className="mb-6 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left dark:text-white">
                提供<span className="text-primary dark:text-blue-400">行业级</span>支付解决方案
              </h2>

              <p className="mb-8 text-lg text-gray-500 leading-relaxed text-center lg:text-left dark:text-gray-400">
                针对不同行业特点，提供专业定制化的支付解决方案，满足各行业的特殊需求
              </p>

              {/* 行业卡片 2x2 网格 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INDUSTRIES.map((industry) => (
                  <motion.div
                    key={industry.title}
                    className={`${cardStyle} p-5`}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white flex-shrink-0 mb-3">
                      {ICONS[industry.icon]}
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                      {industry.title}
                    </h3>
                    <ul className="text-gray-500 text-sm space-y-1.5 dark:text-gray-400">
                      {industry.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: 核心优势展示 ===== */}
      <section className="overflow-hidden bg-white py-16 lg:py-24 xl:py-32 dark:bg-gray-950">
        <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 xl:gap-24">

            {/* 左侧：文案 */}
            <motion.div
              variants={SLIDE_IN_LEFT}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1"
            >
              <div className="mb-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-primary dark:bg-blue-900/30 dark:text-blue-400">
                  {ICONS.lightning}
                  主流支付接口
                </span>
              </div>

              <h2 className="mb-6 text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left dark:text-white">
                全面支持各个终端<span className="text-primary dark:text-blue-400">数据同步</span>
              </h2>

              <p className="mb-8 text-lg text-gray-500 leading-relaxed text-center lg:text-left dark:text-gray-400">
                提供完整的API文档和SDK，支持快速集成，让开发者能够轻松接入各种支付功能，缩短开发周期。
              </p>

              <div className="text-center lg:text-left">
                <motion.button
                  type="button"
                  className="group inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-primary/90"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>了解更多</span>
                  {ICONS.arrowRight}
                </motion.button>
              </div>
            </motion.div>

            {/* 右侧：支付方式面板 */}
            <motion.div
              variants={SLIDE_IN_RIGHT}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-1/2 order-2"
            >
              <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm dark:border-gray-800 dark:bg-gray-800/60">
                {/* 面板标题栏 */}
                <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">支付方式</span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium dark:text-gray-400">{PAYMENT_METHODS.length}种方式</span>
                  </div>
                </div>

                {/* 支付方式网格 */}
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-2.5">
                    {PAYMENT_METHODS.map((method) => (
                      <motion.div
                        key={method.name}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50/80 hover:bg-blue-50 transition-colors duration-200 dark:bg-gray-700/50 dark:hover:bg-gray-700"
                        whileHover={{ y: -1 }}
                      >
                        <div className={`h-9 w-9 rounded-lg ${method.bg} flex items-center justify-center flex-shrink-0`}>
                          {ICONS[method.icon]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{method.name}</div>
                          <div className="text-xs text-gray-500 truncate dark:text-gray-400">{method.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* 支付特性标签 */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {PAYMENT_FEATURES.map((feat) => (
                      <div key={feat.label} className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/60 dark:bg-gray-700/50">
                        <span className="text-primary">{ICONS[feat.icon]}</span>
                        <span className="text-xs text-gray-700 dark:text-gray-300">{feat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 底部统计栏 */}
                <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500 dark:text-gray-400">
                        接口: <span className="font-semibold text-primary dark:text-blue-400">6</span>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        可用性: <span className="font-semibold text-primary dark:text-blue-400">99.9%</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-gray-500 font-medium dark:text-gray-400">在线</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 悬浮标签 */}
              <motion.div
                className="absolute right-4 top-6 z-20 hidden md:block"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className={`${cardBase} px-3 py-2`}>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary dark:text-blue-400">5min</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">快速集成</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;