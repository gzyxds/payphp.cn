"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Add Accordion UI for mobile view
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

/**
 * Footer 组件
 * 功能：渲染网站底部，包括品牌信息、底部分类（在移动端为手风琴样式）、联系方式、备案与版权信息。
 * 参数：无
 * 返回值：返回包含底部内容的 React 元素。
 */
const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-6 sm:gap-8 lg:justify-between lg:gap-0">
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-full sm:w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-light.svg"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-dark.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-6 mt-5 text-sm sm:text-base leading-relaxed">
                  我们致力于为用户提供最优质的产品和服务体验。
                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  联系我们
                </p>
                <a
                  href="#"
                  className="text-itemtitle font-medium text-black dark:text-white break-all"
                >
                 PaYphp@.cn
                </a>
              </motion.div>

              {/* Mobile: Accordion for categories */}
              <div className="w-full md:hidden">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  {/*
                    使用单选可折叠模式；不提供 defaultValue，默认全部收起。
                    注意：Radix Accordion 在 type="single" + collapsible 下，未设置 defaultValue 时不会默认展开任何项。
                  */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="products">
                      <AccordionTrigger>产品服务</AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              支付接口
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              商户系统
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              数据分析
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              风控系统
                            </a>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="solutions">
                      <AccordionTrigger>解决方案</AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              电商支付
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              游戏支付
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              社交支付
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              动漫支付
                            </a>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="support">
                      <AccordionTrigger>支持与服务</AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          <li>
                            <a href="https://doc.payphp.cn/" className="mb-3 inline-block hover:text-primary">
                              帮助文档
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              项目文档
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              技术支持
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mb-3 inline-block hover:text-primary">
                              联系我们
                            </a>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>

                {/* Mobile: 联系我们（二维码）模块保持展示 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top mt-8"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    联系我们
                  </h4>

                  <div className="flex flex-row gap-4 sm:gap-6">
                    <div className="flex flex-col items-center">
                      <Image
                        width={100}
                        height={100}
                        src="/images/about/qq.png"
                        alt="联系我们二维码"
                        className="border border-stroke p-1 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                      />
                      <p className="mt-2 text-xs sm:text-sm text-center">联系我们</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <Image
                        width={100}
                        height={100}
                        src="/images/about/payphp.jpg"
                        alt="关注我们二维码"
                        className="border border-stroke p-1 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                      />
                      <p className="mt-2 text-xs sm:text-sm text-center">关注我们</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Desktop: 原有四列布局（包含 3 个分类 + 联系我们） */}
              <div className="hidden w-full flex-col gap-8 md:flex md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                {/* 产品服务分类 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    产品服务
                  </h4>

                  <ul>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        支付接口
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        商户系统
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        数据分析
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        风控系统
                      </a>
                    </li>
                  </ul>
                </motion.div>

                {/* 解决方案分类 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    解决方案
                  </h4>

                  <ul>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        电商支付
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        游戏支付
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        社交支付
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        动漫支付
                      </a>
                    </li>
                  </ul>
                </motion.div>

                {/* 支持与服务分类 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    支持与服务
                  </h4>

                  <ul>
                    <li>
                      <a href="https://doc.payphp.cn/" className="mb-3 inline-block hover:text-primary">
                        帮助文档
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        项目文档
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        技术支持
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 inline-block hover:text-primary">
                        联系我们
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    联系我们
                  </h4>

                  <div className="flex flex-row gap-4 lg:gap-6">
                    <div className="flex flex-col items-center">
                      <Image
                        width={100}
                        height={100}
                        src="/images/about/qq.png"
                        alt="联系我们二维码"
                        className="border border-stroke p-1 w-24 h-24 lg:w-28 lg:h-28"
                      />
                      <p className="mt-2 text-sm text-center">联系我们</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <Image
                        width={100}
                        height={100}
                        src="/images/about/payphp.jpg"
                        alt="关注我们二维码"
                        className="border border-stroke p-1 w-24 h-24 lg:w-28 lg:h-28"
                      />
                      <p className="mt-2 text-sm text-center">关注我们</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-4 border-t border-stroke py-6 dark:border-strokedark sm:gap-5 lg:flex-row lg:justify-between lg:gap-0 lg:py-7">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                <li>
                  <a href="#" className="hover:text-primary text-sm sm:text-base">
                    中文
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary text-sm sm:text-base">
                    隐私政策
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary text-sm sm:text-base">
                    支持
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* ICP备案信息 - 居中显示 */}
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <a
                href="https://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-center break-all"
              >
                赣ICP备2023002309号
              </a>
            </motion.div>

            {/* 版权信息 - 居中显示 */}
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p className="text-xs sm:text-sm text-center">
                &copy; 2024 PaYphp. 保留所有权利。
              </p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
