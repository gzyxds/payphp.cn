"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Shield, 
  Settings, 
  Code, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

// 产品数据类型定义
interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  price: string;
  features: string[];
  popular?: boolean;
}

// 示例产品数据
const productData: Product[] = [
  {
    id: "1",
    title: "企业支付解决方案",
    description: "为企业提供全面的支付处理服务，支持多种支付方式和货币",
    category: "支付",
    icon: <CreditCard className="w-5 h-5" />,
    price: "¥2,999/月起",
    features: ["多渠道支付", "实时交易监控", "自动对账", "定制化报表"],
    popular: true
  },
  {
    id: "2",
    title: "跨境电商支付",
    description: "专为跨境电商设计的支付解决方案，支持全球主流支付方式",
    category: "支付",
    icon: <Globe className="w-5 h-5" />,
    price: "¥3,999/月起",
    features: ["多币种结算", "汇率优化", "合规性保障", "低手续费"]
  },
  {
    id: "3",
    title: "智能风控系统",
    description: "基于AI的风险控制系统，实时监控交易风险，保障支付安全",
    category: "安全",
    icon: <Shield className="w-5 h-5" />,
    price: "¥5,999/月起",
    features: ["AI风险评估", "异常交易检测", "实时预警", "风险分析报告"]
  },
  {
    id: "4",
    title: "商户管理平台",
    description: "一站式商户管理解决方案，简化商户入驻和管理流程",
    category: "管理",
    icon: <Settings className="w-5 h-5" />,
    price: "¥1,999/月起",
    features: ["商户入驻", "账户管理", "结算管理", "数据分析"]
  },
  {
    id: "5",
    title: "支付API接口",
    description: "灵活易用的支付API接口，快速集成各类支付功能",
    category: "开发",
    icon: <Code className="w-5 h-5" />,
    price: "按调用次数计费",
    features: ["简单集成", "丰富文档", "开发者支持", "沙箱环境"]
  },
  {
    id: "6",
    title: "移动支付SDK",
    description: "为移动应用提供的支付SDK，支持iOS和Android平台",
    category: "开发",
    icon: <Smartphone className="w-5 h-5" />,
    price: "¥999/月起",
    features: ["快速集成", "安全加密", "用户体验优化", "多平台支持"]
  }
];

// 获取所有产品分类
const categories = ["全部", ...Array.from(new Set(productData.map(product => product.category)))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("全部");

  // 根据分类筛选产品
  const filteredProducts = activeCategory === "全部" 
    ? productData 
    : productData.filter(product => product.category === activeCategory);

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      {/* 几何背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#05f]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#05f]/5 rounded-full blur-2xl"></div>
      </div>

      {/* 头部区域 */}
      <div className="w-full bg-gray-50 dark:bg-gray-900/30 py-20 mb-16">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px]">
            
            {/* 左侧内容区域 */}
            <div className="space-y-8">
              {/* 顶部标签 */}
              <div className="inline-flex items-center bg-[#05f]/10 text-[#05f] px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-[#05f] rounded-full mr-2"></div>
                专业支付解决方案
              </div>

              {/* 主标题 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black dark:text-white tracking-tight leading-tight">
                产品与
                <span className="relative inline-block ml-3">
                  服务
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#05f] rounded-full"></div>
                </span>
              </h1>

              {/* 副标题 */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                提供全方位的支付解决方案，满足您的各种业务需求，
                助力企业数字化转型与业务增长
              </p>

              {/* 统计数据卡片 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-900/50 px-6 py-4 rounded-lg border border-gray-100 dark:border-gray-800 text-center">
                  <div className="text-2xl font-bold text-[#05f] mb-1">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">核心产品</div>
                </div>
                <div className="bg-white dark:bg-gray-900/50 px-6 py-4 rounded-lg border border-gray-100 dark:border-gray-800 text-center">
                  <div className="text-2xl font-bold text-[#05f] mb-1">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">服务可用性</div>
                </div>
                <div className="bg-white dark:bg-gray-900/50 px-6 py-4 rounded-lg border border-gray-100 dark:border-gray-800 text-center">
                  <div className="text-2xl font-bold text-[#05f] mb-1">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">技术支持</div>
                </div>
              </div>

              {/* 行动按钮 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#05f] hover:bg-[#05f]/90 text-white px-8 py-6 rounded-lg font-medium"
                  size="lg"
                >
                  立即体验
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-8 py-6 rounded-lg font-medium"
                  size="lg"
                >
                  了解更多
                </Button>
              </div>
            </div>

            {/* 右侧视觉区域 */}
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-[#05f]/5 rounded-full blur-3xl scale-110"></div>
                
                {/* 产品卡片堆叠效果 */}
                <div className="relative space-y-4">
                  {/* 第一张卡片 */}
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#05f]/10 rounded-lg flex items-center justify-center text-[#05f] mr-3">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black dark:text-white">企业支付解决方案</h3>
                        <p className="text-sm text-gray-500">¥2,999/月起</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-[#05f] mr-2" />
                      多渠道支付支持
                    </div>
                  </div>

                  {/* 第二张卡片 */}
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-8">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#05f]/10 rounded-lg flex items-center justify-center text-[#05f] mr-3">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black dark:text-white">智能风控系统</h3>
                        <p className="text-sm text-gray-500">¥5,999/月起</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-[#05f] mr-2" />
                      AI风险评估
                    </div>
                  </div>

                  {/* 第三张卡片 */}
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 transform rotate-1 hover:rotate-0 transition-transform duration-300 mr-8">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#05f]/10 rounded-lg flex items-center justify-center text-[#05f] mr-3">
                        <Code className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black dark:text-white">支付API接口</h3>
                        <p className="text-sm text-gray-500">按调用次数计费</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-[#05f] mr-2" />
                      简单快速集成
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 relative z-10">
        {/* 产品分类选项卡 */}
        <div className="mb-16 flex justify-center">
          <div className="inline-flex bg-gray-50 dark:bg-gray-900/30 p-1 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-10 py-2.5 text-base font-medium transition-all duration-200 rounded-full ${
                  activeCategory === category 
                  ? 'bg-[#05f] text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 产品卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <Card className="group relative h-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-black overflow-hidden transition-all duration-300 hover:border-[#05f]/30 dark:hover:border-[#05f]/30 rounded-xl">
                {/* 几何切片装饰 */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#05f]/5 transform rotate-45 translate-x-10 -translate-y-10"></div>
                
                {/* 热门标签 */}
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-[#05f] text-white border-0 text-xs font-medium">
                      热门
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  {/* 图标和分类 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-[#05f]/10 rounded-lg flex items-center justify-center text-[#05f]">
                      {product.icon}
                    </div>
                    <Badge variant="outline" className="text-xs bg-transparent border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-medium text-black dark:text-white mb-2">
                    {product.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* 功能特性列表 */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-[#05f] mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center w-full">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-600 dark:text-gray-400 hover:text-[#05f] dark:hover:text-[#05f] p-0 h-auto font-medium"
                    >
                      了解详情
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* 行动召唤区域 */}
        <div className="mt-16">
          <Card className="relative bg-[#05f] border-0 text-white overflow-hidden rounded-xl border border-[#05f]/20">
            {/* 几何装饰 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 transform rotate-45 translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 transform rotate-45 -translate-x-12 translate-y-12"></div>
            
            <CardContent className="relative z-10 text-center py-12 px-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                需要定制化的支付解决方案？
              </h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                我们的专业团队可以根据您的业务需求，提供量身定制的支付解决方案，助力您的业务增长。
              </p>
              <Button 
                className="bg-white text-[#05f] hover:bg-gray-50 border-0 px-8 py-6 font-medium rounded-lg"
                size="lg"
              >
                联系我们了解更多
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;