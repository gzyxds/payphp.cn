import React from 'react';
import { Typography, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { HomeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const NotFound = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: 'calc(100vh - var(--header-height) - var(--footer-height))',
      padding: '48px 24px',
      textAlign: 'center'
    }}>
      <SEO 
        title="页面未找到"
        description="抱歉，您访问的页面不存在或已被移除。请检查URL是否正确，或返回首页继续浏览。"
        canonicalUrl="https://www.paypay.com/404"
      />
      <div style={{ fontSize: '120px', fontWeight: 'bold', color: 'var(--primary-color)', lineHeight: 1 }}>
        404
      </div>
      <Title level={2} style={{ marginBottom: '16px' }}>页面未找到</Title>
      <Paragraph style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '16px', 
        marginBottom: '32px',
        maxWidth: '500px'
      }}>
        抱歉，您访问的页面不存在或已被移除。请检查URL是否正确，或返回首页继续浏览。
      </Paragraph>
      <Space>
        <Link to="/">
          <Button type="primary" icon={<HomeOutlined />} size="large">
            返回首页
          </Button>
        </Link>
        <Button size="large" onClick={() => window.history.back()}>
          返回上一页
        </Button>
      </Space>
    </div>
  );
};

export default NotFound;