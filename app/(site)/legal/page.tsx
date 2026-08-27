import type { Metadata } from "next";
import LegalNotice from "@/components/Legal/LegalNotice";

export const metadata: Metadata = {
  title: "法律声明 - PaYphp网站声明与免责条款",
  description:
    "PaYphp法律声明：明确网站内容知识产权、支付服务合规要求、禁止用途、不可抗力及法律适用与管辖等免责与边界说明。",
  keywords: ["法律声明", "免责声明", "PaYphp", "网站声明", "支付合规"],
  openGraph: {
    title: "法律声明 - PaYphp网站声明与免责条款",
    description:
      "PaYphp法律声明：明确网站内容知识产权、支付服务合规要求、禁止用途、不可抗力及法律适用与管辖等免责与边界说明。",
    url: "/legal",
    type: "website",
  },
  alternates: {
    canonical: "/legal",
  },
};

const LegalPage = () => {
  return <LegalNotice />;
};

export default LegalPage;
