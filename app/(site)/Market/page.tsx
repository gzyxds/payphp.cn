import { Metadata } from "next";
import Market from "@/components/Market";

export const metadata: Metadata = {
  title: "应用商店 | PayPHP.cn",
  description: "PayPHP应用商店，提供各种支付插件、主题等扩展功能，帮助您快速扩展支付系统功能。"
};

export default function MarketPage() {
  return <Market />;
}