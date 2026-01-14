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
  LifeBuoy
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
 * Industry组件主函数
 *
 * 功能概述：
 * 展示支付服务在各个行业的应用解决方案，通过精心设计的布局展示
 * 核心功能、服务优势和行业特定解决方案。
 *
 * 布局结构：
 * 1. 英雄区域：包含标题、介绍、行业标签和特性卡片
 * 2. 统计数据区：展示关键业务指标
 * 3. 核心功能Bento Grids：使用不对称网格展示主要功能
 * 4. 服务优势区：卡片式布局展示服务特点
 * 5. 行业解决方案：网格布局展示各行业应用
 * 6. 产品优势Bento Grids：另一个Bento布局展示优势
 * 7. FAQ区域：常见问题解答
 *
 * 设计特点：
 * - 深色/浅色主题支持
 * - 完全响应式设计
 * - Bento Grids布局创造视觉层次感
 * - 渐变和动画效果增强用户体验
 *
 * 技术实现：
 * - 使用CSS Grid和Flexbox进行布局
 * - Tailwind CSS类名实现样式
 * - 动态背景渐变效果
 * - 条件渲染处理不同屏幕尺寸
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
                    className="group p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-[#0055ff]/30 transition-all duration-300"
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

        {/*
         * 核心功能展示区域 - Bento Grids布局实现
         *
         * 设计特点：
         * - 采用3列2行不对称网格布局，创造视觉层次感
         * - 左侧大格子(支付网关)跨2行，突出核心功能
         * - 右侧两个小格子(API文档、数据看板)分别占据1行
         * - 响应式设计：移动端自动调整为单列布局
         *
         * 视觉层次：
         * - 使用双重div结构创建边框和阴影效果
         * - 外层div负责圆角和阴影，内层div负责内容和背景
         * - 左侧大格子使用lg:rounded-l-4xl实现特殊圆角效果
         * - 移动端使用max-lg:rounded-t-4xl优化顶部显示
         *
         * 内容组织：
         * - 每个功能块包含图标、标题、统计数据、功能列表和操作按钮
         * - 使用flex布局确保内容垂直对齐和自适应
         * - 按钮采用不同的视觉样式区分主要/次要操作
         */}
        <section className="mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-center text-base/7 font-semibold text-[#0055ff] dark:text-[#0055ff] mb-2">
              核心能力
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl dark:text-white">
              全方位支付解决方案
            </p>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              满足不同业务场景需求，提供专业的支付服务
            </p>
          </div>

          {/*
           * Bento Grids主容器
           *
           * 网格配置：
           * - 默认：单列布局，适合移动设备
           * - lg断点：3列2行网格，创造不对称布局
           * - gap-4：格子间保持4单位间距
           *
           * 响应式行为：
           * - 移动端：自动堆叠为单列，保持垂直阅读顺序
           * - 桌面端：展开为3x2网格，实现Bento效果
           */}
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/*
             * 支付网关功能块 - Bento Grids主格子
             *
             * 布局特性：
             * - lg:row-span-2：在桌面端跨越2行，形成大格子
             * - 相对定位：为内部绝对定位元素提供参考
             *
             * 视觉设计：
             * - 双重div结构：外层负责边框/阴影，内层负责内容
             * - 圆角处理：外层使用标准圆角，内层计算精确圆角值
             * - 特殊处理：左侧使用lg:rounded-l-4xl增强视觉效果
             *
             * 内容结构：
             * - 顶部：图标+标题+统计数据的水平布局
             * - 中部：功能描述和功能列表
             * - 底部：主要操作按钮
             */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl dark:bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] p-8 lg:p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 p-4 bg-[#0055ff]/10 text-[#0055ff] rounded-xl">
                    {CORE_FUNCTIONS[0].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-3">
                      {CORE_FUNCTIONS[0].title}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl lg:text-4xl font-bold text-[#0055ff]">{CORE_FUNCTIONS[0].stat}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{CORE_FUNCTIONS[0].statLabel}</span>
                    </div>
                  </div>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  安全可靠的支付通道，支持多种支付方式，确保交易顺畅进行。采用分布式架构，保障99.9%的系统可用性。
                </p>

                <div className="grid grid-cols-1 gap-3 mb-8">
                  {CORE_FUNCTIONS[0].features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0055ff] rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-auto bg-gradient-to-r from-[#0055ff] to-[#0066ff] text-white px-6 py-3 rounded-lg font-medium hover:from-[#0055ff]/90 hover:to-[#0066ff]/90 transition-all duration-200 shadow-lg hover:shadow-xl">
                  {CORE_FUNCTIONS[0].buttonText}
                </button>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl dark:outline-white/15" />
            </div>

            {/*
             * API文档功能块 - Bento Grids右上小格子
             *
             * 定位特性：
             * - max-lg:row-start-1：在移动端作为第一行显示
             * - 默认占据1个网格单元，适合次要功能展示
             *
             * 响应式圆角：
             * - max-lg:rounded-t-4xl：移动端顶部大圆角
             * - 标准圆角：桌面端使用常规圆角
             *
             * 内容压缩：
             * - 减小图标和字体尺寸，适应小格子空间
             * - 功能列表使用2列网格，提高空间利用率
             * - 次要操作按钮使用边框样式，降低视觉重量
             */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl dark:bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-[#0055ff]/10 text-[#0055ff] rounded-lg">
                    {CORE_FUNCTIONS[1].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-2">
                      {CORE_FUNCTIONS[1].title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl lg:text-3xl font-bold text-[#0055ff]">{CORE_FUNCTIONS[1].stat}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{CORE_FUNCTIONS[1].statLabel}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      完善的开发文档和SDK支持，简化集成过程
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {CORE_FUNCTIONS[1].features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#0055ff] rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-auto text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200 border border-[#0055ff]/20 hover:border-[#0055ff]/40 px-4 py-2 rounded-lg">
                  {CORE_FUNCTIONS[1].buttonText}
                </button>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl dark:outline-white/15" />
            </div>

            {/*
             * 数据看板功能块 - Bento Grids右下小格子
             *
             * 网格定位：
             * - max-lg:row-start-3：移动端作为第三行显示
             * - lg:col-start-2 lg:row-start-2：桌面端定位到第2列第2行
             *
             * 布局策略：
             * - 与API文档功能块形成对角线布局，增强视觉平衡
             * - 使用标准圆角，保持与其他小格子的一致性
             *
             * 自适应容器：
             * - @container：启用容器查询，根据父容器尺寸调整布局
             * - flex flex-1：确保内容区域能够弹性扩展
             * - 功能列表使用2列网格，优化小空间内的内容展示
             */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-[#0055ff]/10 text-[#0055ff] rounded-lg">
                    {CORE_FUNCTIONS[2].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-2">
                      {CORE_FUNCTIONS[2].title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl lg:text-3xl font-bold text-[#0055ff]">{CORE_FUNCTIONS[2].stat}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{CORE_FUNCTIONS[2].statLabel}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      实时监控交易数据，提供全面的业务分析
                    </p>
                  </div>
                </div>

                <div className="@container flex flex-1 items-center max-lg:py-4 lg:pb-2">
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {CORE_FUNCTIONS[2].features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0055ff] rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-auto text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200 border border-[#0055ff]/20 hover:border-[#0055ff]/40 px-4 py-2 rounded-lg">
                  {CORE_FUNCTIONS[2].buttonText}
                </button>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 dark:outline-white/15" />
            </div>

            {/*
             * 智能风控功能块 - Bento Grids右侧大格子
             *
             * 布局特性：
             * - lg:col-start-3 lg:row-span-2：在桌面端位于第3列，跨越2行
             * - 相对定位：为内部绝对定位元素提供参考
             *
             * 视觉设计：
             * - 镜像对称：右侧使用lg:rounded-r-4xl，与左侧大格子形成对称
             * - 保持一致的阴影和边框效果
             */}
            <div className="relative lg:col-start-3 lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-4xl dark:bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(2rem+1px)] p-8 lg:p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 p-4 bg-[#0055ff]/10 text-[#0055ff] rounded-xl">
                    {CORE_FUNCTIONS[3].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-3">
                      {CORE_FUNCTIONS[3].title}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl lg:text-4xl font-bold text-[#0055ff]">{CORE_FUNCTIONS[3].stat}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{CORE_FUNCTIONS[3].statLabel}</span>
                    </div>
                  </div>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  全链路智能风控系统，通过AI算法实时识别风险交易，毫秒级响应，为您的资金安全保驾护航。
                </p>

                <div className="grid grid-cols-1 gap-3 mb-8">
                  {CORE_FUNCTIONS[3].features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0055ff] rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-auto bg-gradient-to-r from-[#0055ff] to-[#0066ff] text-white px-6 py-3 rounded-lg font-medium hover:from-[#0055ff]/90 hover:to-[#0066ff]/90 transition-all duration-200 shadow-lg hover:shadow-xl">
                  {CORE_FUNCTIONS[3].buttonText}
                </button>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-r-4xl dark:outline-white/15" />
            </div>
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
                className="bg-white border border-gray-200 p-6 lg:p-8 rounded-lg dark:bg-black dark:border-gray-700 group transition-all duration-300"
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

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <div className="w-8 h-1 bg-gradient-to-r from-[#0055ff] to-[#0055ff]/50 rounded-full group-hover:w-12 transition-all duration-300" />
                  <a
                    href="https://merch.PaYphp.cn/user/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#0055ff] hover:text-[#0044cc] flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    立即接入
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
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

        {/* 产品优势展示 - Bento Grids布局
            设计意图：
            1. 视觉层次：通过Bento Grids的不对称布局建立视觉重点，左侧大卡片和底部宽卡片承载核心信息。
            2. 字体排版：采用清晰的字体层级（Title > Stat > Description），使用不同字重和颜色区分。
            3. 响应式：移动端单列，桌面端3列，通过 grid-cols 和 row-span 控制。
            4. 交互：使用 ring-1 代替 outline 获得更细腻的边框效果。
        */}
        <section className="mb-16 lg:mb-24">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-center text-sm/7 font-bold uppercase tracking-wider text-[#0055ff] dark:text-[#0055ff] mb-3">
              核心优势
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-4xl font-extrabold tracking-tight text-balance text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              为什么选择我们
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* 银行级安全 - 大格子 */}
            <div className="group relative lg:row-span-2">
              <div className="absolute inset-px rounded-2xl bg-white lg:rounded-l-4xl dark:bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] lg:rounded-l-[calc(2rem+1px)] p-8 lg:p-10">
                <div className="flex flex-col gap-6 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#0055ff]/10 text-[#0055ff] rounded-xl">
                    {PRODUCT_ADVANTAGES[0].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                      {PRODUCT_ADVANTAGES[0].title}
                    </h3>
                    <div className="flex flex-col gap-1 mb-6">
                      <span className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0055ff]">{PRODUCT_ADVANTAGES[0].stat}</span>
                      <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[0].statLabel}</span>
                    </div>
                    <p className="text-base/7 lg:text-lg/8 text-gray-600 dark:text-gray-300">
                      {PRODUCT_ADVANTAGES[0].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  {PRODUCT_ADVANTAGES[0].features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0055ff] rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm border border-gray-200 lg:rounded-l-4xl dark:border-gray-800 z-10" />
            </div>

            {/* 高可用性 */}
            <div className="group relative">
              <div className="absolute inset-px rounded-2xl bg-white dark:bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] p-8 lg:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 p-3 bg-[#0055ff]/10 text-[#0055ff] rounded-xl">
                    {PRODUCT_ADVANTAGES[1].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {PRODUCT_ADVANTAGES[1].title}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl lg:text-3xl font-bold text-[#0055ff]">{PRODUCT_ADVANTAGES[1].stat}</span>
                      <span className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[1].statLabel}</span>
                    </div>
                    <p className="text-sm/6 text-gray-600 dark:text-gray-300">
                      {PRODUCT_ADVANTAGES[1].description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 z-10" />
            </div>

            {/* 极速响应 */}
            <div className="group relative">
              <div className="absolute inset-px rounded-2xl bg-white dark:bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] p-8 lg:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 p-3 bg-[#0055ff]/10 text-[#0055ff] rounded-xl">
                    {PRODUCT_ADVANTAGES[2].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {PRODUCT_ADVANTAGES[2].title}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl lg:text-3xl font-bold text-[#0055ff]">{PRODUCT_ADVANTAGES[2].stat}</span>
                      <span className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[2].statLabel}</span>
                    </div>
                    <p className="text-sm/6 text-gray-600 dark:text-gray-300">
                      {PRODUCT_ADVANTAGES[2].description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 z-10" />
            </div>

            {/* 简单集成 - 大格子 */}
            <div className="group relative lg:col-span-2 lg:rounded-r-4xl">
              <div className="absolute inset-px rounded-2xl bg-white lg:rounded-r-4xl dark:bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] lg:rounded-r-[calc(2rem+1px)] p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#0055ff]/10 text-[#0055ff] rounded-xl">
                    {PRODUCT_ADVANTAGES[3].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
                      {PRODUCT_ADVANTAGES[3].title}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl lg:text-4xl font-bold text-[#0055ff]">{PRODUCT_ADVANTAGES[3].stat}</span>
                      <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{PRODUCT_ADVANTAGES[3].statLabel}</span>
                    </div>
                    <p className="text-base/7 text-gray-600 dark:text-gray-300 max-w-2xl">
                      {PRODUCT_ADVANTAGES[3].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  {PRODUCT_ADVANTAGES[3].features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#0055ff] rounded-full flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm border border-gray-200 lg:rounded-r-4xl dark:border-gray-800 z-10" />
            </div>
          </div>
        </section>

        {/* 合作伙伴展示 */}
        <section className="py-16 lg:py-20 bg-white dark:bg-transparent">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                与主流支付渠道深度合作
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                我们与全球领先的支付机构建立了深度的合作伙伴关系，为您提供安全、稳定、高效的支付服务。无论您的用户身在何处，都能享受流畅的支付体验。
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="https://merch.payphp.cn/"
                  target="_blank"
                  className="rounded-md bg-[#0055ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0044cc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0055ff] transition-all duration-300"
                >
                  立即开通
                </a>
                <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#0055ff] transition-colors">
                  联系商务 <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-4 lg:mx-0 lg:max-w-none lg:pl-8">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/40 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-300 group cursor-default border border-gray-100/50 hover:border-gray-200/50 dark:border-white/5"
                >
                  <span className="text-base font-bold text-gray-600 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white transition-colors duration-300">
                    {partner.name}
                  </span>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white dark:bg-white/10 shadow-sm ring-1 ring-gray-900/5 group-hover:scale-110 transition-all duration-300">
                    <div
                      className="text-gray-400 group-hover:text-[var(--brand-color)] transition-colors duration-300"
                      style={{ '--brand-color': partner.color } as React.CSSProperties}
                    >
                      {partner.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        <section className="mt-12 lg:mt-16 mb-12 lg:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {SUPPORT_CARDS.map((card, index) => (
              <div
                key={card.title}
                className={`bg-white rounded-lg transition-all duration-300 p-4 lg:p-6 border border-gray-100 hover:border-[#0055ff]/20 group ${
                  index === 0 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
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

      {/* 接入流程 */}
      <section className="py-16 lg:py-24 bg-white dark:bg-white/5">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          {/* 标题区域 */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-[#0055ff]/10 rounded-full mb-4">
              <span className="text-[#0055ff] text-xs font-medium">快速部署</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">接入流程</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-lg">标准化服务流程，助您快速完成支付系统接入</p>
            <Button
              className="bg-[#0055ff] hover:bg-[#0044cc] text-white px-8 py-6 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              onClick={() => window.open('https://merch.payphp.cn/', '_blank')}
            >
              立即接入
            </Button>
          </div>

          {/* 流程步骤 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                {/* 序号水印 */}
                <div className="absolute -right-4 -top-4 text-9xl font-bold text-gray-100/50 dark:text-gray-700/50 select-none pointer-events-none font-mono">
                  {step.id}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#0055ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0055ff] transition-colors duration-300">
                    <span className="text-[#0055ff] font-bold text-lg group-hover:text-white transition-colors duration-300">{step.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <div className="w-8 h-1 bg-gray-100 dark:bg-gray-700 rounded-full mb-4 group-hover:bg-[#0055ff]/30 transition-colors duration-300"></div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Industry;
