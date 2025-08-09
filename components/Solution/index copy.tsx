"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Solution = () => {
  return (
    <>
      {/* <!-- ===== 关于我们 - 企业支付解决方案 ===== --> */}
      <section className="overflow-hidden bg-gradient-to-b from-white to-gray-50/50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* 左侧模拟界面区域 - 现代化支付界面设计 */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden md:block md:w-1/2"
            >
              {/* 外层容器 - 模拟设备边框 */}
              <div className="relative mx-auto">
                {/* 背景装饰元素 */}
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-30 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-25 blur-xl"></div>
                
                {/* 主要模拟界面容器 */}
                <div className="relative z-10 rounded-2xl bg-white shadow-md border border-gray-200 overflow-hidden">
                  {/* 模拟手机状态栏 */}
                  <div className="flex items-center justify-between px-6 py-2.5 bg-gray-50 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                      <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                      <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                      <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-600">PayPHP</div>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-4 rounded-sm bg-green-400"></div>
                      <div className="text-xs text-gray-600">100%</div>
                    </div>
                  </div>

                  {/* 模拟支付界面内容 */}
                  <div className="p-6 space-y-4">
                    {/* 头部信息 */}
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#165dff] to-[#0052d9] shadow-md">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <h3 className="text-base font-semibold text-gray-800 mb-1">安全支付</h3>
                      <p className="text-xs text-gray-500">企业级支付解决方案</p>
                    </div>

                    {/* 支付金额显示 */}
                    <div className="text-center py-3">
                      <div className="text-2xl font-bold text-gray-900 mb-1">¥1,299.00</div>
                      <div className="text-xs text-gray-500">订单金额</div>
                    </div>

                    {/* 支付方式选择 */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 mb-2">选择支付方式</div>
                      
                      {/* 支付选项 */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50 border-2 border-blue-200">
                          <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center mb-2">
                            <span className="text-white text-xs font-bold">微</span>
                          </div>
                          <span className="text-xs font-medium text-gray-700">微信支付</span>
                          <div className="h-3 w-3 rounded-full bg-blue-500 flex items-center justify-center mt-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center mb-2">
                            <span className="text-white text-xs font-bold">支</span>
                          </div>
                          <span className="text-xs font-medium text-gray-700">支付宝</span>
                          <div className="h-3 w-3 rounded-full border-2 border-gray-300 mt-2"></div>
                        </div>

                        <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                          <div className="h-8 w-8 rounded-lg bg-red-500 flex items-center justify-center mb-2">
                            <span className="text-white text-xs font-bold">银</span>
                          </div>
                          <span className="text-xs font-medium text-gray-700">银行卡</span>
                          <div className="h-3 w-3 rounded-full border-2 border-gray-300 mt-2"></div>
                        </div>
                      </div>
                    </div>

                    {/* 确认支付按钮 */}
                    <motion.button
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-[#165dff] to-[#0052d9] text-white font-medium shadow-md"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      确认支付
                    </motion.button>

                    {/* 安全提示 */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span>256位SSL加密保护</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右侧内容区域 */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              {/* 标签和标题 */}
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#165dff] to-[#0052d9] px-4 py-1.5 text-sm font-medium text-white shadow-md">
                  <span className="mr-2">🚀</span>
                  企业级支付解决方案
                </span>
              </div>
              
              <h2 className="relative mb-6 text-3xl font-bold text-gray-900 xl:text-hero leading-tight">
                专业可信的
                <span className="relative inline-block ml-2 before:absolute before:bottom-2 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-gradient-to-r before:from-blue-200 before:to-indigo-200 before:rounded">
                  支付服务平台
                </span>
              </h2>
              
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                为企业提供安全、高效、便捷的支付解决方案，支持多种支付方式，
                助力企业数字化转型，提升用户支付体验。
              </p>

              {/* 特性列表 - 采用现代卡片设计 */}
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#165dff] to-[#0052d9] text-white shadow-md">
                    <span className="text-lg font-bold">01</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      多元化支付方式
                    </h3>
                    <p className="text-gray-600">
                      支持银行卡、移动支付、数字钱包等多种支付渠道，满足不同用户需求
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#165dff] to-[#0052d9] text-white shadow-md">
                    <span className="text-lg font-bold">02</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      企业级安全保障
                    </h3>
                    <p className="text-gray-600">
                      采用银行级加密技术，确保交易数据安全，通过多项安全认证
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== 关于我们结束 ===== --> */}

      {/* <!-- ===== 核心优势展示 ===== --> */}
      <section className="bg-white py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* 左侧内容 */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
                  <span className="mr-2">⚡</span>
                  快速接入
                </span>
              </div>
              
              <h2 className="relative mb-6 text-3xl font-bold text-gray-900 xl:text-hero leading-tight">
                集成所有必要的
                <span className="relative inline-block ml-2 before:absolute before:bottom-2 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-gradient-to-r before:from-orange-200 before:to-yellow-200 before:rounded">
                  支付接口
                </span>
              </h2>
              
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                提供完整的API文档和SDK，支持快速集成，
                让开发者能够轻松接入各种支付功能，缩短开发周期。
              </p>
              
              {/* 了解更多按钮 */}
              <div>
                <motion.a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#165dff] to-[#0052d9] px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>了解更多</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M12.175 9H0V7h12.175l-5.6-5.6L8 0l8 8-8 8-1.425-1.4L12.175 9z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* 右侧API集成模拟界面区域 - 简约白色风格 */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden md:block md:w-1/2 lg:w-5/12"
            >
              {/* 外层容器 - 简约白色设计 */}
              <div className="relative mx-auto max-w-lg">
                {/* 悬浮装饰元素 - 简约几何形状 */}
                <motion.div 
                  className="absolute -top-8 -right-8 h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 opacity-60"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 h-12 w-12 rounded-lg bg-gradient-to-br from-orange-50 to-yellow-100 opacity-50"
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                ></motion.div>

                <motion.div 
                  className="absolute top-1/3 -right-4 h-8 w-8 rounded-full bg-gradient-to-br from-green-50 to-emerald-100 opacity-40"
                  animate={{ 
                    x: [0, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                ></motion.div>
                
                {/* 主要模拟界面容器 - 纯白简约风格 */}
                <div className="relative z-10 rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden backdrop-blur-sm">
                  {/* 简约标题栏 */}
                  <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <div className="text-sm font-medium text-gray-700">API 集成中心</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                        在线
                      </div>
                    </div>
                  </div>

                  {/* 简约内容区域 */}
                  <div className="p-6 space-y-4">
                    {/* API端点展示 - 简约卡片风格 */}
                    <div className="space-y-3">
                      {/* 支付宝API */}
                      <motion.div 
                        className="group rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-4 hover:shadow-md transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-blue-500 flex items-center justify-center">
                              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">支付宝支付</div>
                              <div className="text-xs text-gray-500">Alipay Integration</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-blue-600">200ms</div>
                            <div className="text-xs text-gray-400">响应时间</div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 微信支付API */}
                      <motion.div 
                        className="group rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 p-4 hover:shadow-md transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-green-500 flex items-center justify-center">
                              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">微信支付</div>
                              <div className="text-xs text-gray-500">WeChat Pay</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-green-600">180ms</div>
                            <div className="text-xs text-gray-400">响应时间</div>
                          </div>
                        </div>
                      </motion.div>

                      {/* 银联支付API */}
                      <motion.div 
                        className="group rounded-2xl bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-100 p-4 hover:shadow-md transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center">
                              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">银联支付</div>
                              <div className="text-xs text-gray-500">UnionPay</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-orange-600">220ms</div>
                            <div className="text-xs text-gray-400">响应时间</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* 简约统计信息 */}
                    <div className="mt-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#165dff]">3</div>
                            <div className="text-xs text-gray-500">接口</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">99.9%</div>
                            <div className="text-xs text-gray-500">可用性</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                          <span className="text-xs text-gray-600 font-medium">实时监控</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 悬浮的功能标签 - 简约白色风格 */}
                 <motion.div 
                   className="absolute -right-6 top-1/4 transform -translate-y-1/2 z-20"
                   animate={{ 
                     y: [0, -5, 0]
                   }}
                   transition={{ 
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 >
                   <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 backdrop-blur-sm">
                     <div className="text-center">
                       <div className="text-xs font-medium text-gray-600 mb-1">集成时间</div>
                       <div className="text-2xl font-bold text-[#165dff]">5</div>
                       <div className="text-xs text-gray-500">分钟</div>
                     </div>
                   </div>
                 </motion.div>

                 <motion.div 
                   className="absolute -left-6 bottom-1/4 transform translate-y-1/2 z-20"
                   animate={{ 
                     y: [0, 5, 0]
                   }}
                   transition={{ 
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: 1.5
                   }}
                 >
                   <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 backdrop-blur-sm">
                     <div className="text-center">
                       <div className="text-xs font-medium text-gray-600 mb-1">成功率</div>
                       <div className="text-2xl font-bold text-green-600">99.9</div>
                       <div className="text-xs text-gray-500">%</div>
                     </div>
                   </div>
                 </motion.div>

                {/* 额外的悬浮装饰 */}
                <motion.div 
                  className="absolute top-1/2 -right-2 transform -translate-y-1/2"
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-100 to-indigo-200 opacity-30"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== 核心优势展示结束 ===== --> */}
    </>
  );
};

export default Solution;
