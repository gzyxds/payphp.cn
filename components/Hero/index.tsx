"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Lock,
  Globe,
  FileText,
  MessageCircle,
  CreditCard,
  ScanLine,
  ArrowLeftRight,
  ScrollText,
  TrendingUp,
  Home,
  Building2,
  User,
} from "lucide-react";

/* ====== 优势标签数据 ====== */
const ADVANTAGES = [
  { label: "银行级安全", Icon: Lock, color: "text-blue-600" },
  { label: "毫秒级响应", Icon: Zap, color: "text-yellow-500" },
  { label: "全渠道覆盖", Icon: Globe, color: "text-green-600" },
];

/* ====== 手机快捷功能 ====== */
const QUICK_ACTIONS = [
  { label: "付款", Icon: CreditCard },
  { label: "扫码", Icon: ScanLine },
  { label: "转账", Icon: ArrowLeftRight },
  { label: "账单", Icon: ScrollText },
];

/* ====== 手机底部导航 ====== */
const BOTTOM_NAV = [
  { label: "首页", Icon: Home, active: true },
  { label: "资产", Icon: Building2, active: false },
  { label: "发现", Icon: Globe, active: false },
  { label: "我的", Icon: User, active: false },
];

/**
 * Hero 首屏区域
 * 左右分栏：左侧文案 + CTA，右侧手机模拟界面
 * 支付风格深色渐变背景
 */
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pb-20 pt-24 md:pt-32 xl:pb-32 xl:pt-40">
      {/* ===== 背景装饰 ===== */}
      {/* 网格纹理 */}
      <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%236b7280' stroke-width='0.5'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      {/* 光晕 */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-100/50 blur-[100px]" />
      {/* 装饰线条 */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

      <div className="relative mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">

          {/* ===== 左侧内容 ===== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5"
          >
            {/* 标签 */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Zap className="h-3.5 w-3.5" />
              企业级支付解决方案
            </span>

            {/* 标题 */}
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
              安全可靠的
              <br />
              <span className="text-primary dark:text-primary dark:text-blue-400">
                支付服务平台
              </span>
            </h1>

            {/* 描述 */}
            <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-500 md:text-lg dark:text-gray-500 dark:text-gray-400">
              为企业提供专业、安全、高效的支付解决方案。支持多种支付方式，助力企业数字化转型。
            </p>

            {/* 优势标签 */}
            <div className="mb-8 flex flex-wrap gap-2">
              {ADVANTAGES.map(({ label, Icon, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  <Icon className={`h-3.5 w-3.5 ${color}`} />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="flex gap-2 sm:gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                <Zap className="h-4 w-4" />
                快速开始
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-primary/30 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:text-blue-400"
              >
                <FileText className="h-4 w-4" />
                产品文档
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-primary/30 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:text-blue-400"
              >
                <MessageCircle className="h-4 w-4" />
                在线咨询
              </button>
            </div>
          </motion.div>

          {/* ===== 右侧：手机模拟界面 ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative mx-auto max-w-[280px]">
              {/* 浮动数据卡片 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-12 top-1/4 z-20 rounded-xl border border-gray-100 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="text-xs text-gray-500 dark:text-gray-400">日交易量</div>
                <div className="text-lg font-bold text-primary dark:text-blue-400">¥2.8M</div>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <TrendingUp className="h-3 w-3" />
                  +12.5%
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-8 bottom-1/3 z-20 rounded-xl border border-gray-100 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="text-xs text-gray-500 dark:text-gray-400">成功率</div>
                <div className="text-lg font-bold text-green-400">99.9%</div>
                <div className="text-xs text-gray-500">实时监控</div>
              </motion.div>

              {/* 手机外框 */}
              <div className="relative rounded-[2.5rem] border-2 border-gray-600 bg-black p-2 shadow-2xl shadow-blue-500/10">
                {/* 灵动岛 */}
                <div className="mx-auto mb-3 h-6 w-24 rounded-full bg-black" />

                {/* 屏幕 */}
                <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-blue-500 to-blue-700">
                  {/* 状态栏 */}
                  <div className="flex items-center justify-between px-6 pt-3 pb-2 text-white">
                    <span className="text-xs font-medium">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5">
                        {[3,4,5,6].map((h) => (
                          <div key={h} className="w-0.5 rounded-full bg-white" style={{ height: h * 2 }} />
                        ))}
                      </div>
                      <div className="relative ml-0.5 h-2.5 w-5 rounded-sm border border-white/70">
                        <div className="absolute left-0.5 top-0.5 h-1.5 w-3 rounded-sm bg-green-400" />
                        <div className="absolute -right-0.5 top-0.5 h-1 w-0.5 rounded-r bg-white/70" />
                      </div>
                    </div>
                  </div>

                  {/* 应用头部 */}
                  <div className="flex items-center gap-2.5 px-6 py-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
                      <span className="text-sm font-bold text-blue-600">P</span>
                    </div>
                    <span className="font-semibold text-white">PaYphp</span>
                  </div>

                  {/* 余额卡片 */}
                  <div className="mx-4 mb-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                    <div className="mb-1 text-sm text-white/70">我的余额</div>
                    <div className="mb-4 text-3xl font-bold text-white">¥ 8,659.20</div>
                    <div className="flex gap-2">
                      <span className="rounded-lg bg-white/20 px-4 py-1.5 text-xs font-medium text-white">充值</span>
                      <span className="rounded-lg bg-white/20 px-4 py-1.5 text-xs font-medium text-white">提现</span>
                    </div>
                  </div>

                  {/* 快捷功能 */}
                  <div className="mb-4 px-4">
                    <div className="mb-2 text-xs text-white/70">快捷功能</div>
                    <div className="grid grid-cols-4 gap-3">
                      {QUICK_ACTIONS.map(({ label, Icon }) => (
                        <div key={label} className="text-center">
                          <div className="mx-auto mb-1.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-xs text-white/80">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 底部白区 */}
                  <div className="rounded-t-3xl bg-white px-5 py-5">
                    {/* 全球支付 */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
                        <Globe className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">全球支付</div>
                        <div className="text-xs text-gray-500">支持多种结算</div>
                      </div>
                    </div>

                    {/* 近期交易 */}
                    <div className="mb-4 rounded-xl bg-gray-50 p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-900">网上商城</div>
                          <div className="text-xs text-gray-500">今天 14:30</div>
                        </div>
                        <div className="text-sm font-bold text-gray-900">-¥128.50</div>
                      </div>
                    </div>

                    {/* 底部导航 */}
                    <div className="flex justify-around border-t border-gray-100 pt-3">
                      {BOTTOM_NAV.map(({ label, Icon, active }) => (
                        <div key={label} className="text-center">
                          <Icon className={`mx-auto mb-0.5 h-5 w-5 ${active ? "text-blue-600" : "text-gray-500 dark:text-gray-400"}`} />
                          <span className={`text-xs ${active ? "font-medium text-blue-600" : "text-gray-500 dark:text-gray-400"}`}>
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;