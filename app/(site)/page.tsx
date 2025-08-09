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
  title: "PayPay - 安全高效的支付解决方案",

  // other metadata
  description: "PayPay提供安全、可靠、高效的支付解决方案，助力企业数字化转型，连接全球支付网络"
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
