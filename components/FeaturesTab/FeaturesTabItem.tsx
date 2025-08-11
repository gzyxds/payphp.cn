import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark, id } = featureTab;

  // 根据不同tab显示不同的图标和特性
  const getTabIcon = (tabId: string) => {
    switch (tabId) {
      case "tabOne":
        return (
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-[#165dff]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        );
      case "tabTwo":
        return (
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-[#165dff]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        );
      case "tabThree":
        return (
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-[#165dff]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getFeatureList = (tabId: string) => {
    switch (tabId) {
      case "tabOne":
        return [
          { icon: "●", title: "多重加密", desc: "采用AES-256加密算法" },
          { icon: "■", title: "风控系统", desc: "智能反欺诈检测" },
          { icon: "▲", title: "多重验证", desc: "支持多种身份验证" },
          { icon: "◆", title: "实时监控", desc: "7×24小时安全监控" }
        ];
      case "tabTwo":
        return [
          { icon: "○", title: "可视化报表", desc: "直观的数据展示" },
          { icon: "△", title: "趋势分析", desc: "业务增长趋势预测" },
          { icon: "◇", title: "精准洞察", desc: "用户行为深度分析" },
          { icon: "□", title: "自定义报告", desc: "灵活的报表配置" }
        ];
      case "tabThree":
        return [
          { icon: "◎", title: "RESTful API", desc: "标准化接口设计" },
          { icon: "◈", title: "完整文档", desc: "详细的开发指南" },
          { icon: "◐", title: "沙箱测试", desc: "安全的测试环境" },
          { icon: "→", title: "快速部署", desc: "一键式集成方案" }
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <div className="rounded-lg bg-white border border-gray-200 p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* 左侧内容区域 - 优化移动端布局 */}
          <div className="lg:w-1/2">
            {/* 标题区域 - 简洁设计，优化移动端 */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-200 sm:h-12 sm:w-12">
                {getTabIcon(id)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
                  {title}
                </h2>
                <div className="mt-1 h-0.5 w-12 bg-[#165dff] sm:w-16"></div>
              </div>
            </div>

            {/* 描述内容 - 优化移动端字体大小和间距 */}
            <div className="space-y-3 mb-6 sm:space-y-4 sm:mb-8">
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {desc1}
              </p>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {desc2}
              </p>
            </div>

            {/* 特性列表 - 简洁卡片设计，优化移动端 */}
            <div className="grid grid-cols-1 gap-2.5 mb-6 sm:grid-cols-2 sm:gap-3 sm:mb-8">
              {getFeatureList(id).map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5 rounded-lg bg-gray-50 p-3 border border-gray-100 sm:gap-3 sm:p-4">
                  <span className="text-lg sm:text-xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA按钮 - 简洁设计，优化移动端 */}
            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <button className="rounded-lg bg-[#165dff] px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1451e6] focus:outline-none focus:ring-2 focus:ring-[#165dff]/20 sm:px-6 sm:py-3">
                了解更多
              </button>
              <button className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:px-6 sm:py-3">
                查看文档
              </button>
            </div>
          </div>

          {/* 右侧图片区域 - 简洁设计，优化移动端 */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* 主要展示区域 - 优化移动端 */}
              <div className="rounded-lg bg-white p-3 border border-gray-200 shadow-sm sm:p-4 lg:p-6">
                <Image 
                  src={image} 
                  alt={title} 
                  width={500} 
                  height={350} 
                  className="rounded-lg dark:hidden w-full h-auto" 
                />
                <Image
                  src={imageDark}
                  alt={title}
                  width={500} 
                  height={350}
                  className="hidden rounded-lg dark:block w-full h-auto"
                />
              </div>

              {/* 简洁的数据展示卡片 - 优化移动端位置和大小 */}
              <div className="absolute -right-2 top-4 rounded-lg bg-white p-2 border border-gray-200 shadow-sm sm:-right-4 sm:top-6 sm:p-3">
                <div className="text-xs text-gray-500 mb-0.5 sm:mb-1">安全等级</div>
                <div className="text-sm font-semibold text-[#165dff] sm:text-base">AAA+</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  已认证
                </div>
              </div>

              <div className="absolute -left-2 bottom-4 rounded-lg bg-white p-2 border border-gray-200 shadow-sm sm:-left-4 sm:bottom-6 sm:p-3">
                <div className="text-xs text-gray-500 mb-0.5 sm:mb-1">响应时间</div>
                <div className="text-sm font-semibold text-green-600 sm:text-base">&lt;100ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
