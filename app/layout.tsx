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
    default: "PayPHP.cn - 专业的支付解决方案",
    template: "%s | PayPHP.cn"
  },
  description: "PayPHP.cn 提供专业的支付解决方案，支持多种支付方式，安全可靠，易于集成。",
  keywords: ["支付", "PayPHP", "支付解决方案", "在线支付", "支付接口", "聚合支付", "免签支付"],
  authors: [{ name: "PayPHP Team" }],
  creator: "PayPHP Team",
  publisher: "PayPHP.cn",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://payphp.cn'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    title: "PayPHP.cn - 专业的支付解决方案",
    description: "PayPHP.cn 提供专业的支付解决方案，支持多种支付方式，安全可靠，易于集成。",
    siteName: "PayPHP.cn",
    images: [
      {
        url: "/images/logo/logo-og.png", // 需要创建OG图片
        width: 1200,
        height: 630,
        alt: "PayPHP.cn - 专业的支付解决方案",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PayPHP.cn - 专业的支付解决方案",
    description: "PayPHP.cn 提供专业的支付解决方案，支持多种支付方式，安全可靠，易于集成。",
    images: ["/images/logo/logo-og.png"],
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
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}