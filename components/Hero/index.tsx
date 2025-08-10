"use client";
import Image from "next/image";
import Qrcode from "@/components/Qrcode";

const Hero = () => {

  return (
    <>
      {/* Hero主视觉区域 - 采用支付企业官网设计风格 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pb-20 pt-35 md:pt-40 xl:pb-32 xl:pt-48">
        {/* 背景装饰元素 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23165dff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-12 xl:gap-20">
            {/* 左侧内容区域 */}
            <div className="md:w-1/2 lg:w-3/5">
              {/* 产品标签 */}
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#165dff] border border-blue-100">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                企业级支付解决方案
              </div>

              {/* 主标题 */}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl xl:text-6xl">
                安全可靠的
                <br />
                <span className="relative inline-block text-[#165dff]">
                  支付服务平台
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C100 2 200 2 298 10" stroke="#165dff" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                  </svg>
                </span>
              </h1>
              {/* 副标题描述 */}
              <p className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg lg:pr-6">
                为企业提供专业、安全、高效的支付解决方案。支持多种支付方式，
                助力企业数字化转型。
              </p>

              {/* 核心优势标签 */}
              <div className="mb-8 flex flex-wrap gap-2">
                <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm border border-gray-100 flex items-center gap-1.5">
                  {/* 安全锁图标 */}
                  <svg className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  银行级安全
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm border border-gray-100 flex items-center gap-1.5">
                  {/* 闪电图标 */}
                  <svg className="h-3.5 w-3.5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  毫秒级响应
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm border border-gray-100 flex items-center gap-1.5">
                  {/* 地球图标 */}
                  <svg className="h-3.5 w-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  全球覆盖
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm border border-gray-100 flex items-center gap-1.5">
                  {/* 图表图标 */}
                  <svg className="h-3.5 w-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  实时监控
                </span>
              </div>

              {/* CTA操作区域 */}
              <div className="space-y-6">
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

                {/* 免费试用说明 */}
                <p className="text-sm text-gray-500">
                免费试用30天，无需信用卡，专业技术支持
                </p>

                {/* 快速入口按钮组 */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-[#165dff] hover:text-[#165dff]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    产品文档
                  </button>

                 {/* 快速入口按钮组 */}
                  <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-[#165dff] hover:text-[#165dff]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    在线咨询
                  </button>
                </div>
              </div>
            </div>

            {/* 右侧视觉区域 - 模拟移动支付应用界面 */}
            <div className="hidden md:block md:w-1/2 lg:w-2/5">
              <div className="relative">
                {/* 手机外框 */}
                <div className="relative mx-auto w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* 手机屏幕 */}
                  <div className="w-full h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-[2.5rem] overflow-hidden relative">
                    {/* 状态栏 */}
                    <div className="flex items-center justify-between px-6 pt-4 pb-2 text-white">
                      <div className="text-sm font-medium">9:41</div>
                      <div className="flex items-center gap-1">
                        {/* 信号图标 */}
                        <div className="flex gap-0.5">
                          <div className="w-1 h-3 bg-white rounded-full"></div>
                          <div className="w-1 h-4 bg-white rounded-full"></div>
                          <div className="w-1 h-5 bg-white rounded-full"></div>
                          <div className="w-1 h-6 bg-white rounded-full"></div>
                        </div>
                        {/* 电池图标 */}
                        <div className="w-6 h-3 border border-white rounded-sm relative ml-1">
                          <div className="w-4 h-1.5 bg-green-400 rounded-sm absolute top-0.5 left-0.5"></div>
                          <div className="w-0.5 h-1 bg-white rounded-r absolute -right-1 top-1"></div>
                        </div>
                      </div>
                    </div>

                    {/* 应用头部 */}
                    <div className="px-6 py-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">P</span>
                        </div>
                        <span className="text-white font-semibold text-lg">PayPay</span>
                      </div>

                      {/* 余额卡片 */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 relative overflow-hidden">
                        {/* 安全标识 */}
                        <div className="absolute top-4 right-4 bg-white/20 rounded-lg px-3 py-1">
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 616 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-white font-medium">银行级安全</span>
                          </div>
                          <div className="text-xs text-white/80 mt-0.5">多重加密保障</div>
                        </div>

                        <div className="text-white/80 text-sm mb-2">我的余额</div>
                        <div className="text-white text-3xl font-bold mb-4">¥ 8,659.20</div>
                        
                        <div className="flex gap-3">
                          <button className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-medium">
                            充值
                          </button>
                          <button className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm font-medium">
                            提现
                          </button>
                        </div>
                      </div>

                      {/* 快捷功能 */}
                      <div className="mb-6">
                        <div className="text-white/90 text-sm mb-3">快捷功能</div>
                        <div className="grid grid-cols-4 gap-4">
                          {/* 付款 */}
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <span className="text-white text-xs">付款</span>
                          </div>
                          
                          {/* 扫码 */}
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                              </svg>
                            </div>
                            <span className="text-white text-xs">扫码</span>
                          </div>
                          
                          {/* 转账 */}
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                              </svg>
                            </div>
                            <span className="text-white text-xs">转账</span>
                          </div>
                          
                          {/* 账单 */}
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                              </svg>
                            </div>
                            <span className="text-white text-xs">账单</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 底部内容区域 */}
                    <div className="bg-white rounded-t-3xl flex-1 px-6 py-6">
                      {/* 全球支付支持 */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">全球支付</div>
                          <div className="text-sm text-gray-500">支持多种结算</div>
                        </div>
                      </div>

                      {/* 近期交易 */}
                      <div className="mb-4">
                        <div className="text-gray-900 font-medium mb-3">近交易</div>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-900">网上商城</div>
                              <div className="text-sm text-gray-500">今天 14:30</div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-gray-900">-¥128.50</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 底部导航 */}
                      <div className="flex justify-around pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className="w-6 h-6 mx-auto mb-1">
                            <svg className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs text-blue-600 font-medium">首页</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 mx-auto mb-1">
                            <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-400">资产</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 mx-auto mb-1">
                            <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-400">发现</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 mx-auto mb-1">
                            <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-400">我的</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 装饰性元素 */}
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#165dff]/20 to-blue-300/20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-blue-100/50 to-[#165dff]/10 blur-2xl"></div>
                
                {/* 浮动数据卡片 */}
                <div className="absolute -left-8 top-1/3 transform -translate-y-1/2 rounded-lg bg-white p-4 shadow-lg border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">日交易量</div>
                  <div className="text-lg font-bold text-[#165dff]">¥2.8M</div>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    +12.5%
                  </div>
                </div>

                <div className="absolute -right-6 bottom-1/3 rounded-lg bg-white p-3 shadow-lg border border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">成功率</div>
                  <div className="text-lg font-bold text-green-600">99.9%</div>
                  <div className="text-xs text-gray-400">实时监控</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
