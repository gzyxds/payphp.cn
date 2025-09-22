import Auth from "@/components/Auth/Auth";
import { Metadata } from "next";

/**
 * 支付认证页面的元数据配置
 * 遵循Next.js App Router的Metadata API规范
 */
export const metadata: Metadata = {
  title: "码支付_易支付_微信支付_支付宝支付_在线支付平台_聚合支付系统源码",
  description: "码支付，易支付，聚合支付系统是专业的在线支付解决方案提供商，支持微信支付、支付宝支付、QQ支付、银联支付等多种支付方式。提供免挂免输、云端本地、自研协议、无封号风险等核心优势，实现聚合支付、多渠道收款、实时到账、自动分账功能。",
  keywords: ["码支付，易支付，在线支付平台，聚合支付系统授权，支付系统购买，聚合支付授权，支付系统源码，支付接口授权"],
  openGraph: {
    title: "码支付_易支付_在线支付平台_聚合支付系统 - 聚合支付系统授权购买",
    description: "码支付，易支付，聚合支付系统是专业的在线支付解决方案提供商，支持微信支付、支付宝支付、QQ支付、银联支付等多种支付方式。提供免挂免输、云端本地、自研协议、无封号风险等核心优势，实现聚合支付、多渠道收款、实时到账、自动分账功能。",
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
