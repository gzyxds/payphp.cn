"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Auth = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 几何背景装饰 - 现代简约科技风 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 主要几何切片元素 */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0055ff] opacity-[0.03] transform rotate-45 translate-x-64 -translate-y-64 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0055ff] opacity-[0.02] transform -rotate-12 -translate-x-40 translate-y-40 rounded-lg"></div>
        
        {/* 线性几何装饰 */}
        <div className="absolute top-1/4 left-1/3 w-40 h-40 border border-[#0055ff]/10 transform rotate-12 rounded-lg"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 border border-[#0055ff]/10 transform -rotate-45 rounded-lg"></div>
        
        {/* 小型装饰点 */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-[#0055ff]/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-[#0055ff]/15 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-[#0055ff]/10 rounded-full"></div>
        
        {/* 网格线条装饰 */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-[#0055ff]/10 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-[#0055ff]/10 to-transparent"></div>
      </div>



      {/* 主要内容区域 */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 xl:px-0 py-16">
          {/* 英雄区域 - 现代简约卡片式设计 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            {/* 顶部标签卡片 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="inline-flex items-center px-8 py-4 bg-[#0055ff] text-white rounded-xl text-sm font-medium border border-[#0055ff]/20">
                {/* 线性图标 - 闪电 */}
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                专为个人站长打造的聚合免签系统
              </div>
            </motion.div>
            
            {/* 主标题区域 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="text-[#0055ff] block">PayPHP</span>
                <span className="text-black block">支付系统</span>
              </h1>
            </motion.div>
            
            {/* 副标题卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="inline-block bg-[#0055ff]/5 border border-[#0055ff]/10 rounded-xl px-8 py-4">
                <p className="text-2xl text-[#0055ff] font-semibold">
                  最好用的码支付系统
                </p>
              </div>
            </motion.div>
            
            {/* 描述文本卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl p-8">
                <p className="text-xl text-gray-600 leading-relaxed">
                  专为个人站长打造的聚合免签系统，拥有卓越的性能和丰富的功能。全新轻量化界面UI，让您更加方便快捷地解决知识付费和运营赞助难题。
                </p>
              </div>
            </motion.div>
            
            {/* CTA按钮组 - 现代卡片式设计 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <button className="bg-[#0055ff] text-white px-16 py-5 rounded-xl font-semibold text-lg hover:bg-[#0044dd] transition-all duration-300 border border-[#0055ff] min-w-[200px]">
                立即购买
              </button>
              <button className="border border-[#0055ff] text-[#0055ff] px-16 py-5 rounded-xl font-semibold text-lg hover:bg-[#0055ff] hover:text-white transition-all duration-300 min-w-[200px]">
                联系客服
              </button>
            </motion.div>

          </motion.div>
          {/* 用户评价 - 现代简约卡片式 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-32"
          >
            {/* 标题区域 */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-6"
              >
                <div className="inline-flex items-center px-6 py-3 bg-[#0055ff]/5 border border-[#0055ff]/10 text-[#0055ff] rounded-xl text-sm font-medium">
                  {/* 线性图标 - 聊天 */}
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  用户评价
                </div>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-5xl font-bold text-black mb-6"
              >
                客户真实反馈
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-xl text-gray-600"
              >
                听听我们客户的使用体验
              </motion.p>
            </div>
            
            {/* 评价卡片网格 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "张总",
                  company: "某电商平台",
                  content: "接入简单，支付稳定，客服响应及时，非常满意！系统的稳定性和安全性都很出色。",
                  rating: 5,
                  avatar: "Z",
                  role: "技术总监"
                },
                {
                  name: "李经理",
                  company: "某游戏公司",
                  content: "系统稳定性很好，交易成功率高，推荐使用。多渠道支付让我们的用户体验大大提升。",
                  rating: 5,
                  avatar: "L",
                  role: "产品经理"
                },
                {
                  name: "王总",
                  company: "某教育机构",
                  content: "文档详细，技术支持到位，帮助我们快速上线。开发团队的专业程度令人印象深刻。",
                  rating: 5,
                  avatar: "W",
                  role: "CEO"
                }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-white border border-[#0055ff]/10 rounded-2xl p-8 hover:border-[#0055ff]/30 transition-all duration-300 group"
                >
                  {/* 评分 */}
                  <div className="flex mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#0055ff] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* 评价内容 */}
                  <p className="text-gray-600 leading-relaxed text-base mb-8">{review.content}</p>
                  
                  {/* 用户信息 */}
                  <div className="flex items-center pt-6 border-t border-[#0055ff]/10">
                    <div className="w-14 h-14 bg-[#0055ff] rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {review.avatar}
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-bold text-black text-base">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role}</p>
                      <p className="text-sm text-[#0055ff] font-medium">{review.company}</p>
                    </div>
                    
                    {/* 引用图标 */}
                    <div className="text-[#0055ff]/20 group-hover:text-[#0055ff]/40 transition-colors duration-300">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 演示平台 - 现代简约卡片式 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-32"
          >
            {/* 标题区域 */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <div className="inline-flex items-center px-6 py-3 bg-[#0055ff]/5 border border-[#0055ff]/10 text-[#0055ff] rounded-xl text-sm font-medium">
                  {/* 线性图标 - 显示器 */}
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  演示平台
                </div>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl font-bold text-black mb-6"
              >
                体验演示环境
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-gray-600"
              >
                根据项目需求选择合适的演示环境
              </motion.p>
            </div>
            
            {/* 演示平台卡片网格 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  platform: "PC演示前台", 
                  url: "console.payphp.cn", 
                  account: "自行注册", 
                  password: "自行注册",
                  icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                { 
                  platform: "移动端H5演示", 
                  url: "console.payphp.cn", 
                  account: "自行注册", 
                  password: "自行注册",
                  icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                { 
                  platform: "API接口演示", 
                  url: "console.payphp.cn", 
                  account: "自行注册", 
                  password: "自行注册",
                  icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                { 
                  platform: "体验后台", 
                  url: "console.payphp.cn", 
                  account: "暂不开放", 
                  password: "暂不开放",
                  icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white border border-[#0055ff]/10 rounded-2xl p-8 hover:border-[#0055ff]/30 transition-all duration-300 group"
                >
                  {/* 图标 */}
                  <div className="w-16 h-16 bg-[#0055ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  
                  {/* 平台名称 */}
                  <h3 className="text-xl font-bold text-black mb-6 group-hover:text-[#0055ff] transition-colors duration-300">{item.platform}</h3>
                  
                  {/* 信息列表 */}
                  <div className="space-y-4 text-base mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">地址:</span>
                      <span className="text-[#0055ff] font-medium text-sm">{item.url}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">账户:</span>
                      <span className="text-black font-medium">{item.account}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">密码:</span>
                      <span className="text-black font-medium">{item.password}</span>
                    </div>
                  </div>
                  
                  {/* 访问按钮 */}
                  <button className="w-full bg-[#0055ff] text-white py-4 rounded-xl text-base font-semibold hover:bg-[#0044dd] transition-colors duration-300">
                    立即访问
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 功能特性 - 现代简约卡片式 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-32"
          >
            {/* 标题区域 */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-6"
              >
                <div className="inline-flex items-center px-6 py-3 bg-[#0055ff]/5 border border-[#0055ff]/10 text-[#0055ff] rounded-xl text-sm font-medium">
                  {/* 线性图标 - 闪电 */}
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  核心功能
                </div>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-5xl font-bold text-black mb-6"
              >
                专业支付解决方案
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-gray-600"
              >
                企业级支付系统，满足各种业务场景需求
              </motion.p>
            </div>
            
            {/* 功能特性卡片网格 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "多渠道支付",
                  description: "支持支付宝、微信、银联等主流支付方式，一站式支付解决方案",
                  icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                },
                {
                  title: "安全可靠",
                  description: "银行级安全保障，数据加密传输，确保交易安全无忧",
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                },
                {
                  title: "快速接入",
                  description: "简单的API接口设计，完善的开发文档，快速完成支付集成",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  title: "实时监控",
                  description: "交易状态实时监控，异常情况及时预警，保障业务稳定运行",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                {
                  title: "数据分析",
                  description: "详细的交易数据分析和报表统计，助力业务决策优化",
                  icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                },
                {
                  title: "技术支持",
                  description: "专业的技术团队提供7x24小时技术支持服务",
                  icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white border border-[#0055ff]/10 rounded-xl p-8 hover:border-[#0055ff]/20 transition-all duration-300 group"
                >
                  {/* 图标容器 - 几何切片设计 */}
                  <div className="w-14 h-14 bg-[#0055ff]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0055ff]/10 transition-colors duration-300">
                    <svg className="w-7 h-7 text-[#0055ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  
                  {/* 标题 */}
                  <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#0055ff] transition-colors duration-300">{feature.title}</h3>
                  
                  {/* 描述 */}
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* 装饰线条 */}
                  <div className="mt-6 h-0.5 bg-gradient-to-r from-[#0055ff] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 系统特色 - 现代简约卡片式 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-32"
          >
            {/* 标题区域 */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-6"
              >
                <div className="inline-flex items-center px-6 py-3 bg-[#0055ff]/5 border border-[#0055ff]/10 text-[#0055ff] rounded-xl text-sm font-medium">
                  {/* 线性图标 - 认证 */}
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  系统特色
                </div>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-5xl font-bold text-black mb-6"
              >
                为什么选择我们
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-xl text-gray-600"
              >
                企业级支付系统的核心优势
              </motion.p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* 特色列表 */}
              <div className="space-y-8">
                {[
                  {
                    title: "高并发处理",
                    description: "支持高并发交易处理，确保系统稳定运行，轻松应对业务高峰",
                    number: "01",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                  },
                  {
                    title: "多语言支持",
                    description: "支持多种编程语言SDK，便于快速集成，降低开发成本",
                    number: "02",
                    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  },
                  {
                    title: "灵活配置",
                    description: "支持个性化配置，满足不同业务需求，适应多样化场景",
                    number: "03",
                    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  },
                  {
                    title: "完善文档",
                    description: "提供详细的API文档和集成指南，助力快速上手",
                    number: "04",
                    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="bg-white border border-[#0055ff]/10 rounded-xl p-8 hover:border-[#0055ff]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-6">
                      {/* 图标和编号 */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-[#0055ff]/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#0055ff]/10 transition-colors duration-300">
                          <svg className="w-7 h-7 text-[#0055ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                          </svg>
                        </div>
                        <div className="text-sm text-[#0055ff] font-semibold text-center">{item.number}</div>
                      </div>
                      
                      {/* 内容 */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#0055ff] transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* 企业级解决方案卡片 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white border border-[#0055ff]/10 rounded-xl p-10"
              >
                <div className="text-center">
                  {/* 主图标 */}
                  <div className="w-24 h-24 bg-[#0055ff]/5 rounded-xl flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-[#0055ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-black mb-6">企业级解决方案</h3>
                  <p className="text-gray-600 mb-10 leading-relaxed">专为企业打造的支付系统，安全、稳定、高效</p>
                  
                  {/* 数据展示 */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#0055ff]/5 border border-[#0055ff]/10 rounded-xl p-6">
                      <div className="text-3xl font-bold text-[#0055ff] mb-2">99.9%</div>
                      <div className="text-sm text-gray-600">系统可用性</div>
                    </div>
                    <div className="bg-[#0055ff]/5 border border-[#0055ff]/10 rounded-xl p-6">
                      <div className="text-3xl font-bold text-[#0055ff] mb-2">1000+</div>
                      <div className="text-sm text-gray-600">企业客户</div>
                    </div>
                    <div className="bg-[#0055ff]/5 border border-[#0055ff]/10 rounded-xl p-6">
                      <div className="text-3xl font-bold text-[#0055ff] mb-2">24/7</div>
                      <div className="text-sm text-gray-600">技术支持</div>
                    </div>
                    <div className="bg-[#0055ff]/5 border border-[#0055ff]/10 rounded-xl p-6">
                      <div className="text-3xl font-bold text-[#0055ff] mb-2">100M+</div>
                      <div className="text-sm text-gray-600">日交易量</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 主流支付接口 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-c-1390 mx-auto mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">主流支付接口</h2>
              <p className="text-lg text-gray-600">全面支持各个终端，数据同步</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "/images/pay/留学教育.svg", // 微信图标
                  title: "微信支付",
                  desc: "轻松、方便、快捷实现移动支付的接入",
                  color: "bg-green-100 text-green-600"
                },
                {
                  icon: "/images/pay/退税管家.svg", // 支付宝图标（使用PayPal作为替代）
                  title: "支付宝支付",
                  desc: "轻松、方便、快捷实现移动支付的接入",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  icon: "/images/pay/外贸B2B.svg", // QQ图标
                  title: "QQ支付",
                  desc: "链接商户和支付通道。不介入资金清分",
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  icon: "/images/pay/国际物流.svg", // 二维码图标
                  title: "二维码收款",
                  desc: "手机扫描二维码以绑定支付方式",
                  color: "bg-indigo-100 text-indigo-600"
                },
                {
                  icon: "/images/pay/跨境航旅.svg", // 用户图标
                  title: "个人码收款",
                  desc: "一站式开通主流电子钱包的二维码支付",
                  color: "bg-cyan-100 text-cyan-600"
                },
                {
                  icon: "/images/pay/全球收款账户.svg", // 商店图标
                  title: "商家码收款",
                  desc: "支持多商户轮训，提升顾客付款效率",
                  color: "bg-orange-100 text-orange-600"
                }
              ].map((payment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                >
                  {/* 使用本地SVG图标 */}
                  <div className={`w-16 h-16 ${payment.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Image
                      src={payment.icon}
                      alt={payment.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{payment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{payment.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 系统亮点 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 lg:p-16 text-white max-w-c-1390 mx-auto mb-32"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">系统亮点</h2>
              <p className="text-xl opacity-90">轻量级，高并发，多重防掉单协议，拒绝掉单！</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "三网内置免挂免输云端全部走本地！",
                "自研微信PC免输自挂软件！",
                "自研微信UOS过登录IP检测！",
                "自研微信免输免挂过IP检测非IMAC云端，无封号风险！",
                "自研支付宝账单自动申请应用+秘钥一键配置！",
                "自研三网同系统相互对接（各地站长几百对接）",
                "无门槛微信公众号通知，通知更及时！",
                "自研内置三网互联登录，无门槛即可扫码登录！",
                "自研PHP自动监控，无需设置计划任务！"
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="flex items-start space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                >
                  {/* 使用本地SVG图标 */}
                  <Image
                    src="/images/pay/全球付款.svg"
                    alt="checkmark"
                    width={20}
                    height={20}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span className="opacity-90 leading-relaxed">{highlight}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                立即体验
              </button>
            </div>
          </motion.div>

          {/* 价格方案 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-c-1390 mx-auto mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">价格方案</h2>
              <p className="text-xl text-gray-600">选择适合您的方案，开启支付之旅</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "基础版",
                  price: "¥299",
                  period: "/月",
                  features: ["支持微信支付", "支持支付宝", "基础API接口", "邮件通知", "基础技术支持"],
                  popular: false
                },
                {
                  name: "专业版",
                  price: "¥599",
                  period: "/月",
                  features: ["包含基础版功能", "支持QQ钱包", "高级API接口", "短信通知", "优先技术支持", "数据分析"],
                  popular: true
                },
                {
                  name: "企业版",
                  price: "¥999",
                  period: "/月",
                  features: ["包含专业版功能", "定制化开发", "专属客服", "7x24小时支持", "高级数据分析", "白标解决方案"],
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg border-2 ${
                    plan.popular ? 'border-blue-500 ring-4 ring-blue-500/10 scale-105' : 'border-gray-200'
                  } hover:shadow-xl transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        推荐
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {/* 使用本地SVG图标 */}
                        <Image
                          src="/images/pay/跨境电商.svg"
                          alt="checkmark"
                          width={16}
                          height={16}
                          className="mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                  }`}>
                    选择方案
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 系统介绍 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-c-1390 mx-auto mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">系统介绍</h2>
              <p className="text-xl text-gray-600">了解PayPHP支付系统的强大功能</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">为什么选择PayPHP？</h3>
                <div className="space-y-6">
                  {[
                    { icon: "/images/pay/全球收单.svg", title: "高性能", desc: "轻量级架构，支持高并发处理" }, // 火箭图标
                    { icon: "/images/pay/数娱出海_blue.svg", title: "安全可靠", desc: "多重防掉单协议，确保交易安全" }, // 锁图标
                    { icon: "/images/pay/全球领跑.svg", title: "易于集成", desc: "简单的API接口，快速接入" }, // 目标图标
                    { icon: "/images/pay/商品寻源.svg", title: "多平台支持", desc: "支持微信、支付宝、QQ钱包等" }, // 手机图标
                    { icon: "/images/pay/留学教育.svg", title: "定制化", desc: "支持个性化定制开发" }, // 设置图标
                    { icon: "/images/pay/退税管家.svg", title: "专业支持", desc: "7x24小时技术支持服务" } // 对话图标
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      {/* 使用本地SVG图标 */}
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="text-blue-600"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 lg:p-12 text-white"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-8">技术优势</h3>
                <div className="space-y-6">
                  {[
                    "自研免挂协议，无封号风险",
                    "云端本地化处理，数据更安全",
                    "自动监控系统，无需手动维护",
                    "实时状态检测，自动轮训通道"
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-300 rounded-full flex-shrink-0"></div>
                      <span className="text-lg opacity-90">{advantage}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <h4 className="text-xl font-semibold mb-3">立即开始</h4>
                  <p className="opacity-90 mb-6 leading-relaxed">
                    加入数千家企业的选择，体验专业的支付解决方案
                  </p>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                    免费试用
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 底部CTA - 现代简约卡片式 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <div className="bg-white border-2 border-blue-100 rounded-lg p-12 relative overflow-hidden">
              {/* 几何装饰元素 */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-50 rounded-lg rotate-45 translate-x-12 translate-y-12"></div>
              <div className="absolute top-1/2 right-0 w-16 h-16 bg-blue-200 rounded-full translate-x-8"></div>
              
              {/* 内容区域 */}
              <div className="relative z-10">
                {/* 标签 */}
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  立即开始
                </div>
                
                <h2 className="text-4xl font-bold text-black mb-4">准备开始了吗？</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  立即接入我们的支付系统，开启您的数字化支付之旅。专业团队为您提供全程技术支持。
                </p>
                
                {/* CTA按钮组 */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group">
                    <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    免费试用
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center group">
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    联系销售
                  </button>
                </div>
                
                {/* 信任指标 */}
                <div className="mt-8 pt-8 border-t border-blue-100">
                  <p className="text-sm text-gray-500 mb-4">已有 1000+ 企业选择我们</p>
                  <div className="flex justify-center items-center space-x-8 text-gray-400">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">安全可靠</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm">快速接入</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                      </svg>
                      <span className="text-sm">24/7支持</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
    </div>
  );
};

export default Auth;
