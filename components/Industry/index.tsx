"use client";

import { motion } from "framer-motion";
import {
  MessageCircle, CreditCard, ShoppingBag, Globe, Landmark,
  Plug, Shield, Zap, ShoppingCart, Gamepad2, FileText,
  ShieldCheck, DollarSign, Code, Ban, BarChart, CheckCircle,
  LifeBuoy, ArrowRight, Rocket, Phone, Play,
  MessagesSquare, Banknote, Ticket, Gift,
} from "lucide-react";

/* ===== 动画预设 ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ===== 数据 ===== */

const INDUSTRY_DATA = [
  {
    id: 1,
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "电商支付",
    subtitle: "E-commerce Payment",
    stats: { value: "99.9%", label: "成功率" },
    description: "为电商平台提供多渠道收款、实时到账与智能分账能力，适配零售、跨境电商与社交电商等多种业务模式。",
    features: ["主流渠道收款，契合银行实时到账", "订单营销分账统一化管理", "高效安全的资金统筹"],
    wide: true,
  },
  { id: 2, icon: <Gamepad2 className="h-6 w-6" />, title: "游戏支付", subtitle: "Gaming Payment", stats: { value: "24/7", label: "服务时间" }, features: ["三方清算支持多种充值渠道", "手游、端游、页游一网打尽", "提供安全、便捷、专业的在线支付解决方案"], wide: false },
  { id: 3, icon: <Ticket className="h-6 w-6" />, title: "卡密支付", subtitle: "Card Key Payment", stats: { value: "即时", label: "自动发货" }, features: ["支持卡密充值与兑换", "自动化核销与库存管理", "适配虚拟商品交易场景"], wide: false },
  {
    id: 4,
    icon: <MessageCircle className="h-6 w-6" />,
    title: "社交支付",
    subtitle: "Social Payment",
    stats: { value: "1000+", label: "合作伙伴" },
    description: "覆盖直播打赏、公会结算、社群电商等场景，支持自动化结佣与实时资金分发，助力社交业务快速增长。",
    features: ["全自动结算结佣实时到账", "接口接入简单轻松", "直播社交、公会社交等场景全覆盖"],
    wide: true,
  },
  {
    id: 5,
    icon: <FileText className="h-6 w-6" />,
    title: "内容支付",
    subtitle: "Content Payment",
    stats: { value: "500M+", label: "交易额" },
    description: "为网文、动漫、知识付费等内容平台提供低门槛接入与快速到账能力，覆盖内容变现全链路。",
    features: ["支付接入门槛低，实时到账", "资金到账速度快", "网文小说、动漫文章等内容全覆盖"],
    wide: true,
  },
  { id: 6, icon: <Gift className="h-6 w-6" />, title: "兑换码支付", subtitle: "Redemption Code", stats: { value: "批量", label: "码库管理" }, features: ["批量生成与发放兑换码", "支持限时/限量核销策略", "灵活对接营销活动"], wide: false },
];

const CORE_STATS = [
  { value: "99.99%", label: "系统稳定性" },
  { value: "500+", label: "API 接口" },
  { value: "24/7", label: "技术支持" },
  { value: "1000+", label: "企业客户" },
];

const SERVICE_ADVANTAGES = [
  { id: 1, title: "无需营业执照", subtitle: "个人可申请", description: "个人与企业均可申请，无需营业执照；资金直达个人账户，不碰资金、不做二清。", icon: <MessageCircle className="h-6 w-6" /> },
  { id: 2, title: "接口安全", subtitle: "稳定传输", description: "国内服务器部署，接口稳定低延迟，保障每一笔订单的安全传输。", icon: <ShieldCheck className="h-6 w-6" /> },
  { id: 3, title: "费率超低", subtitle: "直接到账", description: "资金直接结算至商户账户，无中间环节，综合费率更低。", icon: <DollarSign className="h-6 w-6" /> },
  { id: 4, title: "资金保障", subtitle: "安全加密", description: "全链路加密订单信息，7×24 小时运维监控，保障账户与资金安全。", icon: <Shield className="h-6 w-6" /> },
  { id: 5, title: "REST API", subtitle: "完善接口", description: "完善的 RESTful API，支持多系统接入与自定义通道插件开发。", icon: <Code className="h-6 w-6" /> },
  { id: 6, title: "拒绝资金流", subtitle: "安全保障", description: "仅处理交易信息流，不参与资金清算；资金实时到账，安全可控。", icon: <Ban className="h-6 w-6" /> },
];

const HERO_FEATURES = [
  { title: "统一接入标准", desc: "一套API覆盖所有支付场景，降低开发成本", icon: <Plug className="w-6 h-6" /> },
  { title: "多渠道支持", desc: "支持银行卡、第三方支付、数字钱包等多种支付方式", icon: <CreditCard className="w-6 h-6" /> },
  { title: "合规保障", desc: "符合PCI DSS标准，确保交易数据安全合规", icon: <Shield className="w-6 h-6" /> },
  { title: "实时结算", desc: "T+0实时到账，提升资金周转效率", icon: <Zap className="w-6 h-6" /> },
];

const CORE_FUNCTIONS = [
  { title: "支付网关", stat: "99.9%", statLabel: "成功率", features: ["多渠道支付接入", "实时到账结算", "安全加密传输", "7×24小时监控"], buttonText: "立即接入", href: "https://merch.payphp.cn/", icon: <CreditCard className="w-6 h-6" /> },
  { title: "API文档", stat: "10+", statLabel: "编程语言", features: ["RESTful API设计", "多语言SDK支持", "在线调试工具", "代码示例丰富"], buttonText: "查看文档", href: "/docs", icon: <Code className="w-6 h-6" /> },
  { title: "数据看板", stat: "实时", statLabel: "数据监控", features: ["实时交易数据", "可视化报表", "多维度分析", "自定义仪表盘"], buttonText: "查看演示", href: "https://merch.payphp.cn/", icon: <BarChart className="w-6 h-6" /> },
  { title: "智能风控", stat: "ms级", statLabel: "风控响应", features: ["AI智能识别", "实时交易分析", "风险自动阻断", "多维行为监控"], buttonText: "查看详情", href: "/products", icon: <ShieldCheck className="w-6 h-6" /> },
];

const PRODUCT_ADVANTAGES = [
  { title: "银行级安全", stat: "99.99%", statLabel: "安全保障", description: "采用金融级安全标准，多重加密保护，确保每一笔交易的安全可靠", features: ["SSL/TLS加密传输", "多重身份验证", "实时风险监控", "PCI DSS认证"] },
  { title: "高可用性", stat: "99.9%", statLabel: "系统可用性", description: "7×24小时不间断服务，99.9%的系统可用性，保障您的业务持续运行", features: ["分布式架构", "自动故障切换", "负载均衡", "实时监控告警"] },
  { title: "极速响应", stat: "<100ms", statLabel: "响应时间", description: "毫秒级响应速度，秒级到账结算，为用户提供极致的支付体验", features: ["毫秒级响应", "秒级到账", "智能路由", "缓存优化"] },
  { title: "简单集成", stat: "5分钟", statLabel: "快速集成", description: "提供完整的SDK和API文档，5分钟快速集成，降低开发成本", features: ["RESTful API", "多语言SDK", "详细文档", "在线调试"] },
];

// 每个支付渠道使用唯一图标
const PARTNERS = [
  { name: "微信支付", icon: <MessageCircle className="w-8 h-8" />, color: "#07C160" },
  { name: "支付宝", icon: <CreditCard className="w-8 h-8" />, color: "#1677FF" },
  { name: "银联支付", icon: <Landmark className="w-8 h-8" />, color: "#E60012" },
  { name: "QQ钱包", icon: <MessagesSquare className="w-8 h-8" />, color: "#12B7F5" },
  { name: "京东支付", icon: <ShoppingBag className="w-8 h-8" />, color: "#E1251B" },
  { name: "PayPal", icon: <Globe className="w-8 h-8" />, color: "#003087" },
  { name: "USDT", icon: <DollarSign className="w-8 h-8" />, color: "#26A17B" },
  { name: "数字人民币", icon: <Banknote className="w-8 h-8" />, color: "#C8102E" },
];

const SUPPORT_CARDS = [
  { title: "技术支持", description: "7×24 小时在线响应，快速定位并解决接入与交易问题。", linkText: "获取支持", href: "/support" },
  { title: "商务合作", description: "专属商务经理一对一服务，定制最适合的支付解决方案。", linkText: "联系我们", href: "/support" },
  { title: "开发文档", description: "完整 API 文档、多语言 SDK 与在线调试工具，5 分钟上手。", linkText: "查看文档", href: "/docs" },
];

const PROCESS_STEPS = [
  { id: "01", title: "注册账号", desc: "填写基本信息完成注册，获取商户后台管理权限" },
  { id: "02", title: "实名认证", desc: "上传身份资料完成实名认证，确保账户安全合规" },
  { id: "03", title: "签约接入", desc: "在线签署协议并获取 API 密钥，开始技术对接" },
  { id: "04", title: "正式上线", desc: "完成接口调试与联调测试，业务正式上线运营" },
];

/* ===== 辅助组件 ===== */

/** 统一的图标容器 — 消除 15+ 处重复样式 */
function IconBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 ${className}`}>
      {children}
    </div>
  );
}

/** section 标题区: badge → h2 → p */
function SectionHeader({ name, title, desc }: { name: string; title: string; desc: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-14 lg:mb-16"
    >
      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {name}
      </span>
      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
        {desc}
      </p>
    </motion.div>
  );
}

/** 通用卡片容器 — 对齐项目 rounded-2xl 标准 */
function CardBase({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-800/60 ${className}`}>
      {children}
    </div>
  );
}

function HeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute left-[-12%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl dark:bg-blue-500/8" />
      <div className="absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/6" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 dark:opacity-20" />
    </div>
  );
}

/* ===== 主组件 ===== */

const Industry = () => {
  return (
    <section className="relative bg-white dark:bg-gray-950">

      {/* ===== 首屏 ===== */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#f6f8fc] dark:from-[#06111f] dark:via-[#040816] dark:to-[#02050d]">
        <HeroBg />

        <div className="relative max-w-c-1450 mx-auto px-4 md:px-8 2xl:px-0 pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* 左侧 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 self-center rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary lg:self-start">
                <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_rgba(22,93,255,0.5)]" />
                企业支付基础设施
              </div>

              <div className="mt-8 space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                  Business-grade payment platform
                </p>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">PaYphp</span>
                  </h1>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
                    企业级支付解决方案
                  </h2>
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
                  统一的 API 与 SDK，覆盖电商、游戏、内容、社交及卡密、兑换码等核心支付场景，以稳定链路、合规能力与高效交付，帮助企业构建更可靠的支付体验。
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {["电商支付", "游戏支付", "社交支付", "内容支付", "卡密支付", "兑换码支付"].map((tag) => (
                  <span key={tag} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">{tag}</span>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {CORE_STATS.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-gray-100 bg-white px-5 py-4 text-left shadow-sm dark:border-gray-800 dark:bg-gray-800/60">
                    <div className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 右侧 — 方案矩阵 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-white p-6 text-gray-900 shadow-lg dark:from-blue-900/40 dark:via-blue-800/30 dark:to-gray-900 dark:text-white lg:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(191,219,254,0.08),transparent_28%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 dark:opacity-20" />

              <div className="relative z-10 space-y-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/80 dark:text-blue-200/80">Solution Matrix</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">统一接入，更强支付中台能力</h3>
                  </div>
                  <div className="rounded-2xl bg-white/65 px-4 py-3 backdrop-blur-sm dark:bg-white/10">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-200">7×24</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-blue-100/75">Service Support</div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-gray-600 md:text-base dark:text-blue-50/85">
                  通过标准化技术接入、稳定链路治理与多行业经验沉淀，为企业建立可持续扩展的支付能力底座。
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {HERO_FEATURES.map((feature) => (
                    <div key={feature.title} className="group rounded-2xl bg-white/72 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/88 dark:bg-white/8 dark:hover:bg-white/12">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600/15 dark:bg-white/12 dark:text-blue-300 dark:group-hover:bg-white/16">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-gray-900 md:text-lg dark:text-white">{feature.title}</h4>
                          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-blue-50/80">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-c-1450 mx-auto px-4 md:px-8 2xl:px-0">

        {/* ===== 核心数据 ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-12 lg:pt-16 mb-12 lg:mb-16"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {CORE_STATS.map((stat) => (
              <CardBase key={stat.label} className="p-6 text-center">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl">{stat.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 md:text-sm">{stat.label}</div>
              </CardBase>
            ))}
          </div>
        </motion.section>

        {/* ===== 核心功能 ===== */}
        <section className="pb-20 sm:pb-28">
          <SectionHeader
            name="Core Capabilities"
            title="面向复杂业务的全方位支付能力"
            desc="以高可用底座、标准化接入与实时业务反馈，帮助企业构建更稳、更快、更易扩展的支付系统。"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {CORE_FUNCTIONS.map((item) => (
              <CardBase key={item.title} className="p-7">
                <div className="relative">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <IconBox>
                      {item.icon}
                    </IconBox>
                    <div className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {item.statLabel}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <div className="mt-4 mb-6">
                    <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">{item.stat}</span>
                  </div>
                  <div className="space-y-3">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 rounded-lg px-1 py-2">
                        <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(22,93,255,0.4)]" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardBase>
            ))}
          </motion.div>
        </section>

        {/* ===== 服务优势 ===== */}
        <section className="mb-16 lg:mb-24">
          <SectionHeader
            name="Service Highlights"
            title="全方位服务保障"
            desc="从申请门槛、接口稳定到资金安全与接入效率，构建更完整的商户服务体验。"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {SERVICE_ADVANTAGES.map((advantage) => (
              <CardBase key={advantage.id} className="p-6 lg:p-8">
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <IconBox>
                      {advantage.icon}
                    </IconBox>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white lg:text-2xl">{advantage.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{advantage.subtitle}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{advantage.description}</p>
                  <div className="mt-auto pt-5">
                    <a href="https://merch.payphp.cn/user/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3">
                      立即接入
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardBase>
            ))}
          </motion.div>
        </section>

        {/* ===== 行业方案 ===== */}
        <section className="mb-16 lg:mb-24">
          <SectionHeader
            name="Industry Scenarios"
            title="覆盖主流业务场景"
            desc="以 Bento Grid 布局灵活展示电商、游戏、社交、内容等核心方案，并新增卡密、兑换码等虚拟商品支付能力。"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6"
          >
            {INDUSTRY_DATA.map((industry) => (
              <CardBase
                key={industry.id}
                className={`group p-6 hover:border-primary/20 lg:p-8 ${industry.wide ? "lg:col-span-8" : "lg:col-span-4"}`}
              >
                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex flex-col items-start gap-4">
                    <IconBox>
                      {industry.icon}
                    </IconBox>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">{industry.subtitle}</p>
                      <h3 className={`mt-1.5 font-bold text-gray-900 dark:text-white ${industry.wide ? "text-3xl lg:text-4xl" : "text-2xl"}`}>{industry.title}</h3>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className={`font-bold text-primary ${industry.wide ? "text-3xl lg:text-4xl" : "text-2xl"}`}>{industry.stats.value}</span>
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">{industry.stats.label}</span>
                      </div>
                    </div>
                  </div>

                  {industry.wide && industry.description && (
                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">{industry.description}</p>
                  )}

                  <div className={`grid gap-3 ${industry.wide ? "sm:grid-cols-3" : "grid-cols-1"}`}>
                    {industry.features.map((feature) => (
                      <div key={feature} className={`flex items-start gap-2.5 text-gray-600 dark:text-gray-300 ${industry.wide ? "text-base" : "text-sm"}`}>
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CheckCircle className="h-3 w-3" />
                        </div>
                        <p className="leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-end pt-2">
                    <a href="/products" className="inline-flex flex-shrink-0 items-center gap-2 text-base font-semibold text-primary transition-all duration-300 hover:gap-3">
                      了解方案
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardBase>
            ))}
          </motion.div>
        </section>

        {/* ===== 产品优势 ===== */}
        <section className="mb-16 lg:mb-24">
          <SectionHeader
            name="Premium Advantages"
            title="用更稳健的底层能力支撑业务增长"
            desc="以银行级安全、高可用架构、极速处理与简单接入，为支付场景提供兼顾稳定性与效率的长期价值。"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2"
          >
            {/* 银行级安全 — 左侧大卡 */}
            <CardBase className="p-8 lg:row-span-2 lg:p-10">
              <div className="relative flex h-full flex-col">
                <IconBox>
                  <ShieldCheck className="w-8 h-8" />
                </IconBox>
                <div className="mt-8 max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Security First</p>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-4xl">{PRODUCT_ADVANTAGES[0].title}</h3>
                  <div className="mt-5 flex flex-col gap-2">
                    <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 lg:text-5xl">{PRODUCT_ADVANTAGES[0].stat}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-300">{PRODUCT_ADVANTAGES[0].statLabel}</span>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-300 lg:text-lg">{PRODUCT_ADVANTAGES[0].description}</p>
                </div>
                <div className="mt-8 grid gap-4 border-t border-gray-100 pt-6 dark:border-gray-700">
                  {PRODUCT_ADVANTAGES[0].features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800/40">
                      <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)] dark:bg-cyan-300 dark:shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardBase>

            {/* 高可用性 */}
            <CardBase className="p-8 lg:p-9">
              <div className="flex h-full items-start gap-5">
                <IconBox>
                  <CheckCircle className="w-8 h-8" />
                </IconBox>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white lg:text-2xl">{PRODUCT_ADVANTAGES[1].title}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary lg:text-3xl">{PRODUCT_ADVANTAGES[1].stat}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[1].statLabel}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{PRODUCT_ADVANTAGES[1].description}</p>
                </div>
              </div>
            </CardBase>

            {/* 极速响应 */}
            <CardBase className="p-8 lg:p-9">
              <div className="flex h-full items-start gap-5">
                <IconBox>
                  <Zap className="w-8 h-8" />
                </IconBox>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white lg:text-2xl">{PRODUCT_ADVANTAGES[2].title}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 lg:text-3xl">{PRODUCT_ADVANTAGES[2].stat}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[2].statLabel}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{PRODUCT_ADVANTAGES[2].description}</p>
                </div>
              </div>
            </CardBase>

            {/* 简单集成 — 底部宽卡 */}
            <CardBase className="p-8 lg:col-span-2 lg:p-10">
              <div className="flex h-full flex-col">
                <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start">
                  <IconBox>
                    <Plug className="w-8 h-8" />
                  </IconBox>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Integration Efficiency</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-3xl">{PRODUCT_ADVANTAGES[3].title}</h3>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-3xl font-bold text-primary lg:text-4xl">{PRODUCT_ADVANTAGES[3].stat}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[3].statLabel}</span>
                    </div>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">{PRODUCT_ADVANTAGES[3].description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 dark:border-gray-700 sm:grid-cols-4">
                  {PRODUCT_ADVANTAGES[3].features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800/40 dark:text-gray-300">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </CardBase>
          </motion.div>
        </section>

        {/* ===== 合作伙伴 ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-0 pb-16 lg:pb-20"
        >
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            {/* 左侧：文案与行动 */}
            <div className="flex flex-col justify-center rounded-2xl border border-gray-100 bg-gray-50/50 p-8 dark:border-gray-800 dark:bg-gray-800/40 lg:p-10">
              <span className="inline-flex items-center self-start rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Channel Partners
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                与主流支付渠道建立深度协同
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
                联合微信支付、支付宝、银联及国际支付渠道，兼顾本地化收款与全球业务扩展，提供稳定、合规、连续可用的支付能力。
              </p>

              {/* 数据亮点 */}
              <div className="mt-8 flex gap-4">
                <div className="rounded-2xl border border-gray-100 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-800/60">
                  <div className="text-3xl font-bold text-primary">8+</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">核心渠道</div>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-800/60">
                  <div className="text-3xl font-bold text-primary">Global</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">场景覆盖</div>
                </div>
              </div>

              {/* 按钮 */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://merch.payphp.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  <Rocket className="h-4 w-4" />
                  立即开通
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-primary/30 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:text-blue-400"
                >
                  <Phone className="h-4 w-4" />
                  联系商务
                </a>
              </div>
            </div>

            {/* 右侧：渠道卡片 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {PARTNERS.map((partner) => (
                <CardBase key={partner.name} className="group h-full p-5 hover:border-primary/20">
                  <div className="flex h-full items-center gap-3">
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${partner.color}15`, color: partner.color }}
                    >
                      {partner.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold text-gray-900 dark:text-white">{partner.name}</div>
                      <div className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">Partner</div>
                    </div>
                  </div>
                </CardBase>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== 行动号召 ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-white px-8 py-10 dark:border-gray-800 dark:from-gray-800/40 dark:to-gray-900 lg:px-12 lg:py-14">
            <div className="relative z-10 text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Ready to Launch
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">准备好开始了吗？</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 md:text-xl">5分钟快速接入支付服务</p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
                无需复杂配置，无需等待审核，立即注册即可开始使用
                <br />专业技术团队7×24小时为您提供支持服务
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["无需信用卡", "5分钟集成", "专业支持"].map((tag) => (
                  <span key={tag} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">{tag}</span>
                ))}
              </div>

              <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
                <a href="https://merch.payphp.cn/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90">
                  <Play className="h-4 w-4" />
                  免费试用
                </a>
                <a href="/products" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-primary/30 hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:text-blue-400">
                  <ArrowRight className="h-4 w-4" />
                  了解更多
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===== 支持卡片 ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 mb-12 lg:mb-16"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {SUPPORT_CARDS.map((card) => (
              <CardBase key={card.title} className="group p-6 lg:p-7">
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                    <LifeBuoy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{card.description}</p>
                  <a href={card.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3">
                    <span>{card.linkText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardBase>
            ))}
          </div>
        </motion.section>

      </div>

      {/* ===== 接入流程 ===== */}
      <section className="py-16 lg:py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-c-1450 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="text-center mb-12 lg:mb-16">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Deployment Flow
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl"
            >
              接入流程
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg"
            >
              标准化服务流程，帮助您快速完成账户注册、认证签约与正式上线。
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center"
            >
              <a
                href="https://merch.payphp.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-blue-500 px-8 py-3 text-base font-medium text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Rocket className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative">立即接入</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 dark:border-gray-800 dark:bg-gray-800/60 lg:p-6">
                <div className="absolute -right-3 -top-3 text-8xl font-bold text-gray-100/70 dark:text-white/5 select-none pointer-events-none font-mono">
                  {step.id}
                </div>

                <div className="relative z-10">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <span className="text-sm font-bold">{step.id}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <div className="mt-2 h-0.5 w-8 rounded-full bg-gradient-to-r from-primary to-cyan-400 opacity-70" />
                  <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </section>
  );
};

export default Industry;