/**
 * SEO配置工具库
 * 用于统一管理网站的SEO配置和元数据
 */

import { Metadata } from "next";

// 网站基础信息配置
export const SITE_CONFIG = {
  name: "PayPHP.cn",
  title: "PayPHP.cn - 专业的支付解决方案",
  description: "PayPHP.cn 提供专业的支付解决方案，支持多种支付方式，安全可靠，易于集成。",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://payphp.cn',
  keywords: ["支付", "PayPHP", "支付解决方案", "在线支付", "支付接口", "聚合支付", "免签支付"],
  author: "PayPHP Team",
  locale: "zh_CN",
  type: "website",
} as const;

// 页面路径与SEO信息映射
export const PAGE_SEO_CONFIG = {
  "/": {
    title: "payphp_码支付_易支付官网_支付系统源码",
    description: "Payphp是行业领先的个人支付免签约易码支付系统平台，一站式集成接入网站收款api接口、支持支付宝、微信、财付通、QQ钱包、微信支付、收款码等、帮助开发者快速集成到自己相应产品，效率高，见效快，费率低！",
    keywords: ["payphp", "码支付官网", "易支付平台", "在线支付系统", "免签约聚合支付系统源码"],
  },
  "/products": {
    title: "产品介绍 - PayPHP聚合支付系统功能特性",
    description: "详细了解PayPHP聚合支付系统的核心功能，包括多渠道支付接入、实时到账、安全防护、数据统计等专业特性，助力您的业务快速发展。",
    keywords: ["PayPHP产品", "聚合支付功能", "支付系统特性", "多渠道支付", "支付接口"],
  },
  "/about": {
    title: "关于我们 - PayPHP团队与企业愿景",
    description: "了解PayPHP团队的发展历程、企业文化和技术愿景。我们致力于为用户提供最专业、最安全的支付解决方案，推动支付行业的创新发展。",
    keywords: ["PayPHP团队", "企业介绍", "公司文化", "支付行业", "技术愿景"],
  },
  "/industry": {
    title: "行业解决方案 - PayPHP多场景支付应用",
    description: "为电商、教育、医疗、餐饮、零售等各行各业提供定制化支付解决方案，满足不同行业的特定支付需求，助力业务增长。",
    keywords: ["行业支付解决方案", "电商支付", "教育支付", "医疗支付", "餐饮支付", "PayPHP行业应用"],
  },
  "/docs": {
    title: "API文档 - PayPHP开发者中心",
    description: "PayPHP开发者文档中心，提供完整的API接口文档、SDK下载、集成指南和最佳实践，帮助开发者快速集成支付功能。",
    keywords: ["PayPHP API", "开发者文档", "支付接口文档", "SDK下载", "集成指南"],
  },
  "/blog": {
    title: "技术博客 - PayPHP支付技术分享",
    description: "PayPHP技术博客，分享支付行业最新技术动态、开发经验、最佳实践和产品更新，助力开发者技术成长。",
    keywords: ["PayPHP博客", "支付技术", "开发经验", "技术分享", "行业动态"],
  },
  "/support": {
    title: "技术支持 - PayPHP专业客服与技术服务",
    description: "PayPHP提供7x24小时专业技术支持服务，包括接入指导、问题解答、系统维护等全方位技术支持，确保您的支付系统稳定运行。",
    keywords: ["PayPHP技术支持", "客服服务", "技术咨询", "系统维护", "接入指导"],
  },
  "/auth": {
    title: "购买源码 - PayPHP支付系统源码授权",
    description: "购买PayPHP支付系统完整源码，获得商业授权和技术支持。专业的聚合支付解决方案，助力您的业务快速发展。",
    keywords: ["PayPHP源码", "支付系统源码", "商业授权", "源码购买", "技术支持"],
  },
} as const;

/**
 * 生成页面元数据配置
 * @param path 页面路径
 * @param customConfig 自定义配置
 * @returns Metadata对象
 */
export function generatePageMetadata(
  path: keyof typeof PAGE_SEO_CONFIG,
  customConfig?: Partial<Metadata>
): Metadata {
  const pageConfig = PAGE_SEO_CONFIG[path];
  
  if (!pageConfig) {
    throw new Error(`SEO config not found for path: ${path}`);
  }

  const metadata: Metadata = {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: `${SITE_CONFIG.url}${path}`,
      type: "website",
      locale: SITE_CONFIG.locale,
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: "summary_large_image",
      title: pageConfig.title,
      description: pageConfig.description,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}${path}`,
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
    ...customConfig,
  };

  return metadata;
}

/**
 * 生成结构化数据 (JSON-LD)
 * @param type 结构化数据类型
 * @param data 数据内容
 * @returns JSON-LD字符串
 */
export function generateStructuredData(type: string, data: any): string {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return JSON.stringify(structuredData);
}

/**
 * 生成面包屑导航结构化数据
 * @param breadcrumbs 面包屑数据
 * @returns JSON-LD字符串
 */
export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>
): string {
  const itemListElement = breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_CONFIG.url}${item.url}`,
  }));

  return generateStructuredData("BreadcrumbList", {
    itemListElement,
  });
}

/**
 * 生成组织信息结构化数据
 * @returns JSON-LD字符串
 */
export function generateOrganizationStructuredData(): string {
  return generateStructuredData("Organization", {
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo/logo.svg`,
    description: SITE_CONFIG.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Chinese",
    },
    sameAs: [
      // 可以添加社交媒体链接
    ],
  });
}

/**
 * 生成网站信息结构化数据
 * @returns JSON-LD字符串
 */
export function generateWebSiteStructuredData(): string {
  return generateStructuredData("WebSite", {
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  });
}