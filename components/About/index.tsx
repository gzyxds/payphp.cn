"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  // 线性图标渲染函数 - 统一设计风格，采用填充样式与 Industry 保持一致
  const renderIcon = (iconType: string, className: string = "w-6 h-6") => {
    const iconProps = {
      className,
      fill: "currentColor",
      viewBox: "0 0 24 24"
    };

    switch (iconType) {
      case "building":
        return (
          <svg {...iconProps}>
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
            <path d="M6 12h12"/>
            <path d="M6 16h12"/>
            <path d="M6 8h12"/>
          </svg>
        );
      case "certificate":
        return (
          <svg {...iconProps}>
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
          </svg>
        );
      case "solution":
        return (
          <svg {...iconProps}>
            <path d="M3,3H21V5H19V18A1,1 0 0,1 18,19H6A1,1 0 0,1 5,18V5H3V3M7,5V17H17V5H7M8,6H16V8H8V6M8,9H16V11H8V9M8,12H13V14H8V12Z"/>
          </svg>
        );
      case "chart":
        return (
          <svg {...iconProps}>
            <path d="M5,21L12,14L16,18L21,13V20A1,1 0 0,1 20,21H5M5,19V7A1,1 0 0,1 6,6H18A1,1 0 0,1 19,7V13L16,16L12,12L5,19Z"/>
          </svg>
        );
      case "trophy":
        return (
          <svg {...iconProps}>
            <path d="M7,4V2A1,1 0 0,1 8,1H16A1,1 0 0,1 17,2V4H20A1,1 0 0,1 21,5C21,5.5 20.5,6 20,6H19V19A2,2 0 0,1 17,21H7A2,2 0 0,1 5,19V6H4A1,1 0 0,1 3,5C3,4.5 3.5,4 4,4H7M9,3V4H15V3H9M7,6V19H17V6H7Z"/>
          </svg>
        );
      case "global":
        return (
          <svg {...iconProps}>
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A1,1 0 0,0 10,17H11V19.93M19.93,11H17V8A1,1 0 0,0 16,7H13V5A1,1 0 0,0 12,4A1,1 0 0,0 11,5V7H9L7.05,9H10A1,1 0 0,0 11,10V12A1,1 0 0,0 12,13H14A1,1 0 0,0 15,12V9A1,1 0 0,0 14,8H13V6H16V9H19.93C19.75,10.83 18.2,9.65 19.93,11Z"/>
          </svg>
        );
      case "lightbulb":
        return (
          <svg {...iconProps}>
            <path d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"/>
          </svg>
        );
      case "handshake":
        return (
          <svg {...iconProps}>
            <path d="M11,2A2,2 0 0,1 13,4V8H21A1,1 0 0,1 22,9V11A1,1 0 0,1 21,12H13V16A2,2 0 0,1 11,18H9A2,2 0 0,1 7,16V12H3A1,1 0 0,1 2,11V9A1,1 0 0,1 3,8H7V4A2,2 0 0,1 9,2H11M9,4V8H11V4H9M9,12V16H11V12H9Z"/>
          </svg>
        );
      case "rocket":
        return (
          <svg {...iconProps}>
            <path d="M13.13,22.19L11.5,18.36C13.07,17.78 14.54,17 15.9,16.09L13.13,22.19M5.64,12.5L1.81,10.87L7.91,8.1C7,9.46 6.22,10.93 5.64,12.5M21.61,2.39C21.61,2.39 16.66,3.85 15.28,5.23C14.78,5.73 14.78,6.53 15.28,7.03L16.97,8.72L15.28,10.41C14.78,10.91 14.78,11.71 15.28,12.21C15.78,12.71 16.58,12.71 17.08,12.21L18.77,10.52L20.46,12.21C20.96,12.71 21.76,12.71 22.26,12.21C22.76,11.71 22.76,10.91 22.26,10.41L20.57,8.72L22.26,7.03C22.76,6.53 22.76,5.73 22.26,5.23C20.88,3.85 21.61,2.39 21.61,2.39Z"/>
          </svg>
        );
      case "shield":
        return (
          <svg {...iconProps}>
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
          </svg>
        );
      default:
        return (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="10"/>
          </svg>
        );
    }
  };

  // 发展历程数据 - 企业级内容
  const milestones = [
    {
      year: "2020",
      title: "项目启动",
      description: "PayPHP项目正式启动，专注于PHP生态的支付解决方案",
      iconType: "building"
    },
    {
      year: "2021",
      title: "技术突破",
      description: "完成核心支付引擎开发，支持多种主流支付方式",
      iconType: "certificate"
    },
    {
      year: "2022",
      title: "生态建设",
      description: "构建完整的开发者生态，发布SDK和API文档",
      iconType: "solution"
    },
    {
      year: "2023",
      title: "用户增长",
      description: "服务开发者突破10万+，处理交易量达到百万级",
      iconType: "chart"
    },
    {
      year: "2024",
      title: "行业认可",
      description: "获得多项技术创新奖项，成为PHP支付领域标杆",
      iconType: "trophy"
    },
    {
      year: "2025",
      title: "国际化",
      description: "启动全球化战略，为全球PHP开发者提供支付服务",
      iconType: "global"
    }
  ];

  // 核心价值观数据 - 企业级表达
  const values = [
    {
      title: "开源精神",
      description: "拥抱开源文化，与全球开发者共同构建更好的支付生态",
      iconType: "lightbulb"
    },
    {
      title: "开发者优先",
      description: "始终以开发者体验为核心，提供简洁易用的API和工具",
      iconType: "handshake"
    },
    {
      title: "持续创新",
      description: "紧跟技术趋势，不断探索支付技术的边界和可能性",
      iconType: "rocket"
    },
    {
      title: "安全可靠",
      description: "将安全作为产品基石，为每一笔交易提供银行级保障",
      iconType: "shield"
    }
  ];

  // 荣誉奖项数据 - 企业级成就
  const awards = [
    { year: "2024", title: "GitHub开源项目年度之星" },
    { year: "2024", title: "PHP开发者大会最佳工具奖" },
    { year: "2024", title: "TechCrunch创新产品奖" },
    { year: "2023", title: "开源中国最受欢迎项目" },
    { year: "2023", title: "Stack Overflow开发者选择奖" },
    { year: "2022", title: "Packagist月度热门包" }
  ];

  // 核心团队成员数据
  const teamMembers = [
    {
      name: "张明",
      role: "创始人 & 首席技术官",
      avatar: "/images/team/avatar1.jpg",
      description: "拥有15年PHP开发经验，曾任职于阿里巴巴和腾讯，负责核心支付系统架构",
      social: {
        github: "https://github.com/zhangming",
        twitter: "https://twitter.com/zhangming"
      }
    },
    {
      name: "李华",
      role: "联合创始人 & 产品总监",
      avatar: "/images/team/avatar2.jpg",
      description: "前支付宝产品经理，精通支付流程设计和用户体验优化",
      social: {
        github: "https://payphp.cn/",
        twitter: "https://payphp.cn/"
      }
    },
    {
      name: "王强",
      role: "高级架构师",
      avatar: "/images/team/avatar3.jpg",
      description: "分布式系统专家，负责PayPHP的高可用架构和性能优化",
      social: {
        github: "https://github.com/wangqiang",
        twitter: "https://twitter.com/wangqiang"
      }
    },
    {
      name: "赵芳",
      role: "安全总监",
      avatar: "/images/team/avatar4.jpg",
      description: "网络安全专家，确保支付系统的安全性和合规性",
      social: {
        github: "https://github.com/zhaofang",
        twitter: "https://twitter.com/zhaofang"
      }
    }
  ];

  // 合作伙伴数据
  const partners = [
    { name: "阿里云", logo: "/images/partners/alicloud.svg" },
    { name: "腾讯云", logo: "/images/partners/tencentcloud.svg" },
    { name: "华为云", logo: "/images/partners/huaweicloud.svg" },
    { name: "百度云", logo: "/images/partners/baiducloud.svg" },
    { name: "京东云", logo: "/images/partners/jdcloud.svg" },
    { name: "七牛云", logo: "/images/partners/qiniucloud.svg" }
  ];

  // 技术栈数据
  const techStack = [
    { name: "PHP 8.2", icon: "php", percentage: 90 },
    { name: "Laravel", icon: "laravel", percentage: 85 },
    { name: "MySQL", icon: "mysql", percentage: 80 },
    { name: "Redis", icon: "redis", percentage: 75 },
    { name: "Docker", icon: "docker", percentage: 70 },
    { name: "Kubernetes", icon: "kubernetes", percentage: 65 }
  ];

  // 常见问题数据
  const faqs = [
    {
      question: "PayPHP支持哪些支付渠道？",
      answer: "PayPHP目前支持支付宝、微信支付、银联、PayPal、Stripe等国内外主流支付渠道，并且持续增加新的支付方式。"
    },
    {
      question: "如何快速集成PayPHP到我的项目中？",
      answer: "只需通过Composer安装PayPHP包，按照文档配置支付参数，几行代码即可完成集成。我们提供了详细的快速入门指南和示例代码。"
    },
    {
      question: "PayPHP的安全性如何保障？",
      answer: "PayPHP采用银行级安全标准，包括数据加密、签名验证、防重放攻击等多重安全机制，并通过了PCI DSS安全认证。"
    },
    {
      question: "是否提供企业级技术支持？",
      answer: "是的，我们为企业用户提供专业的技术支持服务，包括定制开发、性能优化、安全审计等，确保您的支付系统稳定可靠。"
    },
    {
      question: "PayPHP是否支持国际化支付？",
      answer: "支持，PayPHP设计之初就考虑了国际化需求，支持多币种结算、跨境支付、国际支付渠道对接等功能。"
    }
  ];

  return (
    <>
      {/* 现代化简洁设计 - 主色调 #0055ff，参考 Industry 组件布局 */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-20 md:py-24 lg:py-32 dark:from-black dark:via-blue-950/20 dark:to-black overflow-hidden">
        {/* 装饰性几何图形 - 保持简约 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 左上角装饰圆 */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#0055ff]/5 rounded-full blur-3xl"></div>
          {/* 右下角装饰圆 */}
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0055ff]/3 rounded-full blur-3xl"></div>
          {/* 网格装饰 */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05]">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0055ff 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

          {/* 英雄 - 左右布局设计，参考 Industry 组件 */}
          <div className="mt-20 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* 左侧：主标题和副标题 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  {/* 主标题前的小标签 */}
                  <div className="inline-flex items-center gap-2 bg-[#0055ff]/10 text-[#0055ff] px-3 py-1 text-xs font-medium border border-[#0055ff]/20 mb-4">
                    <div className="w-1.5 h-1.5 bg-[#0055ff] rounded-full"></div>
                    关于PayPHP
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
                    <span className="relative">
                      重新定义
                      {/* 标题装饰下划线 */}
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#0055ff] to-[#0055ff]/50 rounded-full"></div>
                    </span>
                    <br />
                    支付体验
                  </h1>

                  <div className="text-xl md:text-2xl text-[#0055ff] font-medium mb-6 flex items-center gap-3">
                     <div className="w-6 h-px bg-[#0055ff]"></div>
                     创新驱动未来
                   </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                    {['开源精神', '开发者优先', '持续创新', '安全可靠'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* 右侧：详细描述和特色功能 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  我们致力于打造下一代智能支付生态系统，通过创新技术让每一笔交易都变得简单、安全、高效。
                  专注于PHP生态的支付解决方案，为全球开发者提供专业的支付服务。
                </p>

                {/* 核心特色功能列表 - 两排两行布局 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 group">
                    <div className="mt-2 w-6 h-6 bg-[#0055ff]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#0055ff]/20 transition-colors">
                      <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors">技术创新</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">紧跟技术趋势，不断探索支付技术的边界</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-2 w-6 h-6 bg-[#0055ff]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#0055ff]/20 transition-colors">
                      <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors">开发者体验</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">始终以开发者体验为核心，提供简洁易用的API</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-2 w-6 h-6 bg-[#0055ff]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#0055ff]/20 transition-colors">
                      <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors">开源文化</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">拥抱开源文化，与全球开发者共同构建生态</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-2 w-6 h-6 bg-[#0055ff]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#0055ff]/20 transition-colors">
                      <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors">安全保障</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">将安全作为产品基石，为每一笔交易提供保障</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* 头部结束 */}

          {/* 发展历程区域 - 参考 Industry 组件的卡片设计 */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                发展历程
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-c-1390 mx-auto">
                从想法到现实，见证PayPHP如何改变PHP支付开发
              </p>
            </div>

            {/* 时间线卡片网格 - 白底灰边设计 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group">
                    {/* 白底灰边卡片设计 */}
                    <div className="bg-white border border-gray-200 p-8 h-full dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
                      {/* 顶部装饰条 */}
                      <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8"></div>

                      {/* 头部信息 */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff]">
                            {renderIcon(milestone.iconType, "w-6 h-6")}
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1">
                              {milestone.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {milestone.year}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 描述内容 */}
                      <div className="mb-8">
                        <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </div>

                      {/* 底部操作区域 */}
                      <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                        <div className="text-[#0055ff] text-sm md:text-base font-medium">
                          {milestone.year} 年
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 核心价值观区域 - 参考 Industry 组件设计 */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                核心理念
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-c-1390 mx-auto">
                我们的核心价值观指引着每一个决策和行动
              </p>
            </div>

            {/* 价值观卡片网格 - 白底灰边设计 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group">
                    {/* 白底灰边卡片设计 */}
                    <div className="bg-white border border-gray-200 p-8 h-full dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
                      {/* 图标区域 */}
                      <div className="mb-6">
                        <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff]">
                          {renderIcon(value.iconType, "w-6 h-6")}
                        </div>
                      </div>

                      {/* 内容区域 */}
                      <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 荣誉奖项区域 - 参考 Industry 组件设计 */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                社区认可
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-c-1390 mx-auto">
                我们获得的荣誉是对技术创新和服务质量的认可
              </p>
            </div>

            {/* 奖项卡片网格 - 白底灰边设计 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* 白底灰边奖项卡片 */}
                  <div className="bg-white border border-gray-200 p-8 dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
                    <div className="flex items-center gap-4">
                      {/* 奖杯图标 */}
                      <div className="w-10 h-10 bg-[#0055ff]/10 flex items-center justify-center text-[#0055ff] flex-shrink-0">
                        {renderIcon("trophy", "w-5 h-5")}
                      </div>

                      {/* 奖项信息 */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-[#0055ff] font-medium mb-1">
                          {award.year}
                        </div>
                        <div className="text-black dark:text-white font-medium text-sm leading-tight">
                          {award.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 团队介绍区域 */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                核心团队
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-c-1390 mx-auto">
                由行业专家组成的精英团队，致力于推动支付技术创新
              </p>
            </div>

            {/* 团队成员卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group">
                    {/* 成员卡片设计 */}
                    <div className="bg-white border border-gray-200 p-8 h-full dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
                      {/* 头像区域 */}
                      <div className="mb-6 flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-[#0055ff]/10 overflow-hidden relative">
                          <div className="absolute inset-0 flex items-center justify-center text-[#0055ff] text-2xl font-bold">
                            {member.name.charAt(0)}
                          </div>
                        </div>
                      </div>

                      {/* 个人信息 */}
                      <div className="text-center mb-4">
                        <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-[#0055ff] font-medium">
                          {member.role}
                        </p>
                      </div>

                      {/* 个人描述 */}
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6">
                        {member.description}
                      </p>

                      {/* 社交链接 */}
                      <div className="flex justify-center gap-4">
                        <a href={member.social.github} className="text-gray-500 hover:text-[#0055ff] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                        <a href={member.social.twitter} className="text-gray-500 hover:text-[#0055ff] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 合作伙伴区域 */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                合作伙伴
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-c-1390 mx-auto">
                解答您关心的问题，帮助您更好地了解PayPHP
              </p>
            </div>

            {/* 合作伙伴Logo展示 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white border border-gray-200 p-6 h-24 flex items-center justify-center dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
                    <div className="text-center">
                      <div className="text-lg font-medium text-gray-800 dark:text-gray-200">{partner.name}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 技术栈展示区域 */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                技术栈
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-c-1390 mx-auto">
                与行业领先企业携手，共同打造支付生态
              </p>
            </div>

            {/* 合作伙伴网格 - 两排两行布局 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-c-1390 mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#0055ff]/10 rounded-md flex items-center justify-center text-[#0055ff]">
                          <div className="w-3 h-3 bg-[#0055ff] rounded-sm"></div>
                        </div>
                        <span className="font-medium text-black dark:text-white">{tech.name}</span>
                      </div>
                      <span className="text-sm text-[#0055ff] font-medium">{tech.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#0055ff] h-full rounded-full"
                        style={{ width: `${tech.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 常见问题区域 */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                常见问题
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-c-1390 mx-auto">
                基于现代化技术栈，构建高性能、可扩展的支付系统
              </p>
            </div>

            {/* 技术栈进度条展示 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-c-1390 mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <div className="border border-gray-200 dark:border-gray-700">
                    <div className="p-6">
                      <div className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg font-medium text-black dark:text-white">{faq.question}</h3>
                        <div className="w-6 h-6 bg-[#0055ff]/10 rounded-full flex items-center justify-center text-[#0055ff]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="mt-4 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA区域 - 参考 Industry 组件设计 */}
          <div className="text-center">
            <div className="bg-white border border-gray-200 p-12 lg:p-16 dark:bg-black dark:border-gray-700">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">
                  加入PayPHP开发者社区
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-c-1390 mx-auto">
                  与全球10万+开发者一起，构建下一代支付应用
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-[#0055ff] text-white px-10 py-4 text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#0055ff]/90">
                    开始使用
                  </button>
                  <button className="border border-[#0055ff] text-[#0055ff] px-10 py-4 text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#0055ff] hover:text-white">
                    查看文档
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
