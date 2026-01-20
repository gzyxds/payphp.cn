import { Metadata } from "next";
import Market from "@/components/Market";

export const metadata: Metadata = {
  title: "应用商店,支付系统源码,支付插件,支付主题",
  description: "PaYphp应用商店，提供各种支付插件、主题等扩展功能，帮助您快速扩展支付系统功能。"
};

export default function MarketPage() {
  return <Market />;
}
