"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

interface PayIcon {
  type: 'icon';
  src: string;
  alt: string;
  bg: string;
  hoverBg: string;
  width: number;
  height: number;
  size?: number;
}

interface PayDot {
  type: 'dot';
  size: number;
  color: string;
}

type GridItem = PayIcon | PayDot;

const gridItems: GridItem[] = [
  { type: 'icon', src: "/images/pay/global-payment.svg", alt: "数字钱包", bg: "bg-blue-600", hoverBg: "hover:bg-blue-700", width: 32, height: 32 },
  { type: 'dot', size: 11, color: "#1E90FF" },
  { type: 'icon', src: "/images/pay/cross-border-ecommerce.svg", alt: "移动支付", bg: "bg-slate-800", hoverBg: "hover:bg-slate-900", width: 32, height: 32 },
  { type: 'dot', size: 15, color: "#00C851" },
  { type: 'icon', src: "/images/pay/global-acquiring.svg", alt: "安全支付", bg: "bg-white border border-gray-200", hoverBg: "hover:bg-gray-50", width: 32, height: 32 },
  { type: 'icon', src: "/images/pay/digital-entertainment.svg", alt: "Mastercard支付", bg: "bg-white border border-gray-200", hoverBg: "hover:bg-gray-50", width: 32, height: 32 },
  { type: 'dot', size: 13, color: "#FF6B35" },
  { type: 'icon', src: "/images/pay/global-leader.svg", alt: "银行卡支付", bg: "bg-cyan-500", hoverBg: "hover:bg-cyan-600", width: 28, height: 28, size: 64 },
  { type: 'dot', size: 17, color: "#FFD700" },
  { type: 'icon', src: "/images/pay/product-sourcing.svg", alt: "PayPal支付", bg: "bg-white border border-gray-200", hoverBg: "hover:bg-gray-50", width: 32, height: 32 },
  { type: 'icon', src: "/images/pay/study-abroad.svg", alt: "数字货币", bg: "bg-blue-700", hoverBg: "hover:bg-blue-800", width: 32, height: 32 },
  { type: 'dot', size: 12, color: "#9C27B0" },
  { type: 'icon', src: "/images/pay/global-leader.svg", alt: "银行卡支付", bg: "bg-slate-700", hoverBg: "hover:bg-slate-800", width: 32, height: 32 },
  { type: 'dot', size: 14, color: "#E91E63" },
  { type: 'icon', src: "/images/pay/foreign-trade-b2b.svg", alt: "Google Pay", bg: "bg-slate-600", hoverBg: "hover:bg-slate-700", width: 32, height: 32 },
  { type: 'dot', size: 16, color: "#FF5722" },
  { type: 'icon', src: "/images/pay/international-logistics.svg", alt: "Stripe支付", bg: "bg-blue-800", hoverBg: "hover:bg-blue-900", width: 32, height: 32 },
];

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Integration = () => {
  return (
    <section>
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: `支付集成`,
            subtitle: `丰富的支付渠道，灵活的API接口，快速集成各类支付场景`,
            description: `我们提供完善的支付API和SDK，支持多种主流支付方式，包括银行卡支付、移动支付、数字钱包等。简单几行代码即可完成集成，让您的业务快速上线收款功能。`,
          }}
        />
      </div>

      <div className="relative z-50 mx-auto mt-15 max-w-c-1450 px-4 md:px-8 xl:mt-20 2xl:px-0">
        <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
          <Image
            width={1200}
            height={400}
            sizes="(max-width: 768px) 100vw"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
          />
          <Image
            width={1200}
            height={400}
            sizes="(max-width: 768px) 100vw"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
          />
        </div>

        <div className="mb-12 text-center">
          <h3 className="mb-4 text-xl font-semibold text-black dark:text-white md:text-2xl">
            支持的支付方式
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            集成主流支付渠道，满足不同用户的支付需求
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-y-10">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              {item.type === 'dot' ? (
                <div
                  className="rounded-full"
                  style={{ width: item.size, height: item.size, backgroundColor: item.color }}
                ></div>
              ) : (
                <div
                  className={`inline-flex items-center justify-center rounded-lg transition-all hover:scale-105 ${item.bg} ${item.hoverBg}`}
                  style={{ width: item.size || 80, height: item.size || 80 }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

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
  );
};

export default Integration;
