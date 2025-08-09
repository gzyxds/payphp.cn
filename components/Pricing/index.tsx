"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `费率方案`,
                subtitle: `透明的支付费率`,
                description: `选择最适合您业务的支付方案，无隐藏费用，按需付费。专业的支付服务，助力企业降本增效。`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-c-1390 px-4 md:px-8 xl:mt-20 2xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                0.6%{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /笔
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                基础版
              </h4>
              <p>适合初创企业和小型商户，快速接入支付服务。</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    月交易额 ≤ 10万
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    支持微信、支付宝
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    T+1 结算
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    专属客服支持
                  </li>
                </ul>
              </div>

              <button
                aria-label="选择基础版按钮"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  选择方案
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                推荐
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                0.45%{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /笔
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                专业版
              </h4>
              <p>适合成长型企业，提供全面的支付解决方案。</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    月交易额 ≤ 100万
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    支持全渠道支付
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    T+0 快速结算
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    专属客户经理
                  </li>
                </ul>
              </div>

              <button
                aria-label="选择专业版按钮"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  选择方案
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                0.3%{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /笔
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                企业版
              </h4>
              <p>适合大型企业，提供定制化支付解决方案。</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    无交易额限制
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    国际支付通道
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    实时结算服务
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    定制化开发支持
                  </li>
                </ul>
              </div>

              <button
                aria-label="选择企业版按钮"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  选择方案
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
