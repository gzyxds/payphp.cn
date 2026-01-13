import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "用户注册 - 开始使用PaYphp支付系统",
  description: "注册PaYphp账户，立即开始使用专业的聚合支付系统。快速接入多种支付方式，享受安全稳定的支付服务。",
  keywords: ["PaYphp注册", "用户注册", "支付系统注册", "账户开通", "免费试用"],
  openGraph: {
    title: "用户注册 - 开始使用PaYphp支付系统",
    description: "注册PaYphp账户，立即开始使用专业的聚合支付系统。快速接入多种支付方式，享受安全稳定的支付服务。",
    url: "/auth/signup",
    type: "website",
  },
  alternates: {
    canonical: "/auth/signup",
  },
  robots: {
    index: false, // 注册页面通常不需要被搜索引擎索引
    follow: true,
  },
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
