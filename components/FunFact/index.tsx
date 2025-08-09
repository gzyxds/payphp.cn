"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-linear-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-linear-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

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
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            {/* 支付企业相关的标题 */}
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              全球企业信赖的支付解决方案
            </h2>
            {/* 支付企业相关的描述文案 */}
            <p className="mx-auto lg:w-11/12">
              我们为全球数万家企业提供安全、稳定、高效的支付服务，
              覆盖多种支付场景，助力企业数字化转型和业务增长。
              银行级安全保障，7×24小时技术支持，让支付更简单。
            </p>
          </motion.div>

          {/* 支付企业相关的数据统计 */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            {/* 第一个数据：服务企业数量 */}
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
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                50K+
              </h3>
              <p className="text-lg lg:text-para2">服务企业客户</p>
            </motion.div>
            
            {/* 第二个数据：日交易笔数 */}
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                100万+
              </h3>
              <p className="text-lg lg:text-para2">日交易笔数</p>
            </motion.div>
            
            {/* 第三个数据：系统稳定性 */}
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                99.99%
              </h3>
              <p className="text-lg lg:text-para2">系统稳定性</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
