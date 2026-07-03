"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

interface PricingPlan {
  price: string;
  period: string;
  title: string;
  description: string;
  features: string[];
  isRecommended: boolean;
  ariaLabel: string;
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" fill="currentColor" />
  </svg>
);

const pricingPlans: PricingPlan[] = [
  {
    price: "¥0",
    period: "/7天",
    title: "体验套餐",
    description: "体验套餐无售后",
    features: ["费率 3.00%", "每日限额 100元", "每月限额 1000元", "通道数无限制", "通道账号无限制"],
    isRecommended: false,
    ariaLabel: "选择基础版按钮",
  },
  {
    price: "¥19.89",
    period: "/30天",
    title: "月度会员",
    description: "套餐说明月度会员",
    features: ["费率 0.50%", "每日限额无限制", "每月限额无限制", "通道数无限制", "通道账号无限制"],
    isRecommended: true,
    ariaLabel: "选择专业版按钮",
  },
  {
    price: "¥199",
    period: "/90天",
    title: "季度会员",
    description: "套餐说明季度会员",
    features: ["费率 0.20%", "每日限额无限制", "每月限额无限制", "通道数无限制", "通道账号无限制"],
    isRecommended: false,
    ariaLabel: "选择企业版按钮",
  },
];

const Pricing = () => {
  return (
    <>
      <section className="overflow-hidden pb-16 pt-12 lg:pb-25 lg:pt-15 xl:pb-30">
        <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `费率方案`,
                subtitle: `透明的支付费率`,
                description: `选择最适合您业务的支付方案，无隐藏费用，按需付费。专业的支付服务，助力企业降本增效。`,
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-c-1450 px-4 md:px-8 lg:mt-15 xl:mt-20 2xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 1390px"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-7.5 xl:gap-12.5">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className="animate_top group relative rounded-lg border border-stroke bg-white p-4 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full md:w-[45%] lg:w-1/3 sm:p-6 xl:p-12.5"
              >
                {plan.isRecommended && (
                  <div className="absolute -right-2 top-4 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-3 py-1 text-xs font-medium uppercase text-white sm:-right-3.5 sm:top-7.5 sm:px-4.5 sm:py-1.5 sm:text-metatitle">
                    推荐
                  </div>
                )}

                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:mb-7.5 sm:text-3xl xl:text-sectiontitle3">
                  {plan.price}{" "}
                  <span className="text-sm text-waterloo dark:text-manatee sm:text-regular">
                    {plan.period}
                  </span>
                </h3>
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  {plan.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">{plan.description}</p>

                <div className="mt-6 border-t border-stroke pb-8 pt-6 dark:border-strokedark sm:mt-9 sm:pb-12.5 sm:pt-9">
                  <ul className="space-y-3 sm:space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-sm text-black dark:text-manatee sm:text-base">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://merch.PaYphp.cn/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={plan.ariaLabel}
                  className="group/btn inline-flex items-center gap-2 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary sm:gap-2.5"
                >
                  <span className="text-sm duration-300 group-hover/btn:pr-2 sm:text-base">
                    选择方案
                  </span>
                  <ArrowIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
