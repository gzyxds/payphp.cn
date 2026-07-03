"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  CreditCard,
  Shield,
  Settings,
  Code,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  BookOpen,
  Heart,
  TrendingUp,
  Clock,
  Award,
  ShoppingCart,
  Rocket,
  Info,
  Play
} from "lucide-react";

/**
 * 产品中心组件
 * 展示产品功能亮点、应用场景和技术优势
 */
export default function Products() {

  // 功能亮点数据
  const features = [
    {
      id: "high-performance",
      icon: <Zap className="w-4 h-4" />,
      title: "高性能框架",
      description: "基于全新speedPHP框架开发，性能卓越，响应迅速"
    },
    {
      id: "multi-thread",
      icon: <Shield className="w-4 h-4" />,
      title: "多线程检测",
      description: "使用多线程Curl检测账单回调，效率提高上百倍"
    },
    {
      id: "multi-protocol",
      icon: <Globe className="w-4 h-4" />,
      title: "多协议支持",
      description: "支持多种支付最新协议，云端技术保障稳定运行"
    },
    {
      id: "customizable",
      icon: <Settings className="w-4 h-4" />,
      title: "高度可定制",
      description: "提供丰富的定制选项，满足不同业务需求"
    },
    {
      id: "api",
      icon: <Code className="w-4 h-4" />,
      title: "API接口",
      description: "提供完善的API接口，方便开发者集成支付功能"
    },
    {
      id: "plugin-dev",
      icon: <ShoppingCart className="w-4 h-4" />,
      title: "插件开发",
      description: "提供插件开发接口，方便开发者自定义支付功能"
    },
    {
      id: "ultra-performance",
      icon: <Smartphone className="w-4 h-4" />,
      title: "超高性能",
      description: "采用超高性能的 Go语言 和[ Vue + ElementUi +Vite]进行开发"
    },
    {
      id: "triple-protection",
      icon: <CheckCircle className="w-4 h-4" />,
      title: "三重防护",
      description: "三重防掉单技术，确保每笔交易安全可靠"
    }
  ];

  // 应用场景数据
  const scenarios = [
    {
      id: "knowledge-payment",
      title: "知识付费平台",
      description: "为内容创作者提供便捷的收费工具，支持多种支付方式，满足用户多样化支付需求。",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      badge: { label: "内容变现", sub: "一站式方案" },
      metrics: [
        { value: "30s", label: "快速接入" },
        { value: "99.9%", label: "到账率" }
      ],
      status: { users: "5,000+" },
      benefits: [
        { id: "multi-pay", label: "多种支付方式" },
        { id: "easy-tool", label: "便捷收费工具" },
        { id: "ux-optimize", label: "用户体验优化" }
      ]
    },
    {
      id: "online-education",
      title: "在线教育",
      description: "为在线教育机构提供稳定可靠的支付解决方案，保障学员支付体验。",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      badge: { label: "教育专属", sub: "稳定可靠" },
      metrics: [
        { value: "7×24h", label: "技术支持" },
        { value: "<100ms", label: "响应速度" }
      ],
      status: { users: "3,000+" },
      benefits: [
        { id: "stable", label: "稳定可靠" },
        { id: "payment-guarantee", label: "支付保障" },
        { id: "student-exp", label: "学员体验" }
      ]
    },
    {
      id: "operation-sponsorship",
      title: "运营赞助",
      description: "为各种运营活动提供赞助支付功能，简化赞助流程，提高赞助效率。",
      icon: <Heart className="w-5 h-5 text-blue-600" />,
      badge: { label: "灵活配置", sub: "高效转化" },
      metrics: [
        { value: "自定义", label: "赞助金额" },
        { value: "实时", label: "到账通知" }
      ],
      status: { users: "2,000+" },
      benefits: [
        { id: "simplify-process", label: "简化流程" },
        { id: "improve-efficiency", label: "提高效率" },
        { id: "flexible-config", label: "灵活配置" }
      ]
    }
  ];

  // 技术优势数据
  const techAdvantages = [
    {
      id: "performance",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "性能提升",
      value: "100+倍",
      description: "相比传统系统"
    },
    {
      id: "response-time",
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "响应时间",
      value: "<100ms",
      description: "毫秒级响应"
    },
    {
      id: "security",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "安全等级",
      value: "99.9%",
      description: "交易成功率"
    },
    {
      id: "service",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "服务保障",
      value: "24/7",
      description: "全天候支持"
    }
  ];

  // 服务保障数据
  const serviceGuarantees = [
    {
      id: "free-upgrade",
      title: "免费升级",
      description: "持续修复程序bug和更新功能，提供免费升级服务，让您永远享受最新的PaYphp2.0体验。",
      icon: <ArrowRight className="w-6 h-6 text-blue-600" />
    },
    {
      id: "after-sales",
      title: "售后无忧",
      description: "提供专属客服、售后技术、论坛等全方位的售后服务，确保您的正常使用体验。",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      id: "guarantee-service",
      title: "保障服务",
      description: "免费获取后期软件升级的新功能，无需额外付费。",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      id: "commercial-license",
      title: "商用授权",
      description: "购买商业授权后，获得PaYphp码支付商业使用授权，让您更加放心地使用。",
      icon: <Award className="w-6 h-6 text-blue-600" />
    }
  ];

  const paymentMethods = [
    { id: "alipay", icon: CreditCard, color: "bg-blue-500", title: "支付宝免挂", desc: "提升收银效率" },
    { id: "wechat", icon: Smartphone, color: "bg-green-500", title: "微信免挂", desc: "无需软件挂机" },
    { id: "qq", icon: Globe, color: "bg-yellow-500", title: "QQ钱包免挂", desc: "免签约个人支付" },
    { id: "unionquick", icon: Zap, color: "bg-purple-500", title: "云闪付", desc: "快捷支付体验" },
    { id: "unionpay", icon: CreditCard, color: "bg-red-500", title: "银联支付", desc: "安全便捷支付" },
    { id: "jd", icon: ShoppingCart, color: "bg-orange-500", title: "京东支付", desc: "电商支付方案" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* 1. Hero区域 - 系统简介（首屏核心展示） */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-blue-950/30 dark:via-gray-900 dark:to-slate-950/30 py-20 px-4 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100/40 dark:bg-slate-900/20 rounded-full blur-3xl"></div>
          <svg className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.02]" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-hero" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" className="text-gray-500 dark:text-gray-400" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
          </svg>
        </div>

        <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：核心信息区 */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 hover:scale-105 transition-transform duration-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60">
                    聚合免签
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 hover:scale-105 transition-transform duration-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60">
                    高性能
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 hover:scale-105 transition-transform duration-200 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60">
                    轻量化UI
                  </Badge>
                </div>

                <h1 className="flex items-center justify-center lg:justify-start text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <Image
                    src="/images/logo/logo-dark.svg"
                    alt="PaYphp码支付"
                    width={280}
                    height={70}
                    sizes="(max-width: 640px) 200px, 280px"
                    className="hidden dark:block w-full max-w-[200px] sm:max-w-[280px]"
                    priority
                  />
                  <Image
                    src="/images/logo/logo-light.svg"
                    alt="PaYphp码支付"
                    width={280}
                    height={70}
                    sizes="(max-width: 640px) 200px, 280px"
                    className="block dark:hidden w-full max-w-[200px] sm:max-w-[280px]"
                    priority
                  />
                </h1>

                <h2 className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200 font-semibold">
                  专为个人站长打造的聚合免签系统
                </h2>

                <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                  拥有卓越的性能和丰富的功能，用全新轻量化的界面UI，让您可以更加方便快捷地解决知识付费和运营赞助的难题。
                  基于高性能SpeedPHP+Layui+PearAdmin架构，提供实时监控和管理。
                </p>
              </div>

              {/* 行动按钮 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0055ff] text-white shadow-lg hover:bg-[#0055ff]/90" asChild>
                  <a href="https://merch.PaYphp.cn/user/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    立即体验
                  </a>
                </Button>
                <Button size="lg" variant="outline-primary" asChild>
                  <a href="/products" className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    了解更多
                  </a>
                </Button>
              </div>
            </div>

            {/* 右侧：简洁界面展示 */}
            <div className="relative">
              {/* 主要展示面板 - 简洁设计 */}
              <div className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm">
                {/* 面板标题 */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">PaYphp管理面板</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">一站式数据财务管理</p>
                </div>

                {/* 支付方式列表 - 响应式网格布局 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="p-3 sm:p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 rounded-lg border border-gray-100 dark:border-gray-700 active:scale-[0.98]">
                      <div className="flex flex-col items-center mb-2">
                        <div className={`w-8 h-8 ${method.color} rounded-lg flex items-center justify-center mb-2`}>
                          <method.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{method.title}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{method.desc}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center space-x-1 mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">在线</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 底部统计信息 */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="group cursor-default">
                      <div className="text-base font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">99.9%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">成功率</div>
                    </div>
                    <div className="group cursor-default">
                      <div className="text-base font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">&lt;1s</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">响应时间</div>
                    </div>
                    <div className="group cursor-default">
                      <div className="text-base font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">24/7</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">在线监控</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 功能亮点区 */}
      <section className="py-24 px-4 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              核心功能
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              PaYphp系统采用先进技术架构，为您提供卓越的支付解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-600"
              >
                {/* icon和标题并排显示 */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-[#0055ff] dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 应用场景区 - 参考Auth样式设计 */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
          {/* 区块标题 */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 bg-[#0055ff]/10 text-[#0055ff] px-4 py-2 text-sm font-medium rounded-full border border-[#0055ff]/20 mb-6">
              <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
              行业解决方案
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              应用场景
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              为不同规模的业务提供专业的支付解决方案，覆盖知识付费、在线教育、运营赞助等多个领域
            </p>
          </div>

          {/* 场景卡片 */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {scenarios.map((scenario, index) => (
              <div
                key={scenario.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* 文案内容 */}
                <div className={`text-center lg:text-left ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                    {scenario.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-[#0055ff] font-medium mb-4 sm:mb-6">
                    {scenario.badge.label}
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                    {scenario.description}
                  </p>

                  {/* 特性列表 - 两排两列布局 */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                    {scenario.benefits.map((benefit, featureIndex) => (
                      <div key={benefit.id} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#0055ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm md:text-base leading-tight">
                          {benefit.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA按钮 */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-[#0055ff] text-white shadow-lg hover:bg-[#0055ff]/90"
                      asChild
                    >
                      <a href="https://merch.PaYphp.cn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Rocket className="h-5 w-5" />
                        立即接入
                      </a>
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="lg"
                      asChild
                    >
                      <a href="/products" className="flex items-center gap-2">
                        <Info className="h-5 w-5" />
                        了解更多
                      </a>
                    </Button>
                  </div>
                </div>

                {/* 场景可视化 */}
                <div className={`relative mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
                    {/* 模拟场景界面 */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {scenario.icon}
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{scenario.title}控制台</h4>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {scenario.metrics.map((metric) => (
                          <div key={metric.label} className="bg-white dark:bg-gray-800 p-2.5 sm:p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                            <div className="text-base sm:text-lg font-bold text-[#0055ff]">{metric.value}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex items-center justify-between bg-white dark:bg-gray-800 p-2.5 sm:p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">订单 #{item}001</span>
                            <span className="text-green-500 text-xs sm:text-sm font-medium">已完成</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-2 mt-2 border-t border-gray-100 dark:border-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">已服务 {scenario.status.users} 用户</span>
                      </div>
                    </div>
                  </div>

                  {/* 装饰元素 */}
                  <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-[#0055ff]/10 rounded-full blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 技术优势/数据支撑区 */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
          {/* 标题区域 - 简洁设计 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              技术优势
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              基于先进技术架构，为您提供卓越的性能表现
            </p>
          </div>

          {/* 数据展示区域 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techAdvantages.map((advantage) => (
              <div
                key={advantage.id}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg w-fit mx-auto mb-4">
                  {advantage.icon}
                </div>

                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {advantage.value}
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {advantage.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 服务保障区 */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              服务保障
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              全方位的服务支持，让您使用无忧
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceGuarantees.map((guarantee) => (
              <div key={guarantee.id} className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 flex items-center gap-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                  {guarantee.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{guarantee.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 flex-shrink-0 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 行动转化区（CTA区域） - 现代化卡片式简约风格 */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
          {/* 主要CTA卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm">
            <div className="p-12 text-center">
              {/* 标题区域 */}
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  立即开始使用
                </h2>

                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  提升您的支付效率，解决知识付费和运营赞助难题
                </p>
              </div>

              {/* 按钮区域 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-[#0055ff] text-white shadow-lg hover:bg-[#0055ff]/90 dark:bg-blue-600 dark:hover:bg-blue-500"
                  asChild
                >
                  <a href="https://merch.PaYphp.cn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    点击购买
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline-primary"
                  asChild
                  className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <a href="https://merch.PaYphp.cn/user/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    观看演示
                  </a>
                </Button>
              </div>

              {/* 特性标签 */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">无需信用卡</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">快速部署</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">专业支持</span>
                </div>
              </div>
            </div>
          </div>

          {/* 辅助信息卡片 */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">安全可靠</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">银行级安全保障，数据加密传输</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">简单易用</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">5分钟快速接入，无需复杂配置</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">全天候支持</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">24/7技术支持，随时为您服务</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

