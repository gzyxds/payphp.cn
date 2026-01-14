"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Award,
  Layers,
  TrendingUp,
  Trophy,
  Globe,
  Lightbulb,
  Code2,
  Sparkles,
  ShieldCheck,
  Users,
  Rocket,
  Github,
  Twitter,
  ChevronDown
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  // 线性图标渲染函数 - 使用 Lucide React 图标库
  const renderIcon = (iconType: string, className: string = "w-6 h-6") => {
    const icons: Record<string, any> = {
      building: Building2,
      certificate: Award,
      solution: Layers,
      chart: TrendingUp,
      trophy: Trophy,
      global: Globe,
      lightbulb: Lightbulb,
      code: Code2,
      spark: Sparkles,
      shield: ShieldCheck,
      handshake: Users,
      rocket: Rocket,
    };

    const Icon = icons[iconType] || Building2;
    return <Icon className={className} />;
  };

  // 发展历程数据 - 企业级内容
  const milestones = [
    {
      year: "2020",
      title: "项目启动",
      description: "PaYphp项目正式启动，专注于PHP生态的支付解决方案",
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
      iconType: "code"
    },
    {
      title: "持续创新",
      description: "紧跟技术趋势，不断探索支付技术的边界和可能性",
      iconType: "spark"
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
        github: "https://PaYphp.cn/",
        twitter: "https://PaYphp.cn/"
      }
    },
    {
      name: "王强",
      role: "高级架构师",
      avatar: "/images/team/avatar3.jpg",
      description: "分布式系统专家，负责PaYphp的高可用架构和性能优化",
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
      question: "PaYphp支持哪些支付渠道？",
      answer: "PaYphp目前支持支付宝、微信支付、银联、PayPal、Stripe等国内外主流支付渠道，并且持续增加新的支付方式。"
    },
    {
      question: "如何快速集成PaYphp到我的项目中？",
      answer: "只需通过Composer安装PaYphp包，按照文档配置支付参数，几行代码即可完成集成。我们提供了详细的快速入门指南和示例代码。"
    },
    {
      question: "PaYphp的安全性如何保障？",
      answer: "PaYphp采用银行级安全标准，包括数据加密、签名验证、防重放攻击等多重安全机制，并通过了PCI DSS安全认证。"
    },
    {
      question: "是否提供企业级技术支持？",
      answer: "是的，我们为企业用户提供专业的技术支持服务，包括定制开发、性能优化、安全审计等，确保您的支付系统稳定可靠。"
    },
    {
      question: "PaYphp是否支持国际化支付？",
      answer: "支持，PaYphp设计之初就考虑了国际化需求，支持多币种结算、跨境支付、国际支付渠道对接等功能。"
    }
  ];

  return (
    <>
      {/* 现代化 Hero 设计 - 居中聚焦 + 沉浸式光效 */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* 背景装饰 - 动态光晕 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/40 via-blue-50/20 to-transparent dark:from-blue-900/20 dark:via-blue-950/10 rounded-[100%] blur-3xl opacity-60"></div>
          {/* 网格背景 */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0055ff 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* 左侧内容 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              {/* 顶部标签 */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                关于 PaYphp
              </div>

              {/* 主标题 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                重新定义
                <br />
                <span className="text-[#0055ff]">
                  支付体验
                </span>
              </h1>

              {/* 描述 */}
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                我们致力于打造下一代智能支付生态系统，通过创新技术让每一笔交易都变得简单、安全、高效。
                专注于 PHP 生态，为全球开发者提供专业的支付解决方案。
              </p>

              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                    创新驱动
                 </div>
                 <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
                    开源生态
                 </div>
                 <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1 h-4 bg-purple-500 rounded-full"></div>
                    安全可靠
                 </div>
              </div>
            </motion.div>

            {/* 右侧卡片展示 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: Code2, title: "技术创新", desc: "探索支付边界" },
                { icon: Users, title: "开发者优先", desc: "极致接入体验" },
                { icon: Github, title: "开源文化", desc: "共建繁荣生态" },
                { icon: ShieldCheck, title: "安全保障", desc: "金融级风控" }
              ].map((item, index) => (
                <div key={index} className="group relative p-5 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pb-20 pt-20 lg:pb-25 lg:pt-25 overflow-hidden">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* 发展历程区域 - 参考 Industry 组件的卡片设计 */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                发展历程
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-c-1390 mx-auto">
                从想法到现实，见证PaYphp如何改变PHP支付开发
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
                    <div className="bg-white border border-gray-200 p-8 h-full rounded-lg dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
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
                    <div className="bg-white border border-gray-200 p-8 h-full rounded-lg dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
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
                  <div className="bg-white border border-gray-200 p-8 rounded-lg dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
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
                    <div className="bg-white border border-gray-200 p-8 h-full rounded-lg dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
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
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={member.social.twitter} className="text-gray-500 hover:text-[#0055ff] transition-colors">
                          <Twitter className="w-5 h-5" />
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
                解答您关心的问题，帮助您更好地了解PaYphp
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
                  <div className="bg-white border border-gray-200 p-6 h-24 flex items-center justify-center rounded-lg dark:bg-black dark:border-gray-700 transition-all duration-300 hover:border-[#0055ff]/30">
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
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="p-6">
                      <div className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg font-medium text-black dark:text-white">{faq.question}</h3>
                        <div className="w-6 h-6 bg-[#0055ff]/10 rounded-full flex items-center justify-center text-[#0055ff]">
                          <ChevronDown className="w-4 h-4" />
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
            <div className="bg-white border border-gray-200 p-12 lg:p-16 rounded-lg dark:bg-black dark:border-gray-700">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">
                  加入PaYphp开发者社区
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-c-1390 mx-auto">
                  与全球10万+开发者一起，构建下一代支付应用
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-[#0055ff] text-white px-10 py-4 rounded-lg text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#0055ff]/90">
                    开始使用
                  </button>
                  <button className="border border-[#0055ff] text-[#0055ff] px-10 py-4 rounded-lg text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#0055ff] hover:text-white">
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
