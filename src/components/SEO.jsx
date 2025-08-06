import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO组件 - 用于设置页面的SEO信息
 * @param {Object} props
 * @param {string} props.title - 页面标题
 * @param {string} props.description - 页面描述
 * @param {string} props.keywords - 页面关键词，以逗号分隔
 * @param {string} props.canonicalUrl - 规范URL
 * @param {Object} props.ogData - Open Graph数据
 * @param {string} props.ogData.title - OG标题
 * @param {string} props.ogData.description - OG描述
 * @param {string} props.ogData.image - OG图片URL
 * @param {string} props.ogData.url - OG URL
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogData = {}
}) => {
  const siteTitle = '支付宝开放平台 - 全球领先的支付解决方案';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogData.title || fullTitle} />
      {ogData.description && <meta property="og:description" content={ogData.description} />}
      {ogData.image && <meta property="og:image" content={ogData.image} />}
      {ogData.url && <meta property="og:url" content={ogData.url} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogData.title || fullTitle} />
      {ogData.description && <meta name="twitter:description" content={ogData.description} />}
      {ogData.image && <meta name="twitter:image" content={ogData.image} />}
    </Helmet>
  );
};

export default SEO;