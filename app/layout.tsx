import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 元数据配置
export const metadata: Metadata = {
  title: {
    default: "PayPHP.cn - 专业的支付解决方案",
    template: "%s | PayPHP.cn"
  },
  description: "PayPHP.cn 提供专业的支付解决方案，支持多种支付方式，安全可靠，易于集成。",
  keywords: ["支付", "PayPHP", "支付解决方案", "在线支付", "支付接口"],
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
  },
  twitter: {
    card: "summary_large_image",
    title: "PayPHP.cn - 专业的支付解决方案",
    description: "PayPHP.cn 提供专业的支付解决方案，支持多种支付方式，安全可靠，易于集成。",
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
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}