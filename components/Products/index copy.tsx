"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Qrcode from "@/components/Qrcode";
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

/**
 * 产品数据接口定义
 * @interface Product
 * @property {string} id - 产品唯一标识
 * @property {string} title - 产品标题
 * @property {string} description - 产品描述
 * @property {string} category - 产品分类
 * @property {React.ReactNode} icon - 产品图标
 * @property {string} price - 产品价格
 * @property {string[]} features - 产品特性列表
 * @property {boolean} [popular] - 是否为热门产品
 */
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

/**
 * 产品数据集合
 * 包含所有支付相关产品信息
 */
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

/**
 * 提取所有产品分类并添加"全部"选项
 */
const categories = ["全部", ...Array.from(new Set(productData.map(product => product.category)))];

/**
 * 产品展示组件
 * 展示所有产品并支持按分类筛选
 */
const Products = () => {
  const [activeCategory, setActiveCategory] = useState("全部");

  // 根据当前选中分类筛选产品
  const filteredProducts = activeCategory === "全部" 
    ? productData 
    : productData.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      {/* 头部区域 - 产品介绍 */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded">
            企业级支付解决方案
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            产品与服务
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            提供全方位的支付解决方案，满足您的各种业务需求，助力企业数字化转型与业务增长
          </p>
        </div>

        {/* 核心数据展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
            <div className="text-gray-600 dark:text-gray-400">核心产品</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-600 dark:text-gray-400">服务可用性</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">技术支持</div>
          </div>
        </div>

        {/* CTA按钮区 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg font-medium"
            size="lg"
            onClick={() => window.open('https://merch.PaYphp.cn/', '_blank')}
          >
            立即接入
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Qrcode 
            qrcodeUrl="/images/about/weixin.png" 
            title="扫码联系客服"
            description="扫描二维码，获取最新产品资讯"
            buttonText="了解更多"
            buttonVariant="outline"
            buttonClassName="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-6 rounded-lg font-medium"
          />
        </div>
      </div>

      {/* 产品展示区域 */}
      <div className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              我们的产品
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              选择适合您业务需求的支付解决方案
            </p>
          </div>

          {/* 分类筛选器 */}
          <div className="mb-16 flex justify-center">
            <div className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 text-base font-medium transition-all duration-200 rounded-md ${
                    activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
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
              <Card key={product.id} className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {product.icon}
                    </div>
                    
                    {product.popular && (
                      <Badge className="bg-blue-600 text-white border-0">
                        热门
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {product.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
                      {product.price}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="border-t border-gray-100 dark:border-gray-800 pt-4">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    了解详情
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA区域 */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-blue-600 text-white border-0 overflow-hidden rounded-lg">
            <CardContent className="text-center py-12 px-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                需要定制化的支付解决方案？
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                我们的专业团队可以根据您的业务需求，提供量身定制的支付解决方案，助力您的业务增长。
              </p>
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 border-0 px-8 py-6 font-medium rounded-lg"
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