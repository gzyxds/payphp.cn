"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Qrcode from "@/components/Qrcode";
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
  Star,
  TrendingUp,
  Clock,
  Award,
  ShoppingCart
} from "lucide-react";

const Products = () => {
  const [activeTab, setActiveTab] = useState(0);

  // 功能亮点数据
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "高性能框架",
      description: "基于全新speedPHP框架开发，性能卓越，响应迅速"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "多线程检测",
      description: "使用多线程Curl检测账单回调，效率提高上百倍"
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "多协议支持",
      description: "支持多种支付最新协议，云端技术保障稳定运行"
    },
    {
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      title: "高度可定制",
      description: "提供丰富的定制选项，满足不同业务需求"
    },
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "API接口",
      description: "提供完善的API接口，方便开发者集成支付功能"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      title: "插件开发",
      description: "提供插件开发接口，方便开发者自定义支付功能"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "超高性能",
      description: "采用超高性能的 Go语言 和[ Vue + ElementUi +Vite]进行开发"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "三重防护",
      description: "三重防掉单技术，确保每笔交易安全可靠"
    }
  ];

  // 应用场景数据
  const scenarios = [
    {
      title: "知识付费平台",
      description: "为内容创作者提供便捷的收费工具，支持多种支付方式，满足用户多样化支付需求。",
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      benefits: ["多种支付方式", "便捷收费工具", "用户体验优化"]
    },
    {
      title: "在线教育",
      description: "为在线教育机构提供稳定可靠的支付解决方案，保障学员支付体验。",
      icon: <Users className="w-12 h-12 text-blue-600" />,
      benefits: ["稳定可靠", "支付保障", "学员体验"]
    },
    {
      title: "运营赞助",
      description: "为各种运营活动提供赞助支付功能，简化赞助流程，提高赞助效率。",
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      benefits: ["简化流程", "提高效率", "灵活配置"]
    }
  ];

  // 技术优势数据
  const techAdvantages = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "性能提升",
      value: "100+倍",
      description: "相比传统系统"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "响应时间",
      value: "<100ms",
      description: "毫秒级响应"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "安全等级",
      value: "99.9%",
      description: "交易成功率"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "服务保障",
      value: "24/7",
      description: "全天候支持"
    }
  ];

  // 服务保障数据
  const serviceGuarantees = [
    {
      title: "免费升级",
      description: "持续修复程序bug和更新功能，提供免费升级服务，让您永远享受最新的Payphp2.0体验。",
      icon: <ArrowRight className="w-6 h-6 text-blue-600" />
    },
    {
      title: "售后无忧",
      description: "提供专属客服、售后技术、论坛等全方位的售后服务，确保您的正常使用体验。",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: "保障服务",
      description: "免费获取后期软件升级的新功能，无需额外付费。",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "商用授权",
      description: "购买商业授权后，获得Payphp码支付商业使用授权，让您更加放心地使用。",
      icon: <Award className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero区域 - 系统简介（首屏核心展示） */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：核心信息区 */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    聚合免签
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    高性能
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    轻量化UI
                  </Badge>
                </div>

                <h1 className="flex items-center justify-center lg:justify-start text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {/* Logo图片 - 支持深色和浅色主题 */}
                  <Image
                    src="/images/logo/logo-dark.svg"
                    alt="Payphp码支付"
                    width={280}
                    height={70}
                    className="hidden dark:block"
                    priority
                  />
                  <Image
                    src="/images/logo/logo-light.svg"
                    alt="Payphp码支付"
                    width={280}
                    height={70}
                    className="block dark:hidden"
                    priority
                  />
                </h1>

                <h2 className="text-xl lg:text-2xl text-gray-600 font-medium">
                  专为个人站长打造的聚合免签系统
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  拥有卓越的性能和丰富的功能，用全新轻量化的界面UI，让您可以更加方便快捷地解决知识付费和运营赞助的难题。
                  基于高性能SpeedPHP+Layui+PearAdmin架构，提供实时监控和管理。
                </p>
              </div>

              {/* 行动按钮 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  立即体验
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  了解更多
                </Button>
              </div>
            </div>

            {/* 右侧：简洁界面展示 */}
            <div className="relative">
              {/* 主要展示面板 - 简洁设计 */}
              <div className="p-6">
                {/* 面板标题 */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">PaYphp管理面板</h3>
                  <p className="text-xs text-gray-500">一站式数据财务管理</p>
                </div>

                {/* 支付方式列表 - 三排三列网格布局 */}
                <div className="grid grid-cols-3 gap-2">
                  {/* 支付宝免挂 */}
                  <div className="p-3 hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-100">
                    <div className="flex flex-col items-center mb-2">
                      {/* 支付宝图标 */}
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                        <CreditCard className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 text-sm">支付宝免挂</h4>
                        <p className="text-xs text-gray-500">提升收银效率</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">在线</span>
                    </div>
                  </div>

                  {/* 微信免挂 */}
                  <div className="p-3 hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-100">
                    <div className="flex flex-col items-center mb-2">
                      {/* 微信图标 */}
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 text-sm">微信免挂</h4>
                        <p className="text-xs text-gray-500">无需软件挂机</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">在线</span>
                    </div>
                  </div>

                  {/* QQ钱包免挂 */}
                  <div className="p-3 hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-100">
                    <div className="flex flex-col items-center mb-2">
                      {/* QQ钱包图标 */}
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mb-2">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 text-sm">QQ钱包免挂</h4>
                        <p className="text-xs text-gray-500">免签约个人支付</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">在线</span>
                    </div>
                  </div>

                  {/* 云闪付 */}
                  <div className="p-3 hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-100">
                    <div className="flex flex-col items-center mb-2">
                      {/* 云闪付图标 */}
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mb-2">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 text-sm">云闪付</h4>
                        <p className="text-xs text-gray-500">快捷支付体验</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">在线</span>
                    </div>
                  </div>

                  {/* 银联支付 */}
                  <div className="p-3 hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-100">
                    <div className="flex flex-col items-center mb-2">
                      {/* 银联支付图标 */}
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mb-2">
                        <CreditCard className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 text-sm">银联支付</h4>
                        <p className="text-xs text-gray-500">安全便捷支付</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">在线</span>
                    </div>
                  </div>

                  {/* 京东支付 */}
                  <div className="p-3 hover:bg-gray-50 transition-all duration-300 rounded-lg border border-gray-100">
                    <div className="flex flex-col items-center mb-2">
                      {/* 京东支付图标 */}
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                        <ShoppingCart className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 text-sm">京东支付</h4>
                        <p className="text-xs text-gray-500">电商支付方案</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">在线</span>
                    </div>
                  </div>
                </div>

                {/* 底部统计信息 */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-base font-bold text-gray-800">99.9%</div>
                      <div className="text-xs text-gray-500">成功率</div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-gray-800">&lt;1s</div>
                      <div className="text-xs text-gray-500">响应时间</div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-gray-800">24/7</div>
                      <div className="text-xs text-gray-500">在线监控</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 功能亮点区（模块化展示） */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* 区域标题 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              核心功能亮点
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PaYphp系统采用先进技术架构，为您提供卓越的支付解决方案
            </p>
          </div>

          {/* 功能卡片网格 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group transition-all duration-300 hover:-translate-y-2 border border-gray-200 shadow-none">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-left">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 项目及技术应用场景区 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              多场景应用解决方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从个人创作者到企业级应用，Payphp码支付为不同规模的业务提供专业的支付解决方案
            </p>
          </div>

          <div className="space-y-16">
            {scenarios.map((scenario, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* 场景描述 */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {scenario.title}
                    </h3>
                    <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {scenario.description}
                  </p>

                  <div className="space-y-3">
                    {scenario.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      了解更多
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* 场景图示 - 重新设计的文案展示 */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-6">
                    {/* 标题区域 */}
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {scenario.title}解决方案
                      </h4>
                      <div className="w-12 h-0.5 bg-blue-600 mx-auto"></div>
                    </div>

                    {/* 核心价值展示 */}
                    <div className="space-y-3 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-blue-600 mb-1">
                          专业级
                        </div>
                        <div className="text-xs text-gray-600">
                          支付解决方案
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-50 rounded-lg p-2 text-center">
                          <div className="text-base font-semibold text-gray-900">
                            99.9%
                          </div>
                          <div className="text-xs text-gray-500">
                            系统稳定性
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2 text-center">
                          <div className="text-base font-semibold text-gray-900">
                            24/7
                          </div>
                          <div className="text-xs text-gray-500">
                            技术支持
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 特性列表 */}
                    <div className="space-y-1.5 mb-4">
                      {scenario.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* 底部状态 */}
                    <div className="border-t border-gray-100 pt-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-500">服务运行中</span>
                        </div>
                        <span className="text-gray-400">
                          已服务 10,000+ 用户
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 技术优势/数据支撑区 */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* 标题区域 - 简洁设计 */}
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              技术优势
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              基于先进技术架构，为您提供卓越的性能表现
            </p>
          </div>

          {/* 数据展示区域 - 简约卡片设计 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                {/* 图标区域 - 简化设计 */}
                <div className="mb-6 flex justify-center">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {advantage.icon}
                  </div>
                </div>

                {/* 核心数据 - 突出显示 */}
                <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {advantage.value}
                </div>

                {/* 标题 */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>

                {/* 描述文字 */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 服务保障区 */}
      <section className="py-12 px-4 bg-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              服务保障
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              全方位的服务支持，让您使用无忧
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceGuarantees.map((guarantee, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {guarantee.icon}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {guarantee.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 行动转化区（CTA区域） - 现代化卡片式简约风格 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* 主要CTA卡片 */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
            <div className="p-12 text-center">
              {/* 标题区域 */}
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  立即开始使用
                </h2>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  提升您的支付效率，解决知识付费和运营赞助难题
                </p>
              </div>

              {/* 按钮区域 */}
              <div className="flex gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                >
                  <span className="flex items-center">
                    点击购买
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  观看演示
                </Button>
              </div>

              {/* 特性标签 */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 font-medium">无需信用卡</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 font-medium">快速部署</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 font-medium">专业支持</span>
                </div>
              </div>
            </div>
          </div>

          {/* 辅助信息卡片 */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">安全可靠</h3>
              <p className="text-gray-600 text-sm">银行级安全保障，数据加密传输</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">简单易用</h3>
              <p className="text-gray-600 text-sm">5分钟快速接入，无需复杂配置</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">全天候支持</h3>
              <p className="text-gray-600 text-sm">24/7技术支持，随时为您服务</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
