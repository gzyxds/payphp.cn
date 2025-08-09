"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== 简约Features功能特性展示区域 Start ===== --> */}
      <section 
        id="features" 
        className="bg-gray-50 py-20"
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- 简洁标题区域 --> */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              核心功能特性
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              为企业提供全方位的支付解决方案
            </p>
          </div>

          {/* <!-- 功能特性网格布局 - 4列显示全部功能 --> */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* <!-- 显示全部功能特性 --> */}
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== 简约Features功能特性展示区域 End ===== --> */}
    </>
  );
};

export default Feature;
