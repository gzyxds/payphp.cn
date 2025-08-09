import type { Metadata } from 'next';
import Industry from '@/components/Industry';

export const metadata: Metadata = {
  title: '行业解决方案 - PayPHP',
  description: '为各行各业提供专业的支付解决方案，满足不同行业的特定需求。',
};

export default function IndustryPage() {
  return <Industry />;
}