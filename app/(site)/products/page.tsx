import Products from "@/components/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayPHP支付系统 - 专业的聚合免签支付解决方案",
  description: "PayPHP是一款专业的聚合免签支付系统，支持微信、支付宝等多种支付方式，提供稳定可靠的支付解决方案。"
};

const ProductsPage = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default ProductsPage;
