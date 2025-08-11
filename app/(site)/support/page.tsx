import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "技术支持 - PayPHP专业客服与技术服务",
  description: "PayPHP提供7x24小时专业技术支持服务，包括接入指导、问题解答、系统维护等全方位技术支持，确保您的支付系统稳定运行。",
  keywords: ["PayPHP技术支持", "客服服务", "技术咨询", "系统维护", "接入指导"],
  openGraph: {
    title: "技术支持 - PayPHP专业客服与技术服务",
    description: "PayPHP提供7x24小时专业技术支持服务，包括接入指导、问题解答、系统维护等全方位技术支持。",
    url: "/support",
    type: "website",
  },
  alternates: {
    canonical: "/support",
  },
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
