"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `支付集成`,
              subtitle: `丰富的支付渠道，灵活的API接口，快速集成各类支付场景`,
              description: `我们提供完善的支付API和SDK，支持多种主流支付方式，包括银行卡支付、移动支付、数字钱包等。简单几行代码即可完成集成，让您的业务快速上线收款功能。`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>

        {/* 支付合作伙伴展示区域 */}
        <div className="relative z-50 mx-auto mt-15 max-w-c-1390 px-4 md:px-8 xl:mt-20 2xl:px-0">
          {/* 背景装饰 */}
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          
          {/* 支付方式标题 */}
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-xl font-semibold text-black dark:text-white md:text-2xl">
              支持的支付方式
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              集成主流支付渠道，满足不同用户的支付需求
            </p>
          </div>

          {/* 支付方式图标网格 - 使用本地SVG图标 */}
          <div className="flex flex-wrap justify-around gap-y-10">
            {/* 数字钱包 */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-blue-600 transition-all hover:bg-blue-700 hover:scale-105">
                {/* 数字钱包图标 - 使用本地SVG */}
                <Image
                src="/images/pay/全球付款.svg"
                alt="数字钱包"
                width={32}
                height={32}
              />
              </div>
            </motion.div>

            {/* 装饰圆点 */}
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
              className="animate_top w-1/6"
            >
              <div className="h-[11px] w-[11px] rounded-full bg-[#1E90FF]"></div>
            </motion.div>

            {/* 移动支付 */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-slate-800 transition-all hover:bg-slate-900 hover:scale-105">
                {/* 移动支付图标 - 使用本地SVG */}
                <Image
                src="/images/pay/跨境电商.svg"
                alt="移动支付"
                width={32}
                height={32}
              />
              </div>
            </motion.div>

            {/* 装饰圆点 */}
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
              className="animate_top w-1/6"
            >
              <div className="h-[15px] w-[15px] rounded-full bg-[#00C851]"></div>
            </motion.div>

            {/* 安全支付 */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-white border border-gray-200 transition-all hover:bg-gray-50 hover:scale-105">
                {/* Visa图标 - 使用本地SVG */}
                <Image
                  src="/images/pay/全球收单.svg"
                  alt="安全支付"
                  width={32}
                  height={32}
                />
              </div>
            </motion.div>

            {/* PayPal支付 */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-white border border-gray-200 transition-all hover:bg-gray-50 hover:scale-105">
                {/* Mastercard图标 - 使用本地SVG */}
                <Image
                  src="/images/pay/数娱出海_blue.svg"
                  alt="Mastercard支付"
                  width={32}
                  height={32}
                />
              </div>
            </motion.div>

            {/* 装饰圆点 */}
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
              className="animate_top w-1/6"
            >
              <div className="h-[13px] w-[13px] rounded-full bg-[#FF6B35]"></div>
            </motion.div>

            {/* 银行卡支付 */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-500 transition-all hover:bg-cyan-600 hover:scale-105">
                {/* 银行卡图标 - 使用本地SVG */}
                <Image
                  src="/images/pay/全球领跑.svg"
                  alt="银行卡支付"
                  width={28}
                  height={28}
                />
              </div>
            </motion.div>

            {/* 装饰圆点 */}
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
              className="animate_top w-1/6"
            >
              <div className="h-[17px] w-[17px] rounded-full bg-[#FFD700]"></div>
            </motion.div>

            {/* Mastercard */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-white border border-gray-200 transition-all hover:bg-gray-50 hover:scale-105">
                {/* PayPal支付图标 - 使用本地SVG */}
                <Image
                  src="/images/pay/商品寻源.svg"
                  alt="PayPal支付"
                  width={32}
                  height={32}
                />
              </div>
            </motion.div>

            {/* 数字货币 */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-blue-700 transition-all hover:bg-blue-800 hover:scale-105">
                {/* 数字货币图标 - 使用本地SVG */}
                <Image
                src="/images/pay/留学教育.svg"
                alt="数字货币"
                width={32}
                height={32}
              />
              </div>
            </motion.div>

            {/* 装饰圆点 */}
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
              className="animate_top w-1/6"
            >
              <div className="h-[12px] w-[12px] rounded-full bg-[#9C27B0]"></div>
            </motion.div>

            {/* Visa支付 */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-slate-700 transition-all hover:bg-slate-800 hover:scale-105">
                {/* 银行卡支付图标 - 使用本地SVG */}
                <Image
                src="/images/pay/全球领跑.svg"
                alt="银行卡支付"
                width={32}
                height={32}
              />
              </div>
            </motion.div>

            {/* 装饰圆点 */}
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
              className="animate_top w-1/6"
            >
              <div className="h-[14px] w-[14px] rounded-full bg-[#E91E63]"></div>
            </motion.div>

            {/* Google Pay */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-slate-600 transition-all hover:bg-slate-700 hover:scale-105">
                {/* Google Pay图标 - 使用本地SVG */}
                <Image
                  src="/images/pay/外贸B2B.svg"
                  alt="Google Pay"
                  width={32}
                  height={32}
                />
              </div>
            </motion.div>

            {/* 装饰圆点 */}
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
              className="animate_top w-1/6"
            >
              <div className="h-[16px] w-[16px] rounded-full bg-[#FF5722]"></div>
            </motion.div>

            {/* Stripe支付 */}
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
              className="animate_top w-1/6"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-lg bg-blue-800 transition-all hover:bg-blue-900 hover:scale-105">
                {/* Stripe图标 - 使用本地SVG */}
                <Image
                  src="/images/pay/国际物流.svg"
                  alt="Stripe支付"
                  width={32}
                  height={32}
                />
              </div>
            </motion.div>
          </div>

          {/* 更多支付方式提示 */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              还支持更多支付方式，如数字钱包、银行转账等
            </p>
            <div className="mt-6">
              <button className="rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90">
                查看完整支付方式列表
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
