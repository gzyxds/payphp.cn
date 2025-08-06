import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  WechatOutlined
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer = () => {
  const footerLinks = [
    {
      title: '产品',
      items: [
        { label: '支付API', link: '/products/payment-api' },
        { label: '收单服务', link: '/products/acquiring' },
        { label: '跨境支付', link: '/products/cross-border' },
        { label: '企业支付', link: '/products/business' },
        { label: '安全解决方案', link: '/products/security' }
      ]
    },
    {
      title: '解决方案',
      items: [
        { label: '电商解决方案', link: '/solutions/ecommerce' },
        { label: '零售行业', link: '/solutions/retail' },
        { label: '服务行业', link: '/solutions/service' },
        { label: '金融科技', link: '/solutions/fintech' },
        { label: '跨境贸易', link: '/solutions/trade' }
      ]
    },
    {
      title: '开发者',
      items: [
        { label: '开发文档', link: '/developers/docs' },
        { label: 'API参考', link: '/developers/api' },
        { label: 'SDK下载', link: '/developers/sdk' },
        { label: '开发者社区', link: '/developers/community' },
        { label: '技术支持', link: '/developers/support' }
      ]
    },
    {
      title: '关于我们',
      items: [
        { label: '公司介绍', link: '/about/company' },
        { label: '新闻动态', link: '/about/news' },
        { label: '加入我们', link: '/about/careers' },
        { label: '联系我们', link: '/about/contact' },
        { label: '合规信息', link: '/about/compliance' }
      ]
    }
  ];

  return (
    <AntFooter style={{ background: '#f5f7fa', padding: '60px 0 24px' }}>
      <div className="container">
        <Row gutter={[48, 32]}>
          <Col xs={24} sm={24} md={8} lg={8}>
            <div style={{ marginBottom: 24 }}>
              <img src="/src/assets/logo.svg" alt="PayPay Logo" style={{ height: '32px', marginBottom: '16px' }} />
              <Text style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '24px' }}>
                提供安全、可靠、高效的支付解决方案，助力企业数字化转型
              </Text>
              <Space size={16}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <GithubOutlined style={{ fontSize: '24px', color: 'var(--text-secondary)' }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined style={{ fontSize: '24px', color: 'var(--text-secondary)' }} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined style={{ fontSize: '24px', color: 'var(--text-secondary)' }} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <WechatOutlined style={{ fontSize: '24px', color: 'var(--text-secondary)' }} />
                </a>
              </Space>
            </div>
          </Col>

          {footerLinks.map((group, index) => (
            <Col xs={12} sm={12} md={4} lg={4} key={index}>
              <Title level={5} style={{ marginBottom: '20px', fontSize: '16px' }}>{group.title}</Title>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {group.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px' }}>
                    <Link to={item.link} style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <Divider style={{ margin: '40px 0 24px', borderColor: 'var(--border-color)' }} />
        
        <div style={{ textAlign: 'center' }}>
          <Text style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>
            © {new Date().getFullYear()} PayPay 支付科技. 保留所有权利.
          </Text>
          <div style={{ marginTop: '12px' }}>
            <Space split={<Divider type="vertical" style={{ margin: '0 8px', borderColor: 'var(--border-color)' }} />}>
              <Link to="/privacy" style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>隐私政策</Link>
              <Link to="/terms" style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>服务条款</Link>
              <Link to="/security" style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>安全中心</Link>
            </Space>
          </div>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;