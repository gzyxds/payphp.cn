import React from 'react';
import { Typography, Row, Col, Card, Button, Tabs, Divider } from 'antd';
import SEO from '../components/SEO';
import { 
  ShopOutlined, 
  BankOutlined, 
  GlobalOutlined, 
  MobileOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const Products = () => {
  const products = [
    {
      icon: <ShopOutlined />,
      title: '在线支付',
      description: '为电商、SaaS平台提供安全、稳定的在线支付解决方案，支持多种支付方式，满足不同场景需求。',
      features: ['多渠道支付', '智能风控', '实时对账', '自动结算'],
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: <MobileOutlined />,
      title: '移动支付',
      description: '提供全面的移动支付解决方案，支持APP、小程序、H5等多种场景，打造流畅的移动支付体验。',
      features: ['扫码支付', '应用内支付', 'H5支付', 'NFC支付'],
      image: 'https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: <GlobalOutlined />,
      title: '跨境支付',
      description: '一站式跨境支付解决方案，支持多币种、多语言，满足全球化业务需求，简化跨境交易流程。',
      features: ['多币种结算', '汇率优化', '合规支付', '全球覆盖'],
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: <BankOutlined />,
      title: '企业支付',
      description: '为企业提供资金管理、批量付款、薪资发放等金融服务，提升企业资金运营效率。',
      features: ['批量转账', '薪资代发', '对公账户', '资金管理'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: '安全解决方案',
      description: '提供全方位的支付安全解决方案，包括风险控制、反欺诈、合规认证等服务，保障交易安全。',
      features: ['智能风控', '实时监控', '合规认证', '数据加密'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    }
  ];

  return (
    <div>
      <SEO 
        title="产品与服务"
        description="支付宝开放平台提供全面的支付解决方案，包括在线支付、移动支付、跨境支付、企业支付和安全解决方案，满足各类企业在不同场景下的支付需求"
        keywords="支付产品,支付服务,在线支付,移动支付,跨境支付,企业支付,支付安全"
        canonicalUrl="https://www.paypay.com/products"
        ogData={{
          image: "https://www.paypay.com/images/products-og.jpg",
          url: "https://www.paypay.com/products"
        }}
      />
      
      {/* 产品页面头部 */}
      <section style={{ 
        background: 'linear-gradient(135deg, #165dff 0%, #4080ff 100%)',
        color: 'white',
        padding: '80px 0 60px',
      }}>
        <div className="container">
          <Title level={1} style={{ color: 'white', textAlign: 'center', marginBottom: '16px' }}>
            产品与服务
          </Title>
          <Paragraph style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '18px', 
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            我们提供全面的支付解决方案，满足各类企业在不同场景下的支付需求
          </Paragraph>
        </div>
      </section>

      {/* 产品列表 */}
      <section className="section">
        <div className="container">
          <Row gutter={[48, 64]}>
            {products.map((product, index) => (
              <Col xs={24} key={index}>
                <Card 
                  bordered={false}
                  style={{ 
                    borderRadius: 'var(--radius-large)',
                    boxShadow: 'var(--shadow-1)',
                    overflow: 'hidden'
                  }}
                >
                  <Row gutter={[32, 32]} align="middle">
                    <Col xs={24} md={12} order={index % 2 === 0 ? 1 : 2}>
                      <div style={{ padding: '24px 0' }}>
                        <div style={{ 
                          fontSize: '36px', 
                          color: 'var(--primary-color)', 
                          marginBottom: '16px' 
                        }}>
                          {product.icon}
                        </div>
                        <Title level={3}>{product.title}</Title>
                        <Paragraph style={{ 
                          color: 'var(--text-secondary)',
                          fontSize: '16px',
                          marginBottom: '24px'
                        }}>
                          {product.description}
                        </Paragraph>
                        
                        <div style={{ marginBottom: '24px' }}>
                          <Title level={5} style={{ marginBottom: '16px' }}>主要功能</Title>
                          <Row gutter={[16, 16]}>
                            {product.features.map((feature, idx) => (
                              <Col xs={12} key={idx}>
                                <div style={{ 
                                  background: 'var(--bg-gray)',
                                  padding: '8px 16px',
                                  borderRadius: 'var(--radius-small)',
                                  display: 'inline-block'
                                }}>
                                  {feature}
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                        
                        <Button type="primary">了解详情</Button>
                      </div>
                    </Col>
                    <Col xs={24} md={12} order={index % 2 === 0 ? 2 : 1}>
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        style={{ 
                          width: '100%', 
                          borderRadius: 'var(--radius-medium)',
                          boxShadow: 'var(--shadow-1)'
                        }} 
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 技术优势 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <Title level={2} className="section-title">技术优势</Title>
          <Paragraph className="section-subtitle">
            我们的产品基于先进的技术架构，提供稳定、安全、高效的支付服务
          </Paragraph>

          <Tabs defaultActiveKey="1" centered style={{ maxWidth: '800px', margin: '0 auto' }}>
            <TabPane tab="高可用架构" key="1">
              <div style={{ padding: '32px 0', textAlign: 'center' }}>
                <Title level={4} style={{ marginBottom: '16px' }}>99.99% 系统可用性</Title>
                <Paragraph style={{ color: 'var(--text-secondary)' }}>
                  采用分布式架构和多重容灾备份，确保系统7*24小时稳定运行，交易实时处理，无延迟
                </Paragraph>
              </div>
            </TabPane>
            <TabPane tab="安全防护" key="2">
              <div style={{ padding: '32px 0', textAlign: 'center' }}>
                <Title level={4} style={{ marginBottom: '16px' }}>全方位安全保障</Title>
                <Paragraph style={{ color: 'var(--text-secondary)' }}>
                  通过PCI DSS认证，采用银行级加密技术，多层次风控体系，保障交易和资金安全
                </Paragraph>
              </div>
            </TabPane>
            <TabPane tab="开放能力" key="3">
              <div style={{ padding: '32px 0', textAlign: 'center' }}>
                <Title level={4} style={{ marginBottom: '16px' }}>丰富的API接口</Title>
                <Paragraph style={{ color: 'var(--text-secondary)' }}>
                  提供标准化、易用的API接口和完善的开发文档，支持多种编程语言，快速集成
                </Paragraph>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </section>

      {/* 咨询注册 */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Title level={2} style={{ marginBottom: '16px' }}>
            寻找适合您业务的支付解决方案
          </Title>
          <Paragraph style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '16px', 
            marginBottom: '32px', 
            maxWidth: '700px', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}>
            我们的产品专家将根据您的业务需求，为您提供个性化的支付解决方案
          </Paragraph>
          <Button type="primary" size="large">
            联系我们
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;