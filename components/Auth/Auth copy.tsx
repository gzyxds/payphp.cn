"use client";
import { motion } from "framer-motion";

/**
 * PayPHP支付系统官网页面组件
 * 
 * 功能模块：
 * - Hero区：品牌展示和核心价值主张
 * - 核心功能区：系统特色功能展示
 * - 解决方案区：行业场景应用展示
 * - 技术优势区：性能数据可视化
 * - 客户案例区：用户评价展示
 * - 转化区：价格方案和CTA
 * 
 * 设计规范：
 * - 主色调：#0055ff（科技蓝）
 * - 响应式设计：支持移动端、平板、桌面端
 * - 动画效果：基于Framer Motion
 * - 主题支持：明暗主题切换
 */
const PaymentAuth = () => {
  
  // 核心功能数据
  const coreFeatures = [
    {
      icon: (
        <svg className="w-8 h-8 adaptive-dark-exclude" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
        </svg>
      ),
      title: "收款秒到账",
      description: "支持微信/支付宝/QQ/银联等多种方式，实时到账无延迟"
    },
    {
      icon: (
        <svg className="w-8 h-8 adaptive-dark-exclude" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
        </svg>
      ),
      title: "高并发处理",
      description: "无限API调用，确保交易安全，一秒内发起100个订单不掉单"
    },
    {
      icon: (
        <svg className="w-8 h-8 adaptive-dark-exclude" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"/>
        </svg>
      ),
      title: "微信云端",
      description: "独家UOS桌面版微信云端不会异地冻结，站长无需挂任何软件"
    },
    {
      icon: (
        <svg className="w-8 h-8 adaptive-dark-exclude" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14H7V16H9V14M13,14H11V16H13V14M17,14H15V16H17V14Z"/>
        </svg>
      ),
      title: "三重账单协议",
      description: "支付宝.微信三重账单协议稳定不频繁，多重防掉单保障"
    },
    {
      icon: (
        <svg className="w-8 h-8 adaptive-dark-exclude" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
        </svg>
      ),
      title: "多线程回调",
      description: "多线程Curl检测账单回调，效率提高上百倍，使用更舒适"
    },
    {
      icon: (
        <svg className="w-8 h-8 adaptive-dark-exclude" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"/>
        </svg>
      ),
      title: "免CK账单",
      description: "资金更安全更便捷，扫码自动配置支付宝账单监控"
    }
  ];

  // 场景解决方案数据
  const solutionScenarios = [
    {
      title: "电商支付",
      subtitle: "支持主流支付渠道，实时到账",
      description: "订单管理和营销分账一体化，资金流转安全高效",
      features: ["多渠道支付", "实时到账", "订单管理", "营销分账"],
      image: "/images/pay/ecommerce.svg"
    },
    {
      title: "游戏支付",
      subtitle: "手游端游页游一网打尽",
      description: "支持多种渠道，实时到账，提供安全便捷的支付方案",
      features: ["多游戏支持", "实时充值", "安全防护", "便捷接入"],
      image: "/images/pay/gaming.svg"
    },
    {
      title: "社交支付",
      subtitle: "全自动结算结佣实时到账",
      description: "接口接入简单轻松，覆盖直播社交，公会社交",
      features: ["自动结算", "实时结佣", "简单接入", "社交覆盖"],
      image: "/images/pay/social.svg"
    },
    {
      title: "动漫支付",
      subtitle: "支付接入门槛低",
      description: "到账速度实时及次日可选，覆盖网文小说，动漫文章",
      features: ["低门槛", "灵活到账", "内容覆盖", "简单集成"],
      image: "/images/pay/anime.svg"
    }
  ];

  // 技术优势数据
  const techAdvantages = [
    { label: "系统稳定性", value: "99.9%", suffix: "" },
    { label: "交易成功率", value: "99.8%", suffix: "" },
    { label: "平均响应时间", value: "50", suffix: "ms" },
    { label: "日处理订单", value: "100", suffix: "万+" },
    { label: "支持支付方式", value: "20", suffix: "+" },
    { label: "服务企业数量", value: "10000", suffix: "+" }
  ];

  // 客户案例数据
  const userCases = [
    {
      name: "张总",
      company: "某电商平台",
      comment: "PayPHP支付系统帮助我们解决了多渠道支付的难题，收款效率提升了300%，客户满意度大幅提升。"
    },
    {
      name: "李经理", 
      company: "游戏公司",
      comment: "系统稳定性非常好，从接入到现在半年时间，没有出现过任何支付故障，技术支持也很及时。"
    },
    {
      name: "王站长",
      company: "个人站长", 
      comment: "作为个人站长，PayPHP让我轻松实现了知识付费，操作简单，收益稳定，强烈推荐！"
    }
  ];

  /**
   * 主题切换功能
   * 在明暗主题间切换，并更新DOM类名
   */
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <>
      {/* 主题切换按钮 - 固定定位，支持键盘访问 */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={toggleTheme}
          className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
          aria-label="切换主题模式"
        >
          <svg 
            className="w-5 h-5 text-gray-800 dark:text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
              className="dark:hidden"
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              className="hidden dark:block"
            />
          </svg>
        </button>
      </div>

      {/* Hero区 - 品牌展示和核心价值主张 */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white pt-20 md:pt-28 lg:pt-32 xl:pt-36 pb-16 md:pb-20 lg:pb-24 xl:pb-28 dark:from-black dark:via-blue-950/20 dark:to-black overflow-hidden min-h-screen flex items-center">
        
        {/* 装饰性几何图形 - 科技简洁风格 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#0055ff]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0055ff]/3 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05]">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0055ff 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* 左侧：文案内容 */}
            <div className="text-center lg:text-left">
              {/* 品牌标识 */}
              <div className="inline-flex items-center gap-3 bg-[#0055ff]/10 text-[#0055ff] px-4 py-2 text-sm font-medium rounded-full border border-[#0055ff]/20 mb-6">
                <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
                PayPHP 支付系统
              </div>
              
              {/* 主标题 */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
                <span className="relative inline-block">
                  收款秒到账
                  <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#0055ff] to-[#0055ff]/50 rounded-full"></div>
                </span>
                <br />
                <span className="text-[#0055ff]">高并发处理</span>
              </h1>
              
              {/* 副标题 */}
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
                支持微信/支付宝/QQ/银联等多种方式，无限API调用，确保交易安全
              </p>
              
              {/* 功能标签 */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8">
                {['轻量级', '高并发', '多重防掉单', '拒绝掉单'].map((tag, index) => (
                  <span key={index} className="px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* CTA按钮组 */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="bg-[#0055ff] text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-[#0055ff]/90 transition-colors shadow-lg">
                  获取演示
                </button>
                <button className="border border-[#0055ff] text-[#0055ff] px-6 py-3 text-sm font-medium rounded-lg hover:bg-[#0055ff]/5 transition-colors">
                  购买源码
                </button>
                <button className="text-gray-600 dark:text-gray-300 px-4 py-3 text-sm font-medium hover:text-[#0055ff] transition-colors flex items-center justify-center gap-2">
                  联系客服
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 右侧：产品界面展示 */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                {/* 模拟产品界面 */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">PayPHP 控制台</h3>
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gradient-to-r from-[#0055ff] to-[#0055ff]/80 p-3 sm:p-4 rounded-lg text-white transform hover:scale-105 transition-transform duration-300">
                      <div className="text-lg sm:text-2xl font-bold">99.9%</div>
                      <div className="text-xs sm:text-sm opacity-90">系统稳定性</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-400 p-3 sm:p-4 rounded-lg text-white transform hover:scale-105 transition-transform duration-300">
                      <div className="text-lg sm:text-2xl font-bold">100万+</div>
                      <div className="text-xs sm:text-sm opacity-90">日处理订单</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { name: '微信支付', status: '在线' },
                      { name: '支付宝', status: '在线' },
                      { name: '银联支付', status: '在线' }
                    ].map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">{payment.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-500 font-medium text-xs sm:text-sm">{payment.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute -top-4 -right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-[#0055ff]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-green-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
       </section>

      {/* 2. 核心功能区 - 卡片式网格展示 */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          
          {/* 区块标题 */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 bg-[#0055ff]/10 text-[#0055ff] px-4 py-2 text-sm font-medium rounded-full border border-[#0055ff]/20 mb-6">
              <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
              系统特色
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              引领企业实现数字化、智能化转型
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              轻量级，高并发，多重防掉单协议，拒绝掉单！三网内置免挂免输云端全部走本地！
            </p>
          </div>

          {/* 功能卡片网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black p-6 sm:p-8 rounded-2xl border border-[rgba(221,226,233,1)] dark:border-gray-700 hover:border-[#0055ff]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0055ff]/10 hover:scale-105"
              >
                {/* 标题区域 - 图标在标题前面 */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center sm:justify-start">
                  <div className="text-[#0055ff] flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                
                {/* 描述内容 */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center sm:text-left">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA按钮组 - 参考Hero区按钮格式 */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="bg-[#0055ff] text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-[#0055ff]/90 transition-colors shadow-lg">
                立即体验功能
              </button>
              <button className="border border-[#0055ff] text-[#0055ff] px-6 py-3 text-sm font-medium rounded-lg hover:bg-[#0055ff]/5 transition-colors">
                查看详细文档
              </button>
              <button className="text-gray-600 dark:text-gray-300 px-4 py-3 text-sm font-medium hover:text-[#0055ff] transition-colors flex items-center justify-center gap-2">
                技术咨询
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 场景解决方案 - 交替式布局 */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          
          {/* 区块标题 */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 bg-[#0055ff]/10 text-[#0055ff] px-4 py-2 text-sm font-medium rounded-full border border-[#0055ff]/20 mb-6">
              <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
              行业解决方案
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              提供全行业的支付解决方案
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              覆盖电商、游戏、社交、动漫等多个垂直领域，为不同行业提供定制化支付解决方案
            </p>
          </div>

          {/* 场景卡片 */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {solutionScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* 文案内容 */}
                <div className={`text-center lg:text-left ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3 sm:mb-4 leading-tight">
                    {scenario.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-[#0055ff] font-medium mb-4 sm:mb-6">
                    {scenario.subtitle}
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                    {scenario.description}
                  </p>
                  
                  {/* 特性列表 - 两排两列布局 */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                    {scenario.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#0055ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm md:text-base leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA按钮组 - 参考Hero区按钮格式 */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <button className="bg-[#0055ff] text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-[#0055ff]/90 transition-colors shadow-lg">
                      获取方案
                    </button>
                    <button className="border border-[#0055ff] text-[#0055ff] px-6 py-3 text-sm font-medium rounded-lg hover:bg-[#0055ff]/5 transition-colors">
                      查看案例
                    </button>
                    <button className="text-gray-600 dark:text-gray-300 px-4 py-3 text-sm font-medium hover:text-[#0055ff] transition-colors flex items-center justify-center gap-2">
                      咨询专家
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* 场景可视化 */}
                <div className={`relative mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                    {/* 模拟场景界面 */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-black dark:text-white text-sm sm:text-base">{scenario.title}控制台</h4>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="bg-white dark:bg-gray-800 p-2.5 sm:p-3 rounded-lg">
                          <div className="text-base sm:text-lg font-bold text-[#0055ff]">98.5%</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">成功率</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-2.5 sm:p-3 rounded-lg">
                          <div className="text-base sm:text-lg font-bold text-green-500">实时</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">到账</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex items-center justify-between bg-white dark:bg-gray-800 p-2.5 sm:p-3 rounded-lg">
                            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">订单 #{item}001</span>
                            <span className="text-green-500 text-xs sm:text-sm font-medium">已完成</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* 装饰元素 */}
                  <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-[#0055ff]/10 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 技术优势区 - 数据可视化 */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#0055ff]/5 via-transparent to-[#0055ff]/5 dark:from-[#0055ff]/10 dark:to-[#0055ff]/10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          
          {/* 区块标题 */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 bg-[#0055ff]/10 text-[#0055ff] px-4 py-2 text-sm font-medium rounded-full border border-[#0055ff]/20 mb-6">
              <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
              技术优势
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              极致的性能体验，完善的安全保障
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              专业的技术支持，持续创新的产品理念，不断进化的系统功能，始终走在行业前沿
            </p>
          </div>

          {/* 数据指标网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {techAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg hover:shadow-[#0055ff]/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0055ff] mb-2">
                  {advantage.value}
                  <span className="text-xl sm:text-2xl">{advantage.suffix}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">
                  {advantage.label}
                </div>
              </motion.div>
            ))}
          </div>
         </div>
       </section>

      {/* 5. 用户案例区 - 客户评价展示 */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          
          {/* 区块标题 */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 bg-[#0055ff]/10 text-[#0055ff] px-4 py-2 text-sm font-medium rounded-full border border-[#0055ff]/20 mb-6">
              <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
              客户案例
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              超过10000+企业的信赖之选
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              从初创企业到行业巨头，PayPHP为各行各业提供稳定可靠的支付解决方案
            </p>
          </div>

          {/* 客户评价网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {userCases.map((userCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {/* 评分 */}
                <div className="flex items-center justify-center sm:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                    </svg>
                  ))}
                </div>
                
                {/* 评价内容 */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center sm:text-left text-sm sm:text-base">
                  "{userCase.comment}"
                </p>
                
                {/* 用户信息 */}
                <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#0055ff] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {userCase.name.charAt(0)}
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-black dark:text-white text-sm sm:text-base">{userCase.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{userCase.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 转化区 - 核心转化内容 */}
      <section style={{ backgroundColor: 'rgba(247,248,251, 1)' }} className="py-16 sm:py-20 md:py-24 lg:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          
          {/* 主转化标题区域 */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 text-center leading-tight"
            >
              立即开启您的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ff] to-[#0044cc] block sm:inline">
                支付之旅
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              轻量级 · 高并发 · 多重防掉单协议 · 拒绝掉单
            </motion.p>
            
            {/* 核心数据展示 - 卡片样式 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
            >
              {/* 企业选择卡片 */}
              <div 
                className="bg-white dark:bg-black p-4 sm:p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055ff] mb-2">10000+</div>
                <div className="text-gray-600 dark:text-gray-300 leading-normal text-xs sm:text-sm">企业选择</div>
              </div>
              
              {/* 系统稳定性卡片 */}
              <div 
                className="bg-white dark:bg-black p-4 sm:p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055ff] mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-300 leading-normal text-xs sm:text-sm">系统稳定性</div>
              </div>
              
              {/* 技术支持卡片 */}
              <div 
                className="bg-white dark:bg-black p-4 sm:p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055ff] mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-300 leading-normal text-xs sm:text-sm">技术支持</div>
              </div>
              
              {/* 快速集成卡片 */}
              <div 
                className="bg-white dark:bg-black p-4 sm:p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055ff] mb-2">3步</div>
                <div className="text-gray-600 dark:text-gray-300 leading-normal text-xs sm:text-sm">快速集成</div>
              </div>
            </motion.div>
          </div>
          
          {/* 系统核心优势 */}
          <section style={{ backgroundColor: 'rgba(247,248,251, 1)' }} className="py-16 sm:py-20 md:py-24 lg:py-32 dark:bg-gray-900">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left text-black dark:text-white leading-tight">为什么选择PayPHP？</h2>
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { 
                        icon: (
                          <svg className="w-5 sm:w-6 h-5 sm:h-6 adaptive-dark-exclude" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        ), 
                        title: "极速部署", 
                        desc: "3分钟完成系统部署，即刻开始收款" 
                      },
                      { 
                        icon: (
                          <svg className="w-5 sm:w-6 h-5 sm:h-6 adaptive-dark-exclude" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        ), 
                        title: "安全可靠", 
                        desc: "银行级安全防护，多重加密保障资金安全" 
                      },
                      { 
                        icon: (
                          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        ), 
                        title: "高性能", 
                        desc: "支持高并发处理，轻松应对业务高峰" 
                      },
                      { 
                        icon: (
                          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        ), 
                        title: "易维护", 
                        desc: "可视化管理界面，运维简单高效" 
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 sm:gap-4"
                      >
                        <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-[#0055ff]/10 dark:bg-[#0055ff]/20 rounded-lg flex items-center justify-center text-[#0055ff]">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-bold text-base sm:text-lg text-black dark:text-white">{item.title}</div>
                          <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl p-6 sm:p-8" style={{ border: '1px solid rgba(221, 226, 233, 1)' }}>
                    <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-black dark:text-white">系统核心优势</h2>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                      {[
                        "免挂免输", "云端本地", "自研协议", "无封号风险",
                        "一键配置", "实时监控", "自动轮训", "多重防护"
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 font-medium text-black dark:text-white hover:scale-105 transition-transform duration-200"
                          style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
         {/* 系统核心优势 */}

          {/* 价格方案 - 重点突出 */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 w-full text-center py-12 sm:py-16" style={{ backgroundColor: 'rgba(247,248,251, 1)', borderRadius: '16px' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 leading-tight">选择适合您的方案</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">灵活的合作方式，满足不同业务需求</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
              {/* 免费版 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black p-6 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">演示地址</h3>
                  <div className="text-gray-500 dark:text-gray-400 mb-2">体验版应用</div>
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4">￥0</div>
                  
                  {/* 特性列表 - 简化样式 */}
                  <div className="space-y-2 mb-6 text-left">
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff] adaptive-dark-exclude" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">前台地址：merchant.payphp.cn</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">演示后台：暂不开放</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">前后台账号：自行注册</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">前后台密码：自行注册</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href="https://merchant.payphp.cn/auth/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0055ff] text-white py-2 px-4 rounded-lg transition-colors hover:bg-[#0055ff]/90 text-center inline-block"
                    >
                      立即注册
                    </a>
                    <a
                      href="https://merchant.payphp.cn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0055ff]/10 text-[#0055ff] py-2 px-4 rounded-lg transition-colors hover:bg-[#0055ff]/20 text-center inline-block"
                    >
                      商户中心
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* 个人进阶版 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black p-6 rounded-xl transition-all duration-300 hover:shadow-md relative"
                style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
              >
                {/* 推荐标签 - 简化设计 */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0055ff] text-white px-3 py-1 rounded-full font-medium">
                  立即购买
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">单域名授权</h3>
                  <div className="text-gray-500 dark:text-gray-400 mb-2">个人/小型企业</div>
                  <div className="text-2xl font-bold text-[#0055ff] mb-4">￥998</div>
                  
                  {/* 特性列表 - 简化样式 */}
                  <div className="space-y-2 mb-6 text-left">
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">永久授权</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">上传即用</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">提供程序源码</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">自备服务器/域名</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">专属用户群</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href="https://wpa.qq.com/msgrd?v=3&uin=34831999&site=qq&menu=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0055ff] text-white py-2 px-4 rounded-lg transition-colors hover:bg-[#0055ff]/90 text-center inline-block"
                    >
                      联系客服
                    </a>
                    <a
                      href="https://www.payphp.cn/buy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0055ff]/10 text-[#0055ff] py-2 px-4 rounded-lg transition-colors hover:bg-[#0055ff]/20 text-center inline-block"
                    >
                      购买源码
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* 团队版 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black p-6 rounded-xl transition-all duration-300 hover:shadow-md relative"
                style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
              >
                {/* 推荐标签 - 简化设计 */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0055ff] text-white px-3 py-1 rounded-full font-medium">
                  立即购买
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">成为授权商</h3>
                  <div className="text-gray-500 dark:text-gray-400 mb-2">代理/分销/合作</div>
                  <div className="text-2xl font-bold text-[#0055ff] mb-4">￥2800</div>
                  
                  {/* 特性列表 - 简化样式 */}
                  <div className="space-y-2 mb-6 text-left">
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">赠送3个授权额度</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">可4折购买授权</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">可5折开通授权商</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">专属代理群</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#0055ff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>

                      <span className="text-gray-600 dark:text-gray-300">技术支持</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://wpa.qq.com/msgrd?v=3&uin=34831999&site=qq&menu=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0055ff] text-white py-2 px-4 rounded-lg transition-colors hover:bg-[#0055ff]/90 text-center inline-block"
                    >
                      联系客服
                    </a>
                    <a
                      href="https://www.payphp.cn/buy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0055ff]/10 text-[#0055ff] py-2 px-4 rounded-lg transition-colors hover:bg-[#0055ff]/20 text-center inline-block"
                    >
                      购买源码
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

          {/* 最终转化CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0055ff] to-[#0044cc] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
              还在犹豫？立即开始您的支付之旅！
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              加入10000+企业的选择，体验专业级支付解决方案
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="w-full sm:w-auto bg-white text-[#0055ff] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg" style={{ fontWeight: 500 }}>
                免费体验演示
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-[#0055ff] transition-colors" style={{ fontWeight: 500 }}>
                联系专属客服
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-blue-100">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                </svg>
                <span className="text-sm sm:text-base">7天免费试用</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                </svg>
                <span className="text-sm sm:text-base">专业技术支持</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                </svg>
                <span className="text-sm sm:text-base">1V1客服服务</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
             

      </>
    );
  };
  
  // 添加缺失的数据定义
  const userCases = [
    {
      name: "张总",
      company: "某电商平台",
      comment: "PayPHP支付系统帮助我们解决了多渠道支付的难题，收款效率提升了300%，客户满意度大幅提升。"
    },
    {
      name: "李经理",
      company: "游戏公司",
      comment: "系统稳定性非常好，从接入到现在半年时间，没有出现过任何支付故障，技术支持也很及时。"
    },
    {
      name: "王站长",
      company: "个人站长",
      comment: "作为个人站长，PayPHP让我轻松实现了知识付费，操作简单，收益稳定，强烈推荐！"
    }
  ];
  
  const pricingPlans = [
    {
      title: "体验版",
      price: "免费",
      suffix: "/7天",
      description: "适合个人开发者和小型项目",
      features: ["基础支付接口", "技术文档支持", "社区支持", "每日1000笔交易"],
      buttonText: "免费试用",
      popular: false
    },
    {
      title: "专业版",
      price: "¥2999",
      suffix: "/年",
      description: "适合中小企业和成长型业务",
      features: ["全功能支付接口", "7x24技术支持", "数据分析报表", "无交易限制"],
      buttonText: "立即购买",
      popular: true
    },
    {
      title: "企业版",
      price: "定制",
      suffix: "",
      description: "适合大型企业和定制需求",
      features: ["定制化开发", "专属客服", "私有化部署", "SLA保障"],
      buttonText: "联系销售",
      popular: false
    }
  ];
  
  export default PaymentAuth;