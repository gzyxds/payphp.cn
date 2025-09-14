"use client";

/**
 * 行业数据配置
 * 定义支付行业的各个领域信息，包括图标、标题、统计数据和特性
 */
const INDUSTRY_DATA = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,6V8H3V6H21M3,18V16H21V18H3M3,13H8V11H3V13M10,13H15V11H10V13M17,13H22V11H17V13Z"/>
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5M17,17H7V15H17V17M17,13H7V11H17V13M17,9H7V7H17V9Z"/>
        </svg>
      ),
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
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "接口安全",
    subtitle: "稳定传输",
    description: "采用国内服务器，接口稳定传输，给顾客快速流畅的体验，安全可靠的服务您的每一笔订单",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "费率超低",
    subtitle: "直接到账",
    description: "接口渠道直接到自己账户，省去中间商赚差价，因此我们可以给商户提供更低廉的费率",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "资金保障",
    subtitle: "安全加密",
    description: "商户订单信息，全部加密处理，专业技术24小时实时运维，您的帐户安全将得到充分的保障",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "REST API",
    subtitle: "完善接口",
    description: "提供了完善的API接口，你可以用于平台应用通道接入，开发各种系统的对接通道插件等",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"/>
      </svg>
    )
  },

  {
    id: 6,
    title: "拒绝资金流",
    subtitle: "安全保障",
    description: "只负责交易处理不参与资金清算，资金全都实时到您的个人账户上，以此来保障您的资金安全",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1L13.5,2.5L16.17,5.17L10.58,10.76C10.22,10.54 9.82,10.4 9.39,10.4C7.99,10.4 6.86,11.53 6.86,12.93C6.86,14.33 7.99,15.46 9.39,15.46C10.79,15.46 11.92,14.33 11.92,12.93C11.92,12.5 11.78,12.1 11.56,11.74L17.15,6.15L19.83,8.83L21,9M4.93,5.82C3.08,5.82 1.6,7.3 1.6,9.15C1.6,11 3.08,12.48 4.93,12.48C6.78,12.48 8.26,11 8.26,9.15C8.26,7.3 6.78,5.82 4.93,5.82M15.5,13C15.5,15.21 13.71,17 11.5,17C9.29,17 7.5,15.21 7.5,13C7.5,10.79 9.29,9 11.5,9C13.71,9 15.5,10.79 15.5,13Z"/>
      </svg>
    )
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
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
      </svg>
    )
  },
  {
    title: "实时监控",
    description: "全链路性能监控与智能告警系统",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3,3H21V5H19V18A1,1 0 0,1 18,19H6A1,1 0 0,1 5,18V5H3V3M7,5V17H17V5H7M8,6H16V8H8V6M8,9H16V11H8V9M8,12H13V14H8V12Z"/>
      </svg>
    )
  },
  {
    title: "弹性扩容",
    description: "自动伸缩应对业务峰值，成本优化",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,18.5C16.14,18.5 19.5,15.14 19.5,11C19.5,6.86 16.14,3.5 12,3.5C7.86,3.5 4.5,6.86 4.5,11C4.5,15.14 7.86,18.5 12,18.5M12,2A9,9 0 0,1 21,11C21,16.04 16.04,21 11,21C5.96,21 1,16.04 1,11A9,9 0 0,1 12,2M8,11A2,2 0 0,1 10,9A2,2 0 0,1 12,11A2,2 0 0,1 10,13A2,2 0 0,1 8,11M14,11A2,2 0 0,1 16,9A2,2 0 0,1 18,11A2,2 0 0,1 16,13A2,2 0 0,1 14,11Z"/>
      </svg>
    )
  }
];

/**
 * 支付行业页面组件
 * 展示企业级支付解决方案的各个行业应用场景
 */
const Industry = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white py-16 md:py-20 lg:py-24 dark:from-black dark:via-blue-950/20 dark:to-black overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#0055ff]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0055ff]/3 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0055ff 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

          {/* 英雄区 */}
        <header className="mt-8 md:mt-12 lg:mt-16 mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* 左侧：主标题区域 */}
            <div className="text-center lg:text-left">
              {/* 服务商标识 */}
              <div className="inline-flex items-center gap-2 bg-[#0055ff]/10 text-[#0055ff] px-3 py-1.5 text-xs font-medium border border-[#0055ff]/20 rounded-full mb-6">
                <div className="w-1.5 h-1.5 bg-[#0055ff] rounded-full" />
                专业支付服务商
              </div>

              {/* 主标题 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
                <span className="relative inline-block">
                  企业级支付
                  <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-[#0055ff] to-[#0055ff]/50 rounded-full" />
                </span>
                <br />
                解决方案
              </h1>

              {/* 副标题 */}
              <div className="text-lg md:text-xl text-[#0055ff] font-medium mb-6 flex items-center justify-center lg:justify-start gap-3">
                <div className="w-6 h-px bg-[#0055ff]" />
                多行业覆盖
              </div>

              {/* 行业标签 */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                {['电商支付', '游戏支付', '社交支付', '内容支付'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

              {/* 右侧：产品描述和核心特性 */}
            <div className="text-center lg:text-left">
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                统一的API和SDK，集成多环节应用的接口，简化商户对接流程。专业支持合规电商，游戏，内容，社交等多种数娱行业，为企业提供安全、稳定、高效的支付服务。
              </p>

              {/* 核心特性列表 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "统一接入标准", desc: "一套API覆盖所有支付场景，降低开发成本" },
                  { title: "多渠道支持", desc: "支持银行卡、第三方支付、数字钱包等多种支付方式" },
                  { title: "合规保障", desc: "符合PCI DSS标准，确保交易数据安全合规" },
                  { title: "实时结算", desc: "T+0实时到账，提升资金周转效率" }
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3 group">
                    <div className="mt-1.5 w-6 h-6 bg-[#0055ff]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                      <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors duration-200">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>
        {/* 英雄区结束 */}


        {/* 核心统计数据展示 */}
        <section className="mb-16 lg:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {CORE_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 p-6 md:p-8 text-center dark:bg-black dark:border-gray-700"
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
                className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300"
              >
                {/* 图标和标题区域 */}
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

                {/* 描述内容 */}
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>

                {/* 装饰线 */}
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
                className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group"
              >
                {/* 装饰线 */}
                <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-6" />

                {/* 行业信息头部 */}
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

                  {/* 关键指标 */}
                  <div className="text-right flex-shrink-0">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0055ff]">
                      {industry.stats.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {industry.stats.label}
                    </div>
                  </div>
                </div>

                {/* 特性列表 */}
                <div className="space-y-3 mb-6">
                  {industry.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 bg-[#0055ff] rounded-full flex-shrink-0" />
                      <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 操作按钮 */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button className="text-[#0055ff] text-sm md:text-base font-medium hover:text-[#0055ff]/80 transition-colors duration-200">
                    了解详情 →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 技术优势展示 */}
        <section className="mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
              技术优势
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              基于云原生架构，提供稳定可靠的企业级支付服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TECH_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#0055ff] group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white group-hover:text-[#0055ff] transition-colors duration-200">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 行动号召区域 */}
        <section className="text-center bg-gradient-to-r from-[#0055ff] to-[#0066ff] p-8 md:p-12 lg:p-16 text-white rounded-lg">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
            开启您的数字化支付之旅
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto opacity-90">
            立即体验我们的专业支付解决方案，为您的业务增长提供强有力的支持
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-[#0055ff] px-6 lg:px-8 py-3 font-semibold hover:bg-gray-100 transition-colors rounded-md">
              免费试用
            </button>
            <button className="border-2 border-white text-white px-6 lg:px-8 py-3 font-semibold hover:bg-white hover:text-[#0055ff] transition-colors rounded-md">
              联系销售
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Industry;
