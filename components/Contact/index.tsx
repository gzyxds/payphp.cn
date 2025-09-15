"use client";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  // 联系方式数据
  const contactMethods = [
    {
      title: "商务咨询",
      description: "了解产品详情、合作方案、定价等",
      items: [
        {
          label: "商务邮箱",
          value: "business@payphp.com",
          type: "email"
        },
        {
          label: "咨询热线",
          value: "400-888-9999",
          type: "phone"
        }
      ]
    },
    {
      title: "技术支持",
      description: "获取技术帮助、问题排查、故障处理",
      items: [
        {
          label: "技术邮箱",
          value: "support@payphp.com",
          type: "email"
        },
        {
          label: "技术热线",
          value: "400-777-8888",
          type: "phone"
        }
      ]
    },
    {
      title: "投诉建议",
      description: "提交产品建议、服务投诉",
      items: [
        {
          label: "客服邮箱",
          value: "feedback@payphp.com",
          type: "email"
        }
      ]
    }
  ];

  // 办公地点数据
  const officeLocations = [
    {
      city: "北京总部",
      address: "北京市朝阳区建国门外大街1号国贸大厦A座2801室",
      phone: "010-8888-9999"
    },
    {
      city: "上海分公司",
      address: "上海市浦东新区陆家嘴环路1000号恒生银行大厦15楼",
      phone: "021-8888-9999"
    },
    {
      city: "深圳分公司",
      address: "深圳市南山区科技园科发路8号金融基地大厦5楼",
      phone: "0755-8888-9999"
    }
  ];

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* 页面标题 */}
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
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl mb-4">
              联系我们
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              无论您有任何问题、建议或合作意向，我们的团队都随时准备为您提供专业支持和解决方案
            </p>
          </motion.div>

          {/* 联系方式卡片 */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {method.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                      {method.description}
                    </p>

                    <div className="space-y-4">
                      {method.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex flex-col">
                          <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            {item.label}
                          </span>
                          {item.type === "email" ? (
                            <a
                              href={`mailto:${item.value}`}
                              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <a
                              href={`tel:${item.value}`}
                              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                            >
                              {item.value}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 二维码区域 */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                扫码联系我们
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-12">
                {/* 微信客服二维码 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                    <img
                      src="/images/about/qq.png"
                      alt="微信客服二维码"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-black dark:text-white">联系客服</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    7×24小时在线服务
                  </p>
                </div>

                {/* 商务合作二维码 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                    <img
                      src="/images/about/qqq.png"
                      alt="商户交流"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-black dark:text-white">商务交流</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    商户运营交流
                  </p>
                </div>

                {/* 技术支持二维码 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                    <img
                      src="/images/about/qq.png"
                      alt="技术支持二维码"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-black dark:text-white">技术支持</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    接入指导与技术答疑
                  </p>
                </div>

                {/* 公众号二维码 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                    <img
                      src="/images/about/gzh.jpg"
                      alt="公众号二维码"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-black dark:text-white">官方公众号</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    获取最新资讯与动态
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 办公地点 */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              办公地点
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {officeLocations.map((office, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {office.city}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {office.address}
                  </p>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
