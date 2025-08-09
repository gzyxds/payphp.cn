"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-linear-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-linear-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                立即开启您的支付之旅，提升业务效率
              </h2>
              <p>
                专业的支付解决方案，助力企业快速接入多种支付渠道。
                安全稳定的技术架构，7x24小时技术支持，让您的业务无忧运行。
                现在注册即可享受优惠费率和专属服务。
              </p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                />
                <a
                  href="/auth/signup"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  免费开通账户
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
