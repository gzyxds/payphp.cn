"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterCategory {
  title: string;
  value: string;
  links: FooterLink[];
}

const footerCategories: FooterCategory[] = [
  {
    title: "产品服务",
    value: "products",
    links: [
      { label: "支付接口", href: "#" },
      { label: "商户系统", href: "#" },
      { label: "数据分析", href: "#" },
      { label: "风控系统", href: "#" },
    ],
  },
  {
    title: "解决方案",
    value: "solutions",
    links: [
      { label: "电商支付", href: "#" },
      { label: "游戏支付", href: "#" },
      { label: "社交支付", href: "#" },
      { label: "动漫支付", href: "#" },
    ],
  },
  {
    title: "支持与服务",
    value: "support",
    links: [
      { label: "帮助文档", href: "https://doc.PaYphp.cn/" },
      { label: "项目文档", href: "#" },
      { label: "技术支持", href: "#" },
      { label: "联系我们", href: "#" },
    ],
  },
];

const qrCodes = [
  { src: "/images/about/qq.png", alt: "联系我们二维码", label: "联系我们" },
  { src: "/images/about/gzh.jpg", alt: "关注我们二维码", label: "关注我们" },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1450 px-4 md:px-8 2xl:px-0">
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-6 sm:gap-8 lg:justify-between lg:gap-0">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top w-full sm:w-1/2 lg:w-1/4"
            >
              <a href="/" className="relative">
                <Image width={110} height={80} src="/images/logo/logo-light.svg" alt="Logo" className="dark:hidden" />
                <Image width={110} height={80} src="/images/logo/logo-dark.svg" alt="Logo" className="hidden dark:block" />
              </a>
              <p className="mb-6 mt-5 text-sm sm:text-base leading-relaxed">
                我们致力于为用户提供最优质的产品和服务体验。
              </p>
              <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">联系我们</p>
              <a href="#" className="text-itemtitle font-medium text-black dark:text-white break-all">
                PaYphp@.cn
              </a>
            </motion.div>

            {/* Mobile: Accordion */}
            <div className="w-full md:hidden">
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <Accordion type="single" collapsible>
                  {footerCategories.map((cat) => (
                    <AccordionItem key={cat.value} value={cat.value}>
                      <AccordionTrigger>{cat.title}</AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {cat.links.map((link) => (
                            <li key={link.label}>
                              <a href={link.href} className="mb-3 inline-block hover:text-primary">
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Mobile QR codes */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top mt-8"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">联系我们</h4>
                <div className="flex flex-row gap-4 sm:gap-6">
                  {qrCodes.map((qr) => (
                    <div key={qr.label} className="flex flex-col items-center">
                      <Image
                        width={100}
                        height={100}
                        src={qr.src}
                        alt={qr.alt}
                        className="border border-stroke p-1 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                      />
                      <p className="mt-2 text-xs sm:text-sm text-center">{qr.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Desktop columns */}
            <div className="hidden w-full flex-col gap-8 md:flex md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
              {footerCategories.map((cat) => (
                <motion.div
                  key={cat.value}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">{cat.title}</h4>
                  <ul>
                    {cat.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="mb-3 inline-block hover:text-primary">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Desktop QR codes */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">联系我们</h4>
                <div className="flex flex-row gap-4 lg:gap-6">
                  {qrCodes.map((qr) => (
                    <div key={qr.label} className="flex flex-col items-center">
                      <Image
                        width={100}
                        height={100}
                        src={qr.src}
                        alt={qr.alt}
                        className="border border-stroke p-1 w-24 h-24 lg:w-28 lg:h-28"
                      />
                      <p className="mt-2 text-sm text-center">{qr.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 border-t border-stroke py-6 dark:border-strokedark sm:gap-5 lg:flex-row lg:justify-between lg:gap-0 lg:py-7">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <li><a href="#" className="hover:text-primary text-sm sm:text-base">中文</a></li>
              <li><a href="#" className="hover:text-primary text-sm sm:text-base">隐私政策</a></li>
              <li><a href="#" className="hover:text-primary text-sm sm:text-base">支持</a></li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
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

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >
            <p className="text-xs sm:text-sm text-center">&copy; 2024 PaYphp. 保留所有权利。</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
