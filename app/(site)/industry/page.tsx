import type { Metadata } from 'next';
import Industry from '@/components/Industry';

export const metadata: Metadata = {
  title: '行业解决方案 - PayPHP多场景支付应用',
  description: '为电商、教育、医疗、餐饮、零售等各行各业提供定制化支付解决方案，满足不同行业的特定支付需求，助力业务增长。',
  keywords: ['行业支付解决方案', '电商支付', '教育支付', '医疗支付', '餐饮支付', 'PayPHP行业应用'],
  openGraph: {
    title: '行业解决方案 - PayPHP多场景支付应用',
    description: '为电商、教育、医疗、餐饮、零售等各行各业提供定制化支付解决方案，满足不同行业的特定支付需求。',
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