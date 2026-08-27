import type { Metadata } from "next";
import TermsOfService from "@/components/Legal/TermsOfService";

export const metadata: Metadata = {
  title: "服务条款 - PaYphp聚合支付服务协议",
  description:
    "PaYphp服务条款：约定账户资质、服务说明、费用与结算、用户义务与禁止行为、责任限制及争议解决等您使用聚合支付服务须遵守的协议。",
  keywords: ["服务条款", "用户协议", "PaYphp", "聚合支付", "服务协议"],
  openGraph: {
    title: "服务条款 - PaYphp聚合支付服务协议",
    description:
      "PaYphp服务条款：约定账户资质、服务说明、费用与结算、用户义务与禁止行为、责任限制及争议解决等您使用聚合支付服务须遵守的协议。",
    url: "/terms",
    type: "website",
  },
  alternates: {
    canonical: "/terms",
  },
};

const TermsPage = () => {
  return <TermsOfService />;
};

export default TermsPage;
