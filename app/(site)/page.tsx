import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import Solution from "@/components/Solution";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "payphp_码支付_易支付官网_支付系统源码",

  // other metadata
  description: "Payphp是行业领先的个人支付免签约易码支付系统平台，一站式集成接入网站收款api接口、支持支付宝、微信、财付通、QQ钱包、微信支付、收款码等、帮助开发者快速集成到自己相应产品，效率高，见效快，费率低！",
  keywords: "payphp,码支付官网,易支付平台,在线支付系统,免签约聚合支付系统源码"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <Solution />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
