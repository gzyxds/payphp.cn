"use client";

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
  LifeBuoy
} from "lucide-react";

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
 * 英雄区 - 企业级支付解决方案组件
 * 展示支付服务的核心功能、行业应用和技术优势
 */
const Industry = () => {
  // 网格背景渐变 - 用于英雄区全宽背景
  const gridGradient = `linear-gradient(to right, #0055ff 1px, transparent 1px), linear-gradient(to bottom, #0055ff 1px, transparent 1px)`;

  return (
    <section className="relative bg-white dark:bg-black">
      
      {/* 英雄区 - 独立全宽背景 */}
      <div className="relative">
        {/* 全宽网格背景 - 使用视口单位确保铺满整个英雄区域 */}
        <div 
          className="absolute inset-0 w-screen -ml-[50vw] left-[50vw] pointer-events-none"
          style={{
            backgroundImage: gridGradient,
            backgroundSize: '40px 40px',
            opacity: 0.06
          }}
        />
        
        {/* 英雄区内容 - 使用标准容器宽度 */}
        <div className="relative max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0 pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* 左侧标题区域 */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0055ff]/10 to-[#0055ff]/5 text-[#0055ff] px-4 py-2 text-sm font-semibold rounded-full border border-[#0055ff]/20">
                <div className="w-2 h-2 bg-[#0055ff] rounded-full animate-pulse" />
                专业支付服务商
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                  <span className="text-[#0055ff]">
                    PaYphp
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  企业级支付解决方案
                </h2>
              </div>

              <div className="flex items-center gap-3 text-lg md:text-xl text-gray-600 dark:text-gray-400">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[#0055ff] to-transparent" />
                多行业覆盖
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['电商支付', '游戏支付', '社交支付', '内容支付'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-[#0055ff] hover:text-[#0055ff] transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 右侧特性区域 */}
            <div className="space-y-8">
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                统一的API和SDK，集成多环节应用的接口，简化商户对接流程。专业支持合规电商，游戏，内容，社交等多种数娱行业，为企业提供安全、稳定、高效的支付服务。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {HERO_FEATURES.map((feature) => (
                  <div
                    key={feature.title}
                    className="group p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-[#0055ff]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-[#0055ff]/10 text-[#0055ff] rounded-lg group-hover:bg-[#0055ff]/20 group-hover:scale-110 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#0055ff] transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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

      {/* 主要内容区域 - 约束宽度 */}
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">

        {/* 核心统计数据展示 */}
        <section className="mb-16 lg:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {CORE_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 p-6 md:p-8 text-center rounded-lg dark:bg-black dark:border-gray-700"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0055ff] mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 核心功能设计 */}
        <section className="mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0055ff] dark:text-[#0055ff] mb-4">
              核心功能
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              全方位支付解决方案，满足不同业务场景需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CORE_FUNCTIONS.map((func) => (
              <div key={func.title} className="bg-white border border-gray-200 p-6 lg:p-8 rounded-lg dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                    {func.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors duration-200">
                      {func.title}
                    </h3>
                    <div className="text-xl md:text-2xl font-bold text-[#0055ff]">{func.stat}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{func.statLabel}</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {func.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <button className="mt-4 text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200">
                  {func.buttonText}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 服务优势展示 */}
        <section className="mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
              服务优势
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              专业的支付服务，为您的业务提供全方位保障
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICE_ADVANTAGES.map((advantage) => (
              <div
                key={advantage.id}
                className="bg-white border border-gray-200 p-6 lg:p-8 rounded-lg dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200 flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors duration-200">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-[#0055ff] font-medium">
                      {advantage.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-8 h-1 bg-gradient-to-r from-[#0055ff] to-[#0055ff]/50 rounded-full group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 行业解决方案展示 */}
        <section className="mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {INDUSTRY_DATA.map((industry) => (
              <article
                key={industry.id}
                className="bg-white border border-gray-200 p-6 lg:p-8 rounded-lg dark:bg-black dark:border-gray-700 group"
              >
                <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6" />

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black dark:text-white mb-1">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {industry.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0055ff]">
                      {industry.stats.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {industry.stats.label}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {industry.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0055ff] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button className="text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200">
                    了解更多 →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 产品优势展示 */}
        <section className="mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
              产品优势
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              为什么选择我们的支付解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PRODUCT_ADVANTAGES.map((advantage) => (
              <div key={advantage.title} className="bg-white border border-gray-200 p-6 lg:p-8 rounded-lg dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 p-3 bg-[#0055ff]/10 text-[#0055ff] rounded-xl group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                    {advantage.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#0055ff] transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl lg:text-3xl font-bold text-[#0055ff]">{advantage.stat}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{advantage.statLabel}</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {advantage.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#0055ff] rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 合作伙伴展示 */}
        <section className="mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
              合作伙伴
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              与主流支付渠道深度合作，提供全方位支付服务
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="bg-white border border-gray-200 p-6 rounded-lg dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div 
                    className="flex h-16 w-16 items-center justify-center rounded-xl text-white group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: partner.color }}
                  >
                    {partner.icon}
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-[#0055ff] transition-colors duration-300">
                    {partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 行动号召区域 */}
        <section className="mb-16 lg:mb-20">
          <div className="bg-gradient-to-r from-[#0055ff] to-[#0066ff] rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {CTA_CONFIG.title}
            </h2>
            <p className="text-lg md:text-xl mb-2 opacity-90">
              {CTA_CONFIG.subtitle}
            </p>
            <p className="text-base opacity-80 mb-8 max-w-2xl mx-auto">
              {CTA_CONFIG.description}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {CTA_CONFIG.tags.map((tag) => (
                <span key={tag} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              {CTA_CONFIG.buttons.map((button, index) => (
                button.variant === "primary" ? (
                  <a
                    key={index}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#0055ff] px-6 lg:px-8 py-2.5 lg:py-3 font-bold hover:bg-gray-100 transition-all duration-300 rounded-lg text-center inline-block"
                  >
                    {button.text}
                  </a>
                ) : (
                  <button
                    key={index}
                    className="border-2 border-white text-white px-6 lg:px-8 py-2.5 lg:py-3 font-semibold hover:bg-white hover:text-[#0055ff] transition-all duration-300 rounded-lg"
                  >
                    {button.text}
                  </button>
                )
              ))}
            </div>
          </div>
        </section>

        {/* 服务支持卡片 */}
        <section className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {SUPPORT_CARDS.map((card) => (
              <div key={card.title} className="bg-white rounded-lg transition-all duration-300 p-4 lg:p-6 border border-gray-100 hover:border-[#0055ff]/20 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#0055ff] to-[#0066ff] rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0055ff] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="flex items-center text-[#0055ff] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>{card.linkText}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Industry;