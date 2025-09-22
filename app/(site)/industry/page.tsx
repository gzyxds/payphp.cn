import type { Metadata } from 'next';
import Industry from '@/components/Industry';

export const metadata: Metadata = {
  title: '码支付官网 - 行业领先的免签约云支付平台，支持支付宝、微信、QQ钱包"',
  description: 'PaYphp提供免签约的聚合支付解决方案，支持微信支付、支付宝等多种支付方式，资金实时到账，全天候客服服务',
  keywords: ['码支付', '码支付官网', '免签码支付', '支付接口', '扫码支付', '微信支付', '源支付', '源支付官网', '实时到账支付平台'],
  openGraph: {
    title: '码支付官网 - 行业领先的免签约云支付平台，支持支付宝、微信、QQ钱包',
    description: 'PaYphp提供免签约的聚合支付解决方案，支持微信支付、支付宝等多种支付方式，资金实时到账，全天候客服服务',
    url: '/industry',
    type: 'website',
  },
  alternates: {
    canonical: '/industry',
  },
};

export default function IndustryPage() {
  return <Industry />;
}
