"use client";

/**
 * Industry组件 - 支付行业解决方案展示页面
 *
 * 组件功能：
 * - 展示支付服务在不同行业的应用场景
 * - 呈现核心功能特性，采用Bento Grids布局设计
 * - 突出服务优势和技术特点
 * - 提供行业特定的支付解决方案介绍
 *
 * 设计特点：
 * - 采用现代化的卡片式布局
 * - 支持深色/浅色主题切换
 * - 完全响应式设计，适配各种设备尺寸
 * - 使用Bento Grids布局展示核心功能区域
 *
 * 主要区域：
 * 1. 页面标题和介绍区域
 * 2. 核心统计数据展示
 * 3. 核心功能Bento Grids布局区
 * 4. 服务优势卡片展示区
 * 5. 行业解决方案网格
 * 6. 产品优势Bento Grids区
 * 7. 常见问题FAQ区域
 *
 * 技术实现：
 * - 使用React函数组件和Hooks
 * - Tailwind CSS进行样式设计
 * - Lucide React图标库
 * - TypeScript类型安全
 */

import {
  MessageCircle,
  CreditCard,
  ShoppingBag,
  Globe,
  Bitcoin,
  Coins,
  Landmark,
  Users,
  Plug,
  Shield,
  Zap,
  ShoppingCart,
  Gamepad2,
  FileText,
  ShieldCheck,
  DollarSign,
  Code,
  Ban,
  Activity,
  Expand,
  BarChart,
  CheckCircle,
  LifeBuoy,
  ArrowRight,
  Rocket,
  Phone,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * 行业数据配置
 * 定义支付行业的各个领域信息，包括图标、标题、统计数据和特性
 */
const INDUSTRY_DATA = [
  {
    id: 1,
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "电商支付",
    subtitle: "E-commerce Payment",
    stats: { value: "99.9%", label: "成功率" },
    features: [
      "主流渠道收款，契合银行实时到账",
      "订单营销分账统一化管理",
      "高效安全的资金统筹"
    ]
  },
  {
    id: 2,
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "游戏支付",
    subtitle: "Gaming Payment",
    stats: { value: "24/7", label: "服务时间" },
    features: [
      "三方清算支持多种充值渠道",
      "手游、端游、页游一网打尽",
      "提供安全、便捷、专业的在线支付解决方案"
    ]
  },
  {
    id: 3,
    icon: <MessageCircle className="w-6 h-6" />,
    title: "社交支付",
    subtitle: "Social Payment",
    stats: { value: "1000+", label: "合作伙伴" },
    features: [
      "全自动结算结佣实时到账",
      "接口接入更显简单轻松",
      "场景应用覆盖广，直播社交，公会社交统统有"
    ]
  },
  {
    id: 4,
    icon: <FileText className="w-6 h-6" />,
    title: "内容支付",
    subtitle: "Content Payment",
    stats: { value: "500M+", label: "交易额" },
    features: [
      "支付接入门槛低，实时到账",
      "资金到账速度快",
      "网文小说，动漫文章都覆盖"
    ]
  }
];

/**
 * 核心统计数据配置
 * 展示平台的关键性能指标和服务能力
 */
const CORE_STATS = [
  { value: "99.99%", label: "系统稳定性" },
  { value: "500+", label: "API接口" },
  { value: "24/7", label: "技术支持" },
  { value: "1000+", label: "企业客户" }
];

/**
 * 服务优势配置
 * 定义平台的核心服务特色和优势
 */
const SERVICE_ADVANTAGES = [
  {
    id: 1,
    title: "无需营业执照",
    subtitle: "个人可申请",
    description: "专业客服服务，7*24小时技术支持，不做二清，不碰钱，微信支付宝收款码可直接收款",
    icon: <MessageCircle className="w-6 h-6" />
  },
  {
    id: 2,
    title: "接口安全",
    subtitle: "稳定传输",
    description: "采用国内服务器，接口稳定传输，给顾客快速流畅的体验，安全可靠的服务您的每一笔订单",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 3,
    title: "费率超低",
    subtitle: "直接到账",
    description: "接口渠道直接到自己账户，省去中间商赚差价，因此我们可以给商户提供更低廉的费率",
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    id: 4,
    title: "资金保障",
    subtitle: "安全加密",
    description: "商户订单信息，全部加密处理，专业技术24小时实时运维，您的帐户安全将得到充分的保障",
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 5,
    title: "REST API",
    subtitle: "完善接口",
    description: "提供了完善的API接口，你可以用于平台应用通道接入，开发各种系统的对接通道插件等",
    icon: <Code className="w-6 h-6" />
  },
  {
    id: 6,
    title: "拒绝资金流",
    subtitle: "安全保障",
    description: "只负责交易处理不参与资金清算，资金全都实时到您的个人账户上，以此来保障您的资金安全",
    icon: <Ban className="w-6 h-6" />
  }
];

/**
 * 技术优势配置
 * 定义平台的技术特性和优势
 */
const TECH_FEATURES = [
  {
    title: "高可用架构",
    description: "99.99%系统可用性保障，多地域容灾备份",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "实时监控",
    description: "全链路性能监控与智能告警系统",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "弹性扩容",
    description: "自动伸缩应对业务峰值，成本优化",
    icon: <Expand className="w-6 h-6" />
  }
];

/**
 * 英雄区核心特性配置
 * 定义英雄区右侧展示的核心功能特性
 */
const HERO_FEATURES = [
  { title: "统一接入标准", desc: "一套API覆盖所有支付场景，降低开发成本", icon: <Plug className="w-6 h-6" /> },
  { title: "多渠道支持", desc: "支持银行卡、第三方支付、数字钱包等多种支付方式", icon: <CreditCard className="w-6 h-6" /> },
  { title: "合规保障", desc: "符合PCI DSS标准，确保交易数据安全合规", icon: <Shield className="w-6 h-6" /> },
  { title: "实时结算", desc: "T+0实时到账，提升资金周转效率", icon: <Zap className="w-6 h-6" /> }
];

/**
 * 核心功能配置
 * 定义平台的核心功能模块
 *
 * 功能模块说明：
 * - 支付网关: 核心支付处理模块，提供高成功率的支付通道
 * - API文档: 完善的开发者文档和SDK支持，简化集成过程
 * - 数据看板: 实时数据监控和分析，助力业务决策
 *
 * 布局设计：
 * - 采用Bento Grids布局，2x2网格结构
 * - 支付网关作为主要功能占据左侧大格子
 * - API文档和数据看板作为辅助功能占据右侧两个小格子
 * - 每个功能模块包含图标、标题、统计数据、特性列表和行动按钮
 */
const CORE_FUNCTIONS = [
  {
    title: "支付网关",
    stat: "99.9%",
    statLabel: "成功率",
    features: ["多渠道支付接入", "实时到账结算", "安全加密传输", "7×24小时监控"],
    buttonText: "立即接入 →",
    icon: <CreditCard className="w-6 h-6" />
  },
  {
    title: "API文档",
    stat: "10+",
    statLabel: "编程语言",
    features: ["RESTful API设计", "多语言SDK支持", "在线调试工具", "代码示例丰富"],
    buttonText: "查看文档 →",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "数据看板",
    stat: "实时",
    statLabel: "数据监控",
    features: ["实时交易数据", "可视化报表", "多维度分析", "自定义仪表盘"],
    buttonText: "查看演示 →",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: "智能风控",
    stat: "ms级",
    statLabel: "风控响应",
    features: ["AI智能识别", "实时交易分析", "风险自动阻断", "多维行为监控"],
    buttonText: "查看详情 →",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

/**
 * 产品优势配置
 * 定义平台的产品核心优势
 */
const PRODUCT_ADVANTAGES = [
  {
    title: "银行级安全",
    stat: "99.99%",
    statLabel: "安全保障",
    description: "采用金融级安全标准，多重加密保护，确保每一笔交易的安全可靠",
    features: ["SSL/TLS加密传输", "多重身份验证", "实时风险监控", "PCI DSS认证"],
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "高可用性",
    stat: "99.9%",
    statLabel: "系统可用性",
    description: "7×24小时不间断服务，99.9%的系统可用性，保障您的业务持续运行",
    features: ["分布式架构", "自动故障切换", "负载均衡", "实时监控告警"],
    icon: <CheckCircle className="w-8 h-8" />
  },
  {
    title: "极速响应",
    stat: "<100ms",
    statLabel: "响应时间",
    description: "毫秒级响应速度，秒级到账结算，为用户提供极致的支付体验",
    features: ["毫秒级响应", "秒级到账", "智能路由", "缓存优化"],
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "简单集成",
    stat: "5分钟",
    statLabel: "快速集成",
    description: "提供完整的SDK和API文档，5分钟快速集成，降低开发成本",
    features: ["RESTful API", "多语言SDK", "详细文档", "在线调试"],
    icon: <Plug className="w-8 h-8" />
  }
];

/**
 * 合作伙伴配置
 * 定义平台合作的支付渠道信息
 */
const PARTNERS = [
  { name: "微信支付", icon: <MessageCircle className="w-8 h-8" />, color: "#07C160" },
  { name: "支付宝", icon: <CreditCard className="w-8 h-8" />, color: "#1677FF" },
  { name: "银联支付", icon: <Landmark className="w-8 h-8" />, color: "#E60012" },
  { name: "QQ钱包", icon: <MessageCircle className="w-8 h-8" />, color: "#12B7F5" },
  { name: "京东支付", icon: <ShoppingBag className="w-8 h-8" />, color: "#E1251B" },
  { name: "PayPal", icon: <Globe className="w-8 h-8" />, color: "#003087" },
  { name: "USDT", icon: <Bitcoin className="w-8 h-8" />, color: "#26A17B" },
  { name: "数字人民币", icon: <Coins className="w-8 h-8" />, color: "#C8102E" }
];

/**
 * 行动号召配置
 * 定义页面底部的行动号召区域内容
 */
const CTA_CONFIG = {
  title: "准备好开始了吗？",
  subtitle: "5分钟快速接入支付服务",
  description: "无需复杂配置，无需等待审核，立即注册即可开始使用\n专业技术团队7×24小时为您提供支持服务",
  tags: ["无需信用卡", "5分钟集成", "专业支持"],
  buttons: [
    { text: "免费试用", href: "https://merch.PaYphp.cn/", variant: "primary" },
    { text: "了解更多", variant: "secondary" }
  ]
};

/**
 * 服务支持配置
 * 定义页面底部的服务支持卡片
 */
const SUPPORT_CARDS = [
  {
    title: "技术支持",
    description: "7×24小时在线技术支持",
    linkText: "获取支持",
    icon: <LifeBuoy className="w-6 h-6 text-white" />
  },
  {
    title: "商务合作",
    description: "专业的商务团队为您服务",
    linkText: "联系我们",
    icon: <Users className="w-6 h-6 text-white" />
  },
  {
    title: "开发文档",
    description: "完整的API文档和SDK",
    linkText: "查看文档",
    icon: <FileText className="w-6 h-6 text-white" />
  }
];

/**
 * 接入流程步骤配置
 * 定义从注册到上线的标准化流程
 */
const PROCESS_STEPS = [
  { id: "01", title: "注册账号", desc: "填写基本信息，完成账号注册，即可获取商户后台管理权限" },
  { id: "02", title: "实名认证", desc: "上传企业或个人身份资料，完成实名认证，确保账户安全" },
  { id: "03", title: "签约接入", desc: "在线签署服务协议，获取API密钥，开始技术对接" },
  { id: "04", title: "正式上线", desc: "完成接口调试，通过联调测试，业务正式上线运营" }
];

/**
 * 英雄区 - 企业级支付解决方案组件
 * 展示支付服务的核心功能、行业应用和技术优势
 *
 * 主要功能：
 * - 展示支付服务的核心统计数据
 * - 提供多行业支付解决方案展示
 * - 采用Bento Grids布局展示产品优势
 * - 集成合作伙伴展示和行动号召
 *
 * 布局特点：
 * - 响应式设计，支持移动端和桌面端
 * - 深色模式支持
 * - 现代化的卡片式UI设计
 * - 流畅的交互动画效果
 */
/**
 * 行业解决方案页面组件
 * 统一展示企业支付能力、场景方案与服务支持内容
 */
const Industry = () => {
  return (
    <section className="relative bg-white dark:bg-black">

      {/* 英雄区 - 蓝色渐变背景 */}
      <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_44%,#f6f8fc_100%)] dark:bg-[linear-gradient(180deg,#06111f_0%,#040816_44%,#02050d_100%)]">
        {/* 背景装饰光晕 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[-12%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-[#0055ff]/10 blur-3xl dark:bg-[#2563eb]/18" />
          <div className="absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/12" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,85,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,85,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 dark:opacity-20" />
        </div>

        {/* 英雄区内容 */}
        <div className="relative max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0 pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 lg:pb-20">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-16">

            {/* 左侧标题区域 */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex items-center gap-2 self-center rounded-full bg-[#0055ff]/8 px-4 py-2 text-sm font-semibold text-[#0055ff] dark:bg-[#3b82f6]/10 lg:self-start">
                <div className="h-2 w-2 rounded-full bg-[#0055ff] shadow-[0_0_16px_rgba(0,85,255,0.75)]" />
                企业支付基础设施
              </div>

              <div className="mt-8 space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  Business-grade payment platform
                </p>
                <div>
                  <h1 className="text-4xl font-bold tracking-[-0.04em] text-gray-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="bg-gradient-to-r from-[#0055ff] via-[#2563eb] to-cyan-500 bg-clip-text text-transparent">
                      PaYphp
                    </span>
                  </h1>
                  <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-[3.15rem] lg:leading-[1.1]">
                   企业级支付解决方案
                  </h2>
                </div>
                <p className="max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
                  统一的 API 与 SDK，覆盖电商、游戏、内容、社交等核心场景，以稳定链路、合规能力与高效交付，帮助企业构建更可靠的支付体验。
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {['电商支付', '游戏支付', '社交支付', '内容支付'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-2xl bg-white/75 px-4 py-2 text-sm font-medium text-gray-700 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#0055ff] dark:bg-white/5 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {CORE_STATS.slice(0, 3).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/78 px-5 py-4 text-left shadow-[0_18px_40px_-28px_rgba(15,23,42,0.28)] backdrop-blur-sm dark:bg-white/5"
                  >
                    <div className="text-2xl font-bold text-[#0055ff] md:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧特性区域 */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_52%,#f8fbff_100%)] p-7 text-slate-900 shadow-[0_35px_110px_-42px_rgba(37,99,235,0.28)] dark:bg-[linear-gradient(135deg,#1d4ed8_0%,#2563eb_52%,#3b82f6_100%)] dark:text-white lg:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(191,219,254,0.18),transparent_28%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 dark:opacity-20" />

              <div className="relative z-10 space-y-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]/80 dark:text-blue-100/80">
                      Solution Matrix
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white md:text-3xl">
                      统一接入，更强支付中台能力
                    </h3>
                  </div>
                  <div className="rounded-2xl bg-white/65 px-4 py-3 backdrop-blur-sm dark:bg-white/12">
                    <div className="text-2xl font-bold text-[#2563eb] dark:text-blue-100">7×24</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-blue-100/75">Service Support</div>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-600 md:text-base dark:text-blue-50/85">
                  通过标准化技术接入、稳定链路治理与多行业经验沉淀，为企业建立可持续扩展的支付能力底座。
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {HERO_FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="group rounded-2xl bg-white/72 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/88 dark:bg-white/10 dark:hover:bg-white/14"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb] shadow-[0_0_30px_rgba(37,99,235,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2563eb]/15 dark:bg-white/14 dark:text-blue-100 dark:shadow-[0_0_30px_rgba(191,219,254,0.12)] dark:group-hover:bg-white/18">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-slate-900 md:text-lg dark:text-white">
                            {feature.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-blue-50/80">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 主要内容区域 - 约束宽度 */}
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">

        {/* 核心统计数据展示 */}
        <section className="pt-16 lg:pt-20 mb-16 lg:mb-20">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {CORE_STATS.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/90 p-6 text-center shadow-[0_20px_60px_-35px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/20 dark:border-white/10 dark:bg-white/5"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#0055ff]/40 to-transparent" />
                <div className="text-2xl font-bold text-[#0055ff] md:text-3xl lg:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 核心能力展示 */}
        <section className="py-20 sm:py-28">
          <div className="text-center mb-14 lg:mb-16">
              <span className="inline-flex items-center rounded-full border border-[#0055ff]/15 bg-[#0055ff]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0055ff]">
                Core Capabilities
              </span>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-[-0.03em] text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                面向复杂业务的全方位支付能力
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
                以高可用底座、标准化接入与实时业务反馈，帮助企业构建更稳、更快、更易扩展的支付系统。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {CORE_FUNCTIONS.map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/85 p-7 shadow-[0_20px_60px_-35px_rgba(0,85,255,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/25 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,85,255,0.09),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_32%)]" />
                  <div className="relative">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="rounded-full border border-[#0055ff]/15 bg-[#0055ff]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0055ff]">
                        {item.statLabel}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    <div className="mt-4 mb-6">
                      <span className="bg-gradient-to-r from-[#0055ff] to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
                        {item.stat}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 rounded-lg px-1 py-2">
                          <div className="h-2 w-2 rounded-full bg-[#0055ff] shadow-[0_0_12px_rgba(0,85,255,0.55)]" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:text-[#0055ff] dark:text-white">
                      <span>{item.buttonText.replace(' →', '')}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
        </section>


        {/* 服务优势展示 */}
        <section className="mb-16 lg:mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center rounded-full border border-[#0055ff]/15 bg-[#0055ff]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0055ff]">
              Service Highlights
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              全方位服务保障
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300">
              从申请门槛、接口稳定到资金安全与接入效率，构建更完整的商户服务体验。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {SERVICE_ADVANTAGES.map((advantage) => (
              <article
                key={advantage.id}
                className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/95 p-6 lg:p-8 shadow-[0_20px_60px_-30px_rgba(0,85,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/30 dark:border-gray-800 dark:bg-gray-950/90"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,85,255,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_34%),linear-gradient(180deg,rgba(59,130,246,0.08),transparent_55%)]" />
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#0055ff]/10 blur-2xl dark:bg-[#0055ff]/20" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 transition-colors duration-300">
                        {advantage.icon}
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0055ff]">
                          {advantage.subtitle}
                        </p>
                        <h3 className="mt-2 text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                          {advantage.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex h-10 min-w-10 items-center justify-center rounded-full border border-[#0055ff]/15 bg-[#0055ff]/8 px-3 text-sm font-bold text-[#0055ff] dark:border-[#0055ff]/20 dark:bg-[#0055ff]/10">
                      0{advantage.id}
                    </div>
                  </div>

                  <p className="mt-6 text-sm md:text-base leading-7 text-gray-600 dark:text-gray-300">
                    {advantage.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-gray-200/70 pt-5 dark:border-white/10">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                      <span className="h-2 w-2 rounded-full bg-[#0055ff]" />
                      企业级服务能力
                    </div>
                    <a
                      href="https://merch.PaYphp.cn/user/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0055ff] transition-all duration-300 group-hover:gap-3 hover:text-[#0044cc]"
                    >
                      立即接入
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* 行业解决方案展示 */}
        <section className="mb-16 lg:mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-flex items-center rounded-full border border-[#0055ff]/15 bg-[#0055ff]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0055ff]">
              Industry Scenarios
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              覆盖主流业务场景
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300">
              以更灵活的卡片布局展示行业方案，让核心数据、适用场景与能力亮点一眼可见。
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
            {INDUSTRY_DATA.map((industry, index) => (
              <article
                key={industry.id}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/95 p-6 lg:p-8 shadow-[0_20px_60px_-30px_rgba(0,85,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/30 dark:border-gray-800 dark:bg-gray-950/90 ${
                  index % 2 === 0 ? "xl:col-span-7" : "xl:col-span-5"
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,85,255,0.12),transparent_36%),linear-gradient(135deg,rgba(0,85,255,0.05),transparent_42%,rgba(15,23,42,0.04))] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_36%),linear-gradient(135deg,rgba(37,99,235,0.12),transparent_42%,rgba(15,23,42,0.35))]" />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#0055ff]/10 blur-3xl dark:bg-[#0055ff]/20" />

                <div className="relative flex h-full flex-col gap-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 transition-colors duration-300">
                        {industry.icon}
                      </div>

                      <div>
                        <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0055ff] ring-1 ring-[#0055ff]/10 dark:bg-white/10 dark:ring-white/10">
                          解决方案
                        </span>
                        <h3 className="mt-3 text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                          {industry.title}
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
                          {industry.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex min-w-[124px] flex-col rounded-2xl border border-gray-200/80 bg-white/70 px-4 py-3 text-left backdrop-blur-sm dark:border-white/10 dark:bg-white/5 md:text-right">
                      <span className="text-2xl lg:text-3xl font-bold text-[#0055ff]">
                        {industry.stats.value}
                      </span>
                      <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                        {industry.stats.label}
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {industry.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex h-full items-start gap-3 rounded-2xl border border-gray-200/70 bg-gray-50/80 px-4 py-4 backdrop-blur-sm transition-colors duration-300 group-hover:border-[#0055ff]/15 group-hover:bg-white/90 dark:border-white/8 dark:bg-white/5 dark:group-hover:bg-white/8"
                      >
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0055ff]/10 text-[#0055ff]">
                          <CheckCircle className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 border-t border-gray-200/70 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      支持标准化 API 接入、稳定清算链路与多场景支付扩展。
                    </p>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#0055ff] transition-all duration-300 hover:gap-3 hover:text-[#0044cc]">
                      了解方案
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* 产品优势展示 - Bento Grids布局 */}
        <section className="mb-16 lg:mb-24">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-flex items-center rounded-full border border-[#0055ff]/15 bg-[#0055ff]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0055ff]">
              Premium Advantages
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-[-0.03em] text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              用更稳健的底层能力支撑业务增长
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
              以银行级安全、高可用架构、极速处理与简单接入，为支付场景提供兼顾稳定性与效率的长期价值。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
            {/* 银行级安全 - 大格子 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-blue-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,246,255,0.92))] p-8 text-slate-900 shadow-[0_30px_90px_-40px_rgba(59,130,246,0.2)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] dark:text-white lg:row-span-2 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(191,219,254,0.55),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(239,246,255,0.86))] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,1))]" />
              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 transition-colors duration-300">
                  {PRODUCT_ADVANTAGES[0].icon}
                </div>

                <div className="max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600/80 dark:text-blue-200/80">
                    Security First
                  </p>
                  <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white lg:text-4xl">
                    {PRODUCT_ADVANTAGES[0].title}
                  </h3>
                  <div className="mt-5 flex flex-col gap-2">
                    <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 lg:text-5xl">{PRODUCT_ADVANTAGES[0].stat}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">{PRODUCT_ADVANTAGES[0].statLabel}</span>
                  </div>
                  <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 lg:text-lg">
                    {PRODUCT_ADVANTAGES[0].description}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 border-t border-blue-100/80 pt-6 dark:border-white/10">
                  {PRODUCT_ADVANTAGES[0].features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-2xl border border-blue-100/80 bg-white/70 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                      <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.45)] dark:bg-cyan-300 dark:shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 高可用性 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/92 p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-white/5 lg:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,85,255,0.09),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_30%)]" />
              <div className="relative flex h-full items-start gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 transition-colors duration-300">
                  {PRODUCT_ADVANTAGES[1].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white lg:text-2xl">
                    {PRODUCT_ADVANTAGES[1].title}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#0055ff] lg:text-3xl">{PRODUCT_ADVANTAGES[1].stat}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[1].statLabel}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {PRODUCT_ADVANTAGES[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* 极速响应 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/92 p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-white/5 lg:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_30%)]" />
              <div className="relative flex h-full items-start gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 transition-colors duration-300">
                  {PRODUCT_ADVANTAGES[2].icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white lg:text-2xl">
                    {PRODUCT_ADVANTAGES[2].title}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 lg:text-3xl">{PRODUCT_ADVANTAGES[2].stat}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[2].statLabel}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {PRODUCT_ADVANTAGES[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* 简单集成 - 大格子 */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(248,250,252,0.92))] p-8 shadow-[0_25px_70px_-40px_rgba(0,85,255,0.18)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] lg:col-span-2 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(0,85,255,0.1),transparent_28%)] dark:bg-[radial-gradient(circle_at_right,rgba(59,130,246,0.16),transparent_28%)]" />
              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 transition-colors duration-300">
                    {PRODUCT_ADVANTAGES[3].icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0055ff]">
                      Integration Efficiency
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-gray-900 dark:text-white lg:text-3xl">
                      {PRODUCT_ADVANTAGES[3].title}
                    </h3>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-3xl font-bold text-[#0055ff] lg:text-4xl">{PRODUCT_ADVANTAGES[3].stat}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[3].statLabel}</span>
                    </div>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
                      {PRODUCT_ADVANTAGES[3].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-gray-200/70 pt-6 dark:border-white/10 sm:grid-cols-4">
                  {PRODUCT_ADVANTAGES[3].features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-gray-200/70 bg-white/80 px-4 py-4 text-center text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 合作伙伴展示 */}
        <section className="py-16 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="rounded-[2rem] border border-gray-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.2)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] lg:p-10">
              <span className="inline-flex items-center rounded-full border border-[#0055ff]/15 bg-[#0055ff]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0055ff]">
                Channel Partners
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-gray-900 dark:text-white sm:text-4xl">
                与主流支付渠道建立深度协同
              </h2>
              <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
                联合微信支付、支付宝、银联及国际支付渠道，兼顾本地化收款与全球业务扩展，提供稳定、合规、连续可用的支付能力。
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-200/80 bg-white/80 px-5 py-4 dark:border-white/10 dark:bg-white/5">
                  <div className="text-2xl font-bold text-[#0055ff]">8+</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">核心渠道</div>
                </div>
                <div className="rounded-2xl border border-gray-200/80 bg-white/80 px-5 py-4 dark:border-white/10 dark:bg-white/5">
                  <div className="text-2xl font-bold text-[#0055ff]">Global</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">场景覆盖</div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://merch.payphp.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0055ff] px-6 py-3 text-sm font-normal text-white shadow-lg shadow-[#0055ff]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0044cc]"
                >
                  <Rocket className="h-4 w-4" />
                  立即开通
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-normal text-gray-700 transition-colors hover:text-[#0055ff] dark:text-gray-200">
                  <Phone className="h-4 w-4" />
                  联系商务
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/90 p-5 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/20 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,85,255,0.08),transparent_32%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_32%)]" />
                  <div className="relative flex items-center justify-between gap-4">
                    <div>
                      <span className="text-base font-bold text-gray-700 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-200 dark:group-hover:text-white">
                        {partner.name}
                      </span>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
                        Payment Partner
                      </p>
                    </div>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-200/70 bg-white/85 shadow-sm transition-all duration-300 group-hover:scale-105 dark:border-white/10 dark:bg-white/10">
                      <div
                        className="text-gray-400 transition-colors duration-300 group-hover:text-[var(--brand-color)]"
                        style={{ '--brand-color': partner.color } as React.CSSProperties}
                      >
                        {partner.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 行动号召区域 */}
        <section className="mb-16 lg:mb-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(239,246,255,0.92))] px-8 py-10 text-slate-900 shadow-[0_30px_90px_-40px_rgba(59,130,246,0.18)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] dark:text-white lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(191,219,254,0.5),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.94),rgba(239,246,255,0.88))] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_26%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,1))]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 dark:opacity-15" />

            <div className="relative z-10 text-center">
              <span className="inline-flex items-center rounded-full border border-blue-100/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0055ff] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-cyan-200">
                Ready to Launch
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
                {CTA_CONFIG.title}
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-200 md:text-xl">
                {CTA_CONFIG.subtitle}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-300">
                {CTA_CONFIG.description}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {CTA_CONFIG.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-blue-100/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-100">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
                {CTA_CONFIG.buttons.map((button, index) => (
                  button.variant === "primary" ? (
                    <a
                      key={index}
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0055ff] px-6 py-3 text-sm font-normal text-white shadow-lg shadow-[#0055ff]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0044cc]"
                    >
                      <Play className="h-4 w-4" />
                      {button.text}
                    </a>
                  ) : (
                    <button
                      key={index}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-100/80 bg-white/80 px-6 py-3 text-sm font-normal text-slate-700 transition-all duration-300 hover:border-[#0055ff]/20 hover:text-[#0055ff] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#0055ff]"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {button.text}
                    </button>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 服务支持卡片 */}
        <section className="mt-12 lg:mt-16 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {SUPPORT_CARDS.map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/92 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/20 dark:border-white/10 dark:bg-white/5 lg:p-7"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,85,255,0.08),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_30%)]" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0055ff] to-[#3b82f6] shadow-lg shadow-[#0055ff]/20 transition-transform duration-300 group-hover:scale-105">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#0055ff] dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {card.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0055ff] transition-all duration-300 group-hover:gap-3">
                    <span>{card.linkText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 接入流程 */}
      <section className="py-16 lg:py-24">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="overflow-hidden rounded-[2rem] border border-gray-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] p-8 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.22)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] lg:p-10">
            {/* 标题区域 */}
            <div className="text-center mb-12 lg:mb-16">
              <span className="inline-flex items-center rounded-full border border-[#0055ff]/15 bg-[#0055ff]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0055ff]">
                Deployment Flow
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-gray-900 dark:text-white lg:text-5xl">接入流程</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">标准化服务流程，帮助您快速完成账户注册、认证签约与正式上线。</p>
              <div className="mt-8 flex justify-center">
                <a
                  href="https://merch.payphp.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#0055ff] to-[#3b82f6] px-8 py-3 text-base font-medium text-white shadow-lg shadow-[#0055ff]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#0055ff]/30 hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#0055ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Rocket className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative">立即接入</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* 流程步骤 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/90 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/20 dark:border-white/10 dark:bg-white/5 lg:p-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,85,255,0.08),transparent_32%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_32%)]" />
                  <div className="absolute -right-3 -top-3 text-8xl font-bold text-gray-100/70 dark:text-white/5 select-none pointer-events-none font-mono">
                    {step.id}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0055ff]/10 text-[#0055ff] transition-all duration-300 group-hover:bg-[#0055ff] group-hover:text-white">
                      <span className="text-lg font-bold">{step.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#0055ff] to-cyan-400 opacity-70" />
                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </section>
  );
};

export default Industry;
