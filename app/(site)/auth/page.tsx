import Auth from "@/components/Auth/Auth";
import { Metadata } from "next";

/**
 * 支付认证页面的元数据配置
 * 遵循Next.js App Router的Metadata API规范
 */
export const metadata: Metadata = {
  title: "PaYphp - 聚合支付系统授权购买",
  description: "PaYphp支付系统是专业的在线支付解决方案提供商，支持微信支付、支付宝支付、QQ支付、银联支付等多种支付方式。提供免挂免输、云端本地、自研协议、无封号风险等核心优势，实现聚合支付、多渠道收款、实时到账、自动分账功能。",
  keywords: ["PaYphp授权", "支付系统购买", "聚合支付授权", "支付系统源码", "支付接口授权"],
  openGraph: {
    title: "PaYphp - 聚合支付系统授权购买",
    description: "获取PaYphp支付系统授权，享受专业的在线支付解决方案，支持多种支付方式，安全可靠，易于集成。",
    url: "/auth",
    type: "website",
  },
  alternates: {
    canonical: "/auth",
  },
};


export default function AuthPage() {
  return <Auth />;
}
