import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/SEO/StructuredData";
import {
  generateOrganizationStructuredData,
  generateWebSiteStructuredData
} from "@/lib/seo-config";

const inter = Inter({ subsets: ["latin"] });

// 元数据配置
export const metadata: Metadata = {
  title: {
    default: "PaYphp.cn - 专业的在线支付解决方案",
    template: "%s | PaYphp.cn"
  },
  description: "PayPHP支付系统是专业的在线支付解决方案提供商，支持微信支付、支付宝支付、QQ支付、银联支付等多种支付方式。提供免挂免输、云端本地、自研协议、无封号风险等核心优势，实现聚合支付、多渠道收款、实时到账、自动分账功能。为电商、游戏、社交、动漫等行业提供安全稳定、高效便捷的支付接口和支付系统开发服务，助力企业快速搭建支付平台，提升收款效率",
  keywords: ["支付", "PaYphp", "支付解决方案", "在线支付", "支付接口", "聚合支付", "免签支付"],
  authors: [{ name: "PaYphp Team" }],
  creator: "PaYphp Team",
  publisher: "PaYphp.cn",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://PaYphp.cn'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    title: "PaYphp.cn - 专业的在线支付解决方案",
    description: "PayPHP支付系统是专业的在线支付解决方案提供商，支持微信支付、支付宝支付、QQ支付、银联支付等多种支付方式。提供免挂免输、云端本地、自研协议、无封号风险等核心优势，实现聚合支付、多渠道收款、实时到账、自动分账功能。为电商、游戏、社交、动漫等行业提供安全稳定、高效便捷的支付接口和支付系统开发服务，助力企业快速搭建支付平台，提升收款效率",
    siteName: "PaYphp.cn",
    images: [
      {
        url: "/images/logo/logo-dark.svg",
        width: 800,
        height: 400,
        alt: "PaYphp.cn - 专业的在线支付解决方案",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PaYphp.cn - 专业的在线支付解决方案",
    description: "PaYphp.cn 提供专业的支付解决方案，集成多种支付方式，安全稳定，快速部署，满足企业全方位支付需求。",
    images: ["/images/logo/logo-dark.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
    other: {
      // 百度站长验证
      baidu: process.env.BAIDU_SITE_VERIFICATION || '',
      // 360搜索验证
      '360': process.env.QIHOO_SITE_VERIFICATION || '',
    },
  },
  // 添加其他元数据
  category: 'technology',
  classification: '支付系统',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icon/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* 结构化数据 */}
        <StructuredData data={generateOrganizationStructuredData()} />
        <StructuredData data={generateWebSiteStructuredData()} />

        {/* 预连接到外部资源 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS预解析 */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//hm.baidu.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        {/* 百度统计 - 放在 body 末尾以优化页面加载性能 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?c82a4b12523c32f4ebd3850b994d5770";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
