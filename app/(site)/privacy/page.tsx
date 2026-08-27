import type { Metadata } from "next";
import PrivacyPolicy from "@/components/Legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "隐私政策 - PaYphp支付服务个人信息保护说明",
  description:
    "PaYphp隐私政策：说明我们如何在您使用聚合支付服务过程中收集、使用、存储与保护个人信息，以及您所享有的查询、更正、删除等权利。",
  keywords: ["隐私政策", "个人信息保护", "PaYphp", "支付服务", "数据保护"],
  openGraph: {
    title: "隐私政策 - PaYphp支付服务个人信息保护说明",
    description:
      "PaYphp隐私政策：说明我们如何在您使用聚合支付服务过程中收集、使用、存储与保护个人信息，以及您所享有的查询、更正、删除等权利。",
    url: "/privacy",
    type: "website",
  },
  alternates: {
    canonical: "/privacy",
  },
};

const PrivacyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPage;
