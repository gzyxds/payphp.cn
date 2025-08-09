"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Solution = () => {
  return (
    <>
      {/* <!-- ===== 行业支付解决方案 ===== --> */}
      <section className="overflow-hidden bg-[#f0f7ff] py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* 极简布局：清晰的层次结构 */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-20 xl:gap-24">
            {/* 左侧文案内容区域 - 现代简约设计 */}
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
              className="animate_left relative w-full lg:w-1/2 order-2 lg:order-1"
            >
              {/* 极简外层容器 */}
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* 主标题 */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1d2129] mb-4">
                    一站式<span className="text-[#165dff]">支付解决方案</span>
                  </h3>
                  <p className="text-lg text-[#4e5969] leading-relaxed">
                    为您的业务提供全方位的支付服务，满足各种场景需求，提升用户体验与转化率。
                  </p>
                </div>
                
                {/* 特点卡片 - 几何切片卡片设计 - 更简约无阴影 */}
                <div className="space-y-4">
                  {/* 特点1：多渠道支付 */}
                  <motion.div 
                    className="bg-white p-5 border-l-4 border-[#165dff] border-t border-r border-b border-[#e6f0ff] transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#165dff] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-[#1d2129] mb-1">多渠道支付</h4>
                        <p className="text-sm text-[#4e5969]">
                          支持微信支付、支付宝、银联、QQ钱包等多种支付方式，满足不同用户的支付习惯。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* 特点2：安全保障 */}
                  <motion.div 
                    className="bg-white p-5 border-l-4 border-[#4080ff] border-t border-r border-b border-[#e6f0ff] transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#4080ff] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-[#1d2129] mb-1">安全保障</h4>
                        <p className="text-sm text-[#4e5969]">
                          采用银行级安全加密技术，全方位保障交易安全，防止欺诈和信息泄露。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* 特点3：快速结算 */}
                  <motion.div 
                    className="bg-white p-5 border-l-4 border-[#6aa1ff] border-t border-r border-b border-[#e6f0ff] transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#6aa1ff] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-[#1d2129] mb-1">快速结算</h4>
                        <p className="text-sm text-[#4e5969]">
                          支持T+1、D+1等多种结算方式，资金到账快速，提高资金周转效率。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* 数据统计 - 更简约无阴影 */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-white border border-[#e6f0ff]">
                    <div className="text-2xl font-bold text-[#165dff] mb-1">99.9%</div>
                    <div className="text-xs text-[#4e5969]">系统稳定性</div>
                  </div>
                  <div className="text-center p-3 bg-white border border-[#e6f0ff]">
                    <div className="text-2xl font-bold text-[#165dff] mb-1">300+</div>
                    <div className="text-xs text-[#4e5969]">商户接入</div>
                  </div>
                  <div className="text-center p-3 bg-white border border-[#e6f0ff]">
                    <div className="text-2xl font-bold text-[#165dff] mb-1">10亿+</div>
                    <div className="text-xs text-[#4e5969]">年交易额</div>
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
              className="animate_right w-full lg:w-1/2 order-1 lg:order-2"
            >
              {/* 标签和标题 */}
              <div className="mb-6 text-center lg:text-left">
                <span className="inline-flex items-center rounded-full bg-[#165dff] px-4 py-2 text-sm font-medium text-white">
                  <span className="mr-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  行业支付解决方案
                </span>
              </div>
              
              <h2 className="relative mb-6 text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1d2129] leading-tight text-center lg:text-left">
                提供
                <span className="relative inline-block ml-2 text-[#165dff]">
                  行业级
                </span>
                支付解决方案
              </h2>
              
              <p className="mb-8 text-lg leading-relaxed text-[#4e5969] text-center lg:text-left">
                针对不同行业特点，提供专业定制化的支付解决方案，满足各行业的特殊需求
              </p>

              {/* 行业特性列表 - 采用现代卡片设计 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  className="flex items-start gap-4 rounded-xl bg-white p-6 border border-[#e6f0ff] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#165dff] text-white flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 text-lg font-semibold text-[#1d2129]">
                      电商支付
                    </h3>
                    <ul className="text-[#4e5969] text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#165dff]"></div>
                        支持主流支付渠道，实时到账
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#165dff]"></div>
                        订单管理和营销分账一体化
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#165dff]"></div>
                        资金流转安全高效
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 rounded-xl bg-white p-6 border border-[#e6f0ff] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4080ff] text-white flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-10V3a1 1 0 011-1h4a1 1 0 011 1v1M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 text-lg font-semibold text-[#1d2129]">
                      游戏支付
                    </h3>
                    <ul className="text-[#4e5969] text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#4080ff]"></div>
                        支持多种渠道，实时到账
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#4080ff]"></div>
                        手游端游页游一网打尽
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#4080ff]"></div>
                        提供安全便捷的支付方案
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 rounded-xl bg-white p-6 border border-[#e6f0ff] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6aa1ff] text-white flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 text-lg font-semibold text-[#1d2129]">
                      社交支付
                    </h3>
                    <ul className="text-[#4e5969] text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#6aa1ff]"></div>
                        全自动结算结佣实时到账
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#6aa1ff]"></div>
                        接口接入简单轻松
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#6aa1ff]"></div>
                        覆盖直播社交，公会社交
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 rounded-xl bg-white p-6 border border-[#e6f0ff] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f1423] text-white flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 text-lg font-semibold text-[#1d2129]">
                      动漫支付
                    </h3>
                    <ul className="text-[#4e5969] text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0f1423]"></div>
                        支付接入门槛低
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0f1423]"></div>
                        到账速度实时及次日可选
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#0f1423]"></div>
                        覆盖网文小说，动漫文章
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== 行业支付解决方案 ===== --> */}

      {/* <!-- ===== 核心优势展示 ===== --> */}
      <section className="bg-white py-16 lg:py-24 xl:py-32">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* 移动端优化：改为垂直布局，桌面端保持水平布局 */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 xl:gap-24">
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
              className="animate_left w-full lg:w-1/2 order-1"
            >
              <div className="mb-6 text-center lg:text-left">
                <span className="inline-flex items-center rounded-full bg-[#f0f7ff] px-4 py-2 text-sm font-medium text-[#165dff]">
                  <span className="mr-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  主流支付接口
                </span>
              </div>
              
              <h2 className="relative mb-6 text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1d2129] leading-tight text-center lg:text-left">
                全面支持各个终端 
                <span className="relative inline-block ml-2 text-[#165dff]">
                  数据同步
                </span>
              </h2>
              
              <p className="mb-8 text-lg leading-relaxed text-[#4e5969] text-center lg:text-left">
                提供完整的API文档和SDK，支持快速集成，
                让开发者能够轻松接入各种支付功能，缩短开发周期。
              </p>
              
              {/* 了解更多按钮 */}
              <div className="text-center lg:text-left">
                <motion.a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#165dff] px-6 py-3 text-white font-medium transition-all duration-300"
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

            {/* 右侧支付方式展示区域 - 极简设计 */}
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
              className="animate_right relative w-full lg:w-1/2 order-2"
            >
              {/* 极简容器设计 */}
              <div className="relative w-full">
                {/* 主要内容容器 - 纯净白色风格 */}
                <div className="relative z-10 rounded-xl bg-white border border-[#e6f0ff] overflow-hidden">
                  {/* 极简标题栏 */}
                  <div className="px-6 py-4 bg-[#f5f9ff] border-b border-[#e6f0ff]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-[#165dff]"></div>
                        <span className="text-sm font-medium text-[#1d2129]">支付方式</span>
                      </div>
                      <span className="text-sm text-[#4e5969] font-medium">6种方式</span>
                    </div>
                  </div>

                  {/* 极简支付方式列表 - 两列布局 */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* 微信支付 */}
                      <motion.div 
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f9ff] border border-[#e6f0ff] hover:bg-[#ecf3ff] transition-all duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <div className="h-10 w-10 rounded-lg bg-[#165dff] flex items-center justify-center flex-shrink-0">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-[#1d2129] text-sm">微信支付</div>
                          <div className="text-xs text-[#4e5969] truncate">快捷移动支付</div>
                        </div>
                      </motion.div>

                      {/* 支付宝支付 */}
                      <motion.div 
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e6f0ff] hover:bg-[#f5f9ff] transition-all duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <div className="h-10 w-10 rounded-lg bg-[#4080ff] flex items-center justify-center flex-shrink-0">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-[#1d2129] text-sm">支付宝支付</div>
                          <div className="text-xs text-[#4e5969] truncate">全场景支付</div>
                        </div>
                      </motion.div>

                      {/* QQ支付 */}
                      <motion.div 
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e6f0ff] hover:bg-[#f5f9ff] transition-all duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <div className="h-10 w-10 rounded-lg bg-[#6aa1ff] flex items-center justify-center flex-shrink-0">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-[#1d2129] text-sm">QQ支付</div>
                          <div className="text-xs text-[#4e5969] truncate">社交支付</div>
                        </div>
                      </motion.div>

                      {/* 二维码收款 */}
                      <motion.div 
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e6f0ff] hover:bg-[#f5f9ff] transition-all duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <div className="h-10 w-10 rounded-lg bg-[#0f1423] flex items-center justify-center flex-shrink-0">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-[#1d2129] text-sm">二维码收款</div>
                          <div className="text-xs text-[#4e5969] truncate">扫码支付</div>
                        </div>
                      </motion.div>

                      {/* 个人码收款 */}
                      <motion.div 
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e6f0ff] hover:bg-[#f5f9ff] transition-all duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <div className="h-10 w-10 rounded-lg bg-[#165dff] flex items-center justify-center flex-shrink-0">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-[#1d2129] text-sm">个人码收款</div>
                          <div className="text-xs text-[#4e5969] truncate">个人收款</div>
                        </div>
                      </motion.div>

                      {/* 商家码收款 */}
                      <motion.div 
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e6f0ff] hover:bg-[#f5f9ff] transition-all duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <div className="h-10 w-10 rounded-lg bg-[#4080ff] flex items-center justify-center flex-shrink-0">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-[#1d2129] text-sm">商家码收款</div>
                          <div className="text-xs text-[#4e5969] truncate">商户收款</div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* 支付特性展示 */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 p-2 bg-[#f5f9ff] rounded-lg">
                        <svg className="h-4 w-4 text-[#165dff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-xs text-[#1d2129]">实时到账</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-[#f5f9ff] rounded-lg">
                        <svg className="h-4 w-4 text-[#165dff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-xs text-[#1d2129]">安全保障</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-[#f5f9ff] rounded-lg">
                        <svg className="h-4 w-4 text-[#165dff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-[#1d2129]">快速接入</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-[#f5f9ff] rounded-lg">
                        <svg className="h-4 w-4 text-[#165dff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="text-xs text-[#1d2129]">数据分析</span>
                      </div>
                    </div>
                  </div>

                  {/* 极简底部统计 */}
                  <div className="px-6 py-4 bg-[#f5f9ff] border-t border-[#e6f0ff]">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-[#4e5969]">接口数量: <span className="font-medium text-[#165dff]">6</span></span>
                        <span className="text-[#4e5969]">可用性: <span className="font-medium text-[#165dff]">99.9%</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#165dff]"></div>
                        <span className="text-[#4e5969] font-medium">在线</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 单个悬浮标签 - 极简设计，移动端隐藏 */}
                <motion.div 
                  className="absolute right-4 top-6 z-20 hidden md:block"
                  animate={{ 
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="bg-white rounded-lg border border-[#e6f0ff] px-3 py-2">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#165dff]">5min</div>
                      <div className="text-xs text-[#4e5969]">快速集成</div>
                    </div>
                  </div>
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
