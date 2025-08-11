import Products from "@/components/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品介绍 - PayPHP聚合支付系统功能特性",
  description: "详细了解PayPHP聚合支付系统的核心功能，包括多渠道支付接入、实时到账、安全防护、数据统计等专业特性，助力您的业务快速发展。",
  keywords: ["PayPHP产品", "聚合支付功能", "支付系统特性", "多渠道支付", "支付接口"],
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
