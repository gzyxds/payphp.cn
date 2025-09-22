import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "在线支付平台_微信支付_支付宝支付_聚合支付平台官网",
  description: "PaYphp易支付第三方免签约支付产品，支持，手机APP支付，APP内实现收款，手机网页支付，手机浏览器内实现收款，公众号支付，微信浏览器内实现收款，PC网页支付，PC浏览器内实现收款，线下扫码支付",
  keywords: ["PaYphp,易支付", "易支付官网", "第三方支付收款"],
  openGraph: {
    title: "在线支付平台_微信支付_支付宝支付_聚合支付平台官网",
    description: "PaYphp易支付第三方免签约支付产品，支持，手机APP支付，APP内实现收款，手机网页支付，手机浏览器内实现收款，公众号支付，微信浏览器内实现收款，PC网页支付，PC浏览器内实现收款，线下扫码支付",
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
