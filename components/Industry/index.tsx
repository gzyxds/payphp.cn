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
        <header className="relative mt-8 md:mt-12 lg:mt-16 mb-16 lg:mb-20 overflow-hidden">
          {/* 英雄区背景装饰元素 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 科技网格背景 */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, #0055ff 1px, transparent 1px),
                    linear-gradient(180deg, #0055ff 1px, transparent 1px)
                  `,
                  backgroundSize: '60px 60px'
                }}
              />
            </div>

            {/* 动态几何装饰 */}
            <div className="absolute top-10 right-10 w-24 h-24 opacity-[0.08] dark:opacity-[0.15]">
              <div className="w-full h-full border-2 border-[#0055ff] rotate-45 animate-spin" style={{ animationDuration: '15s' }} />
              <div className="absolute top-2 left-2 w-20 h-20 border border-[#0055ff]/50 rotate-45" />
            </div>

            <div className="absolute bottom-16 left-8 w-16 h-16 opacity-[0.10] dark:opacity-[0.18]">
              <div className="w-full h-full border-2 border-[#0055ff] rounded-full animate-ping" style={{ animationDuration: '4s' }} />
              <div className="absolute top-1 left-1 w-14 h-14 border border-[#0055ff]/60 rounded-full" />
            </div>

            {/* 浮动科技粒子 */}
            <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-[#0055ff]/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#0055ff]/25 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#0055ff]/35 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
            <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-[#0055ff]/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.8s' }} />

            {/* 科技光束效果 */}
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#0055ff]/15 to-transparent opacity-40" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0055ff]/10 to-transparent opacity-30" />

            {/* 数据流线条 */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0055ff]/20 to-transparent opacity-50">
              <div className="absolute top-0 left-0 w-12 h-px bg-[#0055ff]/40 animate-pulse" style={{ animationDuration: '2.5s' }} />
            </div>
            <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#0055ff]/15 to-transparent opacity-40">
              <div className="absolute top-0 right-0 w-8 h-px bg-[#0055ff]/30 animate-pulse" style={{ animationDuration: '3s' }} />
            </div>

            {/* 科技边框装饰 */}
            <div className="absolute top-6 left-6 w-20 h-20 opacity-[0.12] dark:opacity-[0.20]">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0055ff]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0055ff]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0055ff]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0055ff]" />
            </div>

            <div className="absolute bottom-6 right-6 w-16 h-16 opacity-[0.10] dark:opacity-[0.18]">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0055ff]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0055ff]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0055ff]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0055ff]" />
            </div>

            {/* 动态光晕效果 */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#0055ff]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#0055ff]/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* 左侧：主标题区域 */}
            <div className="text-center lg:text-left">
              {/* 服务商标识 */}
              <div className="inline-flex items-center gap-2 bg-[#0055ff]/10 text-[#0055ff] px-3 py-1.5 text-xs font-medium border border-[#0055ff]/20 rounded-full mb-6">
                <div className="w-1.5 h-1.5 bg-[#0055ff] rounded-full" />
                专业支付服务商
              </div>

              {/* 主标题 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="relative inline-block text-[#0055ff] dark:text-[#0055ff]">
                  PaYphp
                  <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-[#0055ff] to-[#0055ff]/50 rounded-full" />
                </span>
                <br />
                <span className="text-black dark:text-white">
                  企业级支付解决方案
                </span>
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
            {/* 支付网关 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,8H4V6H20M20,18H4V12H20M22,18V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20C21.1,20 22,19.1 22,18Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors duration-200">
                    支付网关
                  </h3>
                  <div className="text-xl md:text-2xl font-bold text-[#0055ff]">99.9%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">成功率</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• 多渠道支付接入</li>
                <li>• 实时到账结算</li>
                <li>• 安全加密传输</li>
                <li>• 7×24小时监控</li>
              </ul>
              <button className="mt-4 text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200">
                立即接入 →
              </button>
            </div>

            {/* API文档 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors duration-200">
                    API文档
                  </h3>
                  <div className="text-xl md:text-2xl font-bold text-[#0055ff]">10+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">编程语言</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• RESTful API设计</li>
                <li>• 多语言SDK支持</li>
                <li>• 在线调试工具</li>
                <li>• 代码示例丰富</li>
              </ul>
              <button className="mt-4 text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200">
                查看文档 →
              </button>
            </div>

            {/* 数据看板 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,3H21V5H19V18A1,1 0 0,1 18,19H6A1,1 0 0,1 5,18V5H3V3M7,5V17H17V5H7M8,6H16V8H8V6M8,9H16V11H8V9M8,12H13V14H8V12Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors duration-200">
                    数据看板
                  </h3>
                  <div className="text-xl md:text-2xl font-bold text-[#0055ff]">实时</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">数据更新</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• 实时数据监控</li>
                <li>• 多维度报表</li>
                <li>• 自定义图表</li>
                <li>• 数据导出功能</li>
              </ul>
              <button className="mt-4 text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200">
                查看演示 →
              </button>
            </div>

            {/* 安全防护 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors duration-200">
                    安全防护
                  </h3>
                  <div className="text-xl md:text-2xl font-bold text-[#0055ff]">银行级</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">安全标准</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• SSL加密传输</li>
                <li>• 实名认证验证</li>
                <li>• 风险监控预警</li>
                <li>• 合规资质认证</li>
              </ul>
              <button className="mt-4 text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200">
                了解更多 →
              </button>
            </div>

            {/* 商户中心 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors duration-200">
                    商户中心
                  </h3>
                  <div className="text-xl md:text-2xl font-bold text-[#0055ff]">24h</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">客服支持</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• 账户余额管理</li>
                <li>• 交易记录查询</li>
                <li>• 自动对账功能</li>
                <li>• 提现结算服务</li>
              </ul>
              <button className="mt-4 text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200">
                进入中心 →
              </button>
            </div>

            {/* 消息通知 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 group-hover:text-[#0055ff] transition-colors duration-200">
                    消息通知
                  </h3>
                  <div className="text-xl md:text-2xl font-bold text-[#0055ff]">99.99%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">送达率</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• 异步消息推送</li>
                <li>• 重试机制保障</li>
                <li>• 签名验证安全</li>
                <li>• 多种通知方式</li>
              </ul>
              <button className="mt-4 text-[#0055ff] text-sm font-medium hover:text-[#0055ff]/80 transition-colors duration-200">
                配置通知 →
              </button>
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


        {/* 产品优势 */}
        <section className="mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
              产品优势
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              专业的技术团队，成熟的产品体系，为您提供最可靠的支付解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* 银行级安全 */}
            <div className="bg-white border border-gray-200 p-8 lg:p-10 dark:bg-black dark:border-gray-700 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200 rounded-xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#0055ff] transition-colors duration-200">
                    银行级安全
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl md:text-3xl font-bold text-[#0055ff]">99.99%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">安全保障</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                采用金融级安全标准，多重加密保护，确保每一笔交易的安全可靠
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  SSL/TLS加密传输
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  多重身份验证
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  实时风险监控
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  PCI DSS认证
                </div>
              </div>
            </div>

            {/* 高可用性 */}
            <div className="bg-white border border-gray-200 p-8 lg:p-10 dark:bg-black dark:border-gray-700 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200 rounded-xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17H13V11H11V17M11,9H13V7H11V9Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#0055ff] transition-colors duration-200">
                    高可用性
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl md:text-3xl font-bold text-[#0055ff]">99.9%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">系统可用性</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                7×24小时不间断服务，99.9%的系统可用性，保障您的业务持续运行
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  分布式架构
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  自动故障切换
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  负载均衡
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  实时监控告警
                </div>
              </div>
            </div>

            {/* 极速响应 */}
            <div className="bg-white border border-gray-200 p-8 lg:p-10 dark:bg-black dark:border-gray-700 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200 rounded-xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#0055ff] transition-colors duration-200">
                    极速响应
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl md:text-3xl font-bold text-[#0055ff]">&lt;100ms</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">响应时间</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                毫秒级响应速度，秒级到账结算，为用户提供极致的支付体验
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  毫秒级响应
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  秒级到账
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  智能路由
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  缓存优化
                </div>
              </div>
            </div>

            {/* 简单集成 */}
            <div className="bg-white border border-gray-200 p-8 lg:p-10 dark:bg-black dark:border-gray-700 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center bg-[#0055ff]/10 text-[#0055ff] group-hover:bg-[#0055ff]/20 transition-colors duration-200 rounded-xl">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#0055ff] transition-colors duration-200">
                    简单集成
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl md:text-3xl font-bold text-[#0055ff]">5分钟</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">快速集成</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                提供完整的SDK和API文档，5分钟快速集成，降低开发成本
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  RESTful API
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  多语言SDK
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  详细文档
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-[#0055ff] rounded-full" />
                  在线调试
                </div>
              </div>
            </div>
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

      {/*自定义插件 */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-1 sm:px-2 lg:px-3">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">支付插件系统</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-1">
              强大的插件生态系统，满足各类支付场景需求，轻松扩展您的支付功能
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* 插件头部信息 */}
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="text-[#0055ff] bg-blue-100 dark:bg-blue-900/30 p-1.5 sm:p-2 rounded-md flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">测试插件</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 sm:px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      v1.0.1
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">监控插件 - 由 PaYphp 开发</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <a href="https://payphp.cn" target="_blank" rel="noopener noreferrer" className="text-[#0055ff] hover:underline flex items-center gap-1 text-sm sm:text-base">
                    <span>开发者主页</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button className="bg-[#0055ff] hover:bg-[#0044cc] text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base w-full sm:w-auto">
                    安装插件
                  </button>
                </div>
              </div>
            </div>

            {/* 插件支持的支付通道和代码示例 */}
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
                {/* 左侧：支付通道信息 */}
                <div className="order-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">支持的支付通道</h4>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3 sm:p-4 bg-white dark:bg-gray-800">
                      <div className="flex justify-between items-center mb-2 sm:mb-3">
                        <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">测试插件</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">demo</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex-shrink-0">绑定支付方式:</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">支付宝</span>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">微信支付</span>
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">银行卡</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex-shrink-0">支持功能:</span>
                          <div className="flex flex-wrap gap-1">
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">接口上报</span>
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">解析上报</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 代码示例 */}
                  <div className="mt-3 sm:mt-4 bg-gray-900 dark:bg-gray-800 rounded-lg p-3 sm:p-4 overflow-x-auto">
                    <div className="text-xs text-gray-400 mb-2">支付回调示例</div>
                    <pre className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
{`-- 支付回调
function plugin.notify(request, orderInfo, params, pluginOptions)
    -- 失败返回
    return json.encode({
            error_code = 500,
            error_message = "签名校验失败"
        })
    -- 成功返回
    return json.encode({
        error_code = 200,
        error_message = "支付成功",
        response = "我是支付响应结果,用于输出给调用方,不填写则默认success",
    })
end`}
                    </pre>
                  </div>
                </div>

                {/* 右侧：定时任务代码示例 */}
                <div className="order-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">定时任务代码示例</h4>
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3 sm:p-4 overflow-x-auto">
                    <div className="text-xs text-gray-400 mb-2">Lua Script</div>
                    <pre className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
{`-- 订单创建使用此接口 pOrderInfo: 订单信息 pluginOptions: 用户配置的支付通道信息
内容格式为json
function plugin.create(pOrderInfo, pluginOptions, ...)
    return json.encode({
            -- 返回支付类型 可选项:pre(需要预处理 如需要微信先登录获取openId等)
            -- html(渲染html) qrcode(显示二维码) jump(跳转)
            type = "html",
            -- 返回二维码内容
            qrcode = "",
            -- jump 的url地址
            url = "",
            -- html content
            content = content,
            -- 返回错误码 200 为正确
            err_code = 200,
            -- 返回错误信息
            err_message = ""
        })
end`}
                    </pre>
                  </div>
                  <div className="mt-2 sm:mt-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="space-y-1">
                      <div>• <span className="font-medium">pAccountInfo:</span> 账号信息JSON字符串</div>
                      <div>• <span className="font-medium">pPluginOption:</span> 插件配置参数</div>
                      <div>• <span className="font-medium">crontabExtArgs:</span> 定时任务扩展参数</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 插件配置选项 */}
            <div className="p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">配置选项</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3 sm:p-4 bg-white dark:bg-gray-800">
                    <h5 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-2">通道选项</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">使用子账号模式</span>
                        <span className="text-green-500">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">使用递增金额规则</span>
                        <span className="text-green-500">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">使用二维码登录流程</span>
                        <span className="text-green-500">✓</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3 sm:p-4 bg-white dark:bg-gray-800">
                    <h5 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-2">自定义操作</h5>
                    <div className="space-y-2">
                      <button
                        onClick={() => {
                          if (typeof window !== 'undefined') {
                            window.confirm('是否需要唤醒？')
                          }
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md transition-colors text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>唤醒</span>
                      </button>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3 sm:p-4 bg-white dark:bg-gray-800 sm:col-span-2 lg:col-span-1">
                    <h5 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-2">全局配置</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">费率</span>
                        <span className="text-xs sm:text-sm text-gray-900 dark:text-white">0.15521</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">回调模式</span>
                        <span className="text-green-500">✓</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3 sm:p-4 bg-white dark:bg-gray-800">
                  <h5 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-2">定时任务</h5>
                  <div className="overflow-x-auto -mx-1">
                    <div className="inline-block min-w-full align-middle">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                          <tr>
                            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">名称</th>
                            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cron 表达式</th>
                            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">函数</th>
                            <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">范围</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          <tr>
                            <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 dark:text-white">银联检查账号状态</td>
                            <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono">*/15 * * * * *</td>
                            <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">check_account</td>
                            <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">account</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/*自定义插件 */}

        {/* 合作伙伴 */}
        <section className="mb-16 lg:mb-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
              合作伙伴
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              与行业领先企业建立深度合作关系，为用户提供更优质的支付体验
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8">
            {/* 微信支付 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg hover:border-[#0055ff]/30 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#07C160]/10 rounded-lg group-hover:bg-[#07C160]/20 transition-colors duration-200">
                <svg className="w-8 h-8 text-[#07C160]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5,5A6.5,6.5 0 0,1 15,11.5A6.5,6.5 0 0,1 8.5,18A6.5,6.5 0 0,1 2,11.5A6.5,6.5 0 0,1 8.5,5M8.5,7A4.5,4.5 0 0,0 4,11.5A4.5,4.5 0 0,0 8.5,16A4.5,4.5 0 0,0 13,11.5A4.5,4.5 0 0,0 8.5,7M15.5,7A6.5,6.5 0 0,1 22,13.5A6.5,6.5 0 0,1 15.5,20A6.5,6.5 0 0,1 9,13.5A6.5,6.5 0 0,1 15.5,7M15.5,9A4.5,4.5 0 0,0 11,13.5A4.5,4.5 0 0,0 15.5,18A4.5,4.5 0 0,0 20,13.5A4.5,4.5 0 0,0 15.5,9Z"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-black dark:text-white group-hover:text-[#07C160] transition-colors duration-200">
                微信支付
              </h3>
            </div>

            {/* 支付宝 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg hover:border-[#0055ff]/30 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#1677FF]/10 rounded-lg group-hover:bg-[#1677FF]/20 transition-colors duration-200">
                <svg className="w-8 h-8 text-[#1677FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M7,9H17V11H7V9M7,13H17V15H7V13Z"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-black dark:text-white group-hover:text-[#1677FF] transition-colors duration-200">
                支付宝
              </h3>
            </div>

            {/* 银联支付 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg hover:border-[#0055ff]/30 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#E60012]/10 rounded-lg group-hover:bg-[#E60012]/20 transition-colors duration-200">
                <svg className="w-8 h-8 text-[#E60012]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8H4V6H20M20,18H4V12H20M22,18V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20C21.1,20 22,19.1 22,18Z"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-black dark:text-white group-hover:text-[#E60012] transition-colors duration-200">
                银联支付
              </h3>
            </div>

            {/* QQ钱包 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg hover:border-[#0055ff]/30 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#12B7F5]/10 rounded-lg group-hover:bg-[#12B7F5]/20 transition-colors duration-200">
                <svg className="w-8 h-8 text-[#12B7F5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-black dark:text-white group-hover:text-[#12B7F5] transition-colors duration-200">
                QQ钱包
              </h3>
            </div>

            {/* 京东支付 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg hover:border-[#0055ff]/30 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#E1251B]/10 rounded-lg group-hover:bg-[#E1251B]/20 transition-colors duration-200">
                <svg className="w-8 h-8 text-[#E1251B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-black dark:text-white group-hover:text-[#E1251B] transition-colors duration-200">
                京东支付
              </h3>
            </div>

            {/* PayPal */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg hover:border-[#0055ff]/30 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#003087]/10 rounded-lg group-hover:bg-[#003087]/20 transition-colors duration-200">
                <svg className="w-8 h-8 text-[#003087]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.076,21.337H2.47a.641.641,0,0,1-.633-.74L4.944,2.28A.78.78,0,0,1,5.717,1.66H14.8a12.5,12.5,0,0,1,2.76.3,7.714,7.714,0,0,1,2.347.98,4.651,4.651,0,0,1,1.663,1.9,6.919,6.919,0,0,1,.64,3.16,10.211,10.211,0,0,1-.58,3.52,8.51,8.51,0,0,1-1.56,2.84,7.315,7.315,0,0,1-2.32,1.94,6.36,6.36,0,0,1-2.84.7H13.64a1.847,1.847,0,0,0-1.85,1.56l-.09.44-.48,3.04-.07.36a.966.966,0,0,1-.95.8Z"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-black dark:text-white group-hover:text-[#003087] transition-colors duration-200">
                PayPal
              </h3>
            </div>

            {/* USDT */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg hover:border-[#0055ff]/30 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#26A17B]/10 rounded-lg group-hover:bg-[#26A17B]/20 transition-colors duration-200">
                <svg className="w-8 h-8 text-[#26A17B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M7,9H17V11H7V9M7,13H17V15H7V13Z"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-black dark:text-white group-hover:text-[#26A17B] transition-colors duration-200">
                USDT
              </h3>
            </div>

            {/* 数字人民币 */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8 dark:bg-black dark:border-gray-700 group hover:shadow-lg hover:border-[#0055ff]/30 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#C8102E]/10 rounded-lg group-hover:bg-[#C8102E]/20 transition-colors duration-200">
                <svg className="w-8 h-8 text-[#C8102E]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,6H13V8H16V10H13V14H16V16H13V18H11V16H8V14H11V10H8V8H11V6Z"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-black dark:text-white group-hover:text-[#C8102E] transition-colors duration-200">
                数字人民币
              </h3>
            </div>
          </div>

          {/* 合作伙伴统计 */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-[#0055ff] mb-2 group-hover:scale-110 transition-transform duration-200">
                  8+
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  主流支付渠道
                </div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-[#0055ff] mb-2 group-hover:scale-110 transition-transform duration-200">
                  100%
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  渠道覆盖率
                </div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-[#0055ff] mb-2 group-hover:scale-110 transition-transform duration-200">
                  24/7
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  全天候服务
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 行动号召区域 */}
        <section className="text-center bg-gradient-to-r from-[#0055ff] to-[#0066ff] p-8 md:p-12 lg:p-16 text-white rounded-lg">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
            准备好开始了吗？
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-yellow-300">
            5分钟快速接入支付服务
          </h3>
          <p className="text-sm md:text-base lg:text-lg mb-6 lg:mb-8 max-w-3xl mx-auto opacity-90">
            无需复杂配置，无需等待审核，立即注册即可开始使用<br />
            专业技术团队7×24小时为您提供支持服务
          </p>

          {/* 特色标签 */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              无需信用卡
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              5分钟集成
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              专业支持
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="https://merch.payphp.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0055ff] px-6 lg:px-8 py-2.5 lg:py-3 font-bold hover:bg-gray-100 transition-all duration-300 rounded-lg text-center inline-block"
            >
              免费试用
            </a>
            <button className="border-2 border-white text-white px-6 lg:px-8 py-2.5 lg:py-3 font-semibold hover:bg-white hover:text-[#0055ff] transition-all duration-300 rounded-lg">
              了解更多
            </button>
          </div>
        </section>

        {/* 服务支持卡片 */}
        <section className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* 技术支持卡片 */}
            <div className="bg-white rounded-lg transition-all duration-300 p-4 lg:p-6 border border-gray-100 hover:border-[#0055ff]/20 group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#0055ff] to-[#0066ff] rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0055ff] transition-colors duration-300">
                技术支持
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                7×24小时在线技术支持
              </p>
              <div className="flex items-center text-[#0055ff] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>获取支持</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* 商务合作卡片 */}
            <div className="bg-white rounded-lg transition-all duration-300 p-4 lg:p-6 border border-gray-100 hover:border-[#0055ff]/20 group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#0055ff] to-[#0066ff] rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0055ff] transition-colors duration-300">
                商务合作
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                专业的商务团队为您服务
              </p>
              <div className="flex items-center text-[#0055ff] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>联系我们</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* 开发文档卡片 */}
            <div className="bg-white rounded-lg transition-all duration-300 p-4 lg:p-6 border border-gray-100 hover:border-[#0055ff]/20 group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#0055ff] to-[#0066ff] rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0055ff] transition-colors duration-300">
                开发文档
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                完整的API文档和SDK
              </p>
              <div className="flex items-center text-[#0055ff] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>查看文档</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};



export default Industry;
