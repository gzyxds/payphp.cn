"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== 支付企业官网 - 产品功能展示区域 Start ===== --> */}
      <section className="bg-gray-50/30 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-25 lg:pt-25 xl:pb-30 xl:pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* 标题区域 - 简洁设计，优化移动端间距 */}
          <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
            <div className="mb-3 inline-flex items-center rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-[#165dff] border border-gray-200 shadow-sm sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
              <svg className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              产品功能
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl lg:text-4xl xl:text-5xl">
              全方位支付解决方案
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              从安全支付到数据分析，从API集成到风控管理，为企业提供完整的支付生态系统解决方案
            </p>
          </div>

          {/* <!-- Tab导航菜单 - 优化移动端适配 --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-12 sm:mb-16 xl:mb-20"
          >
            {/* Tab导航容器 - 现代简洁设计，优化移动端 */}
            <div className="mx-auto max-w-2xl">
              <div className="flex items-center justify-center rounded-xl bg-gray-100 p-1">
                {/* Tab 1 - 安全支付 */}
                <button
                  onClick={() => setCurrentTab("tabOne")}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-xs font-medium transition-all duration-200 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm ${
                    currentTab === "tabOne"
                      ? "bg-white text-[#165dff] shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden sm:inline">安全支付</span>
                  <span className="sm:hidden">安全</span>
                </button>

                {/* Tab 2 - 数据分析 */}
                <button
                  onClick={() => setCurrentTab("tabTwo")}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-xs font-medium transition-all duration-200 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm ${
                    currentTab === "tabTwo"
                      ? "bg-white text-[#165dff] shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <span className="hidden sm:inline">数据分析</span>
                  <span className="sm:hidden">数据</span>
                </button>

                {/* Tab 3 - API集成 */}
                <button
                  onClick={() => setCurrentTab("tabThree")}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2.5 text-xs font-medium transition-all duration-200 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm ${
                    currentTab === "tabThree"
                      ? "bg-white text-[#165dff] shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden sm:inline">API集成</span>
                  <span className="sm:hidden">API</span>
                </button>
              </div>
            </div>
          </motion.div>
          {/* <!-- Tab导航菜单结束 --> */}

          {/* <!-- Tab Content Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1390"
          >
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* <!-- Tab Content End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;
