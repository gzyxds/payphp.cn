import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 - PayPHP团队与企业愿景",
  description: "了解PayPHP团队的发展历程、企业文化和技术愿景。我们致力于为用户提供最专业、最安全的支付解决方案，推动支付行业的创新发展。",
  keywords: ["PayPHP团队", "企业介绍", "公司文化", "支付行业", "技术愿景"],
  openGraph: {
    title: "关于我们 - PayPHP团队与企业愿景",
    description: "了解PayPHP团队的发展历程、企业文化和技术愿景。我们致力于为用户提供最专业、最安全的支付解决方案。",
    url: "/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
