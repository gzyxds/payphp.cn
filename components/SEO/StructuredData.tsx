/**
 * 结构化数据组件
 * 用于在页面中插入JSON-LD结构化数据，提升SEO效果
 */

import React from 'react';

interface StructuredDataProps {
  data: string | object;
}

/**
 * 结构化数据组件
 * @param data JSON-LD数据，可以是字符串或对象
 */
const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  const jsonLd = typeof data === 'string' ? data : JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};

export default StructuredData;