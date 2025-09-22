import Products from "@/components/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "支付官网|易支付即时到账|支付系统源码|在线支付系统|免签约聚合支付系统",
  description: "码支付平台是云端免挂机监控免签约进件的聚合支付系统;保障每位商户资金即时到账;解决站长网站收款难题。帮助商家快速集成支付接口,提供支付宝商家赞赏码,微信个人收款码,QQ钱包等众多收款方式！",
  keywords: ["码支付", "扫码支付", "易支付", "聚合支付", "支付平台", "第三方支付", "云支付", "微信支付", "个人收款码", "源支付", "支付接口", "收款平台", "支付系统", "网站收款", "站长支付", "xarr支付系统", "收款网站"],
  openGraph: {
    title: "产品介绍 - PayPHP聚合支付系统功能特性",
    description: "详细了解PayPHP聚合支付系统的核心功能，包括多渠道支付接入、实时到账、安全防护、数据统计等专业特性。",
    url: "/products",
    type: "website",
  },
  alternates: {
    canonical: "/products",
  },
};

const ProductsPage = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default ProductsPage;
