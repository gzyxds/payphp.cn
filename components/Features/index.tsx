import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

/**
 * 核心功能特性区域
 * 展示支付平台的 12 项核心能力，采用响应式网格布局
 */
const Feature = () => {
  return (
    <section id="features" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-blue-50/60 blur-3xl dark:bg-blue-900/10" />
        <div className="absolute -bottom-20 left-0 h-60 w-60 rounded-full bg-purple-50/40 blur-3xl dark:bg-purple-900/10" />
      </div>

      <div className="relative mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
        {/* 标题区域 */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            核心优势
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            全方位的支付能力
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            从安全防护到快速接入，12 项核心能力覆盖支付全链路
          </p>
        </div>

        {/* 功能卡片网格 */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuresData.map((feature) => (
            <SingleFeature feature={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;