import React from 'react';
import { Typography, Button, Row, Col, Card, Statistic, Space, Divider } from 'antd';
import SEO from '../components/SEO';
import { 
  RocketOutlined, 
  SafetyCertificateOutlined, 
  GlobalOutlined, 
  ApiOutlined,
  CodeOutlined,
  MobileOutlined,
  BankOutlined,
  ShopOutlined,
  TeamOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Home = () => {
  return (
    <div>
      <SEO 
        title="首页"
        description="支付宝开放平台为企业提供一站式支付服务，助力商业数字化转型，连接全球支付网络，打造安全、高效、智能的支付体验"
        keywords="支付平台,支付解决方案,全球支付,支付API,支付接口,电子支付,移动支付"
        canonicalUrl="https://www.paypay.com/"
        ogData={{
          image: "https://www.paypay.com/images/home-og.jpg",
          url: "https://www.paypay.com/"
        }}
      />
      {/* 英雄区 - 参考支付宝开放平台风格 */}
      <section className="hero-section" style={{ 
        background: '#f7f9fc',
        color: '#333',
        padding: '80px 0 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 背景装饰元素 */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(22, 93, 255, 0.03) 0%, rgba(64, 128, 255, 0.06) 100%)',
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
          zIndex: 0
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12} className="animate-fadeIn">
              <div style={{ maxWidth: '540px' }}>
                <Title level={1} style={{ 
                  color: '#181818', 
                  fontSize: '48px', 
                  fontWeight: 600,
                  marginBottom: '24px',
                  lineHeight: 1.2
                }}>
                  开放共赢的<span style={{ color: '#165dff' }}>支付生态</span>
                </Title>
                <Paragraph style={{ 
                  color: '#666', 
                  fontSize: '18px', 
                  marginBottom: '40px', 
                  lineHeight: 1.8
                }}>
                  为企业提供一站式支付服务，助力商业数字化转型，连接全球支付网络，打造安全、高效、智能的支付体验
                </Paragraph>
                <Space size="large" style={{ marginBottom: '60px' }}>
                  <Button type="primary" size="large" style={{ 
                    height: '48px', 
                    padding: '0 32px',
                    fontSize: '16px',
                    borderRadius: '24px'
                  }}>
                    开始接入
                  </Button>
                  <Button size="large" style={{ 
                    height: '48px', 
                    padding: '0 32px',
                    fontSize: '16px',
                    borderRadius: '24px',
                    borderColor: '#165dff',
                    color: '#165dff'
                  }}>
                    查看文档
                  </Button>
                </Space>
                
                {/* 数据指标 */}
                <Row gutter={[40, 20]} style={{ marginBottom: '20px' }}>
                  {[
                    { value: '99.99%', label: '交易成功率' },
                    { value: '200+', label: '支持国家/地区' },
                    { value: '1000亿+', label: '年交易额' }
                  ].map((item, index) => (
                    <Col key={index} span={8}>
                      <div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontWeight: 'bold', 
                          color: '#165dff',
                          marginBottom: '4px'
                        }}>
                          {item.value}
                        </div>
                        <div style={{ fontSize: '14px', color: '#666' }}>
                          {item.label}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            
            <Col xs={24} md={12} className="animate-fadeIn delay-1">
              <div style={{ position: 'relative', height: '480px' }}>
                {/* 主图 */}
                <div style={{ 
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="支付解决方案" 
                    style={{ 
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                </div>
                
                {/* 浮动元素1 - 支付安全 */}
                <div style={{ 
                  position: 'absolute', 
                  top: '60px', 
                  right: '30px', 
                  background: 'white',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  zIndex: 3
                }}>
                  <div style={{ 
                    background: 'rgba(22, 93, 255, 0.1)', 
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#165dff'
                  }}>
                    <SafetyCertificateOutlined />
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>银行级安全</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>多重加密保障</div>
                  </div>
                </div>
                
                {/* 浮动元素2 - 全球支付 */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '80px', 
                  left: '20px', 
                  background: 'white',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  zIndex: 3
                }}>
                  <div style={{ 
                    background: 'rgba(22, 93, 255, 0.1)', 
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#165dff'
                  }}>
                    <GlobalOutlined />
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>全球支付</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>支持多币种结算</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        
        {/* 波浪形底部过渡 */}
        <div style={{ 
          position: 'relative',
          height: '120px',
          marginTop: '40px'
        }}>
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <path 
              d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 80C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <Title level={2} className="section-title">核心优势</Title>
          <Paragraph className="section-subtitle">
            我们提供全面的支付解决方案，满足各类企业的支付需求
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              { 
                icon: <SafetyCertificateOutlined />, 
                title: '安全可靠', 
                desc: '采用银行级安全标准，多重加密技术，保障交易安全' 
              },
              { 
                icon: <RocketOutlined />, 
                title: '高效便捷', 
                desc: '快速接入，简单集成，提供完善的开发文档和技术支持' 
              },
              { 
                icon: <GlobalOutlined />, 
                title: '全球支付', 
                desc: '支持多币种、多渠道支付，覆盖全球主流支付方式' 
              }
            ].map((item, index) => (
              <Col xs={24} sm={8} key={index}>
                <Card 
                  className="animate-fadeIn" 
                  style={{ 
                    height: '100%', 
                    textAlign: 'center', 
                    borderRadius: 'var(--radius-large)',
                    boxShadow: 'var(--shadow-1)',
                    border: 'none'
                  }}
                  hoverable
                >
                  <div style={{ 
                    fontSize: '48px', 
                    color: 'var(--primary-color)', 
                    marginBottom: '16px' 
                  }}>
                    {item.icon}
                  </div>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 产品解决方案 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <Title level={2} className="section-title">产品解决方案</Title>
          <Paragraph className="section-subtitle">
            为不同行业提供定制化的支付解决方案，满足多样化的业务需求
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              { 
                icon: <ShopOutlined />, 
                title: '电商支付', 
                desc: '为电商平台提供全渠道收款、分账、退款等完整支付流程' 
              },
              { 
                icon: <BankOutlined />, 
                title: '金融支付', 
                desc: '为金融机构提供安全合规的支付通道和资金清算服务' 
              },
              { 
                icon: <MobileOutlined />, 
                title: '移动支付', 
                desc: '支持各类移动端支付场景，提供流畅的用户支付体验' 
              },
              { 
                icon: <GlobalOutlined />, 
                title: '跨境支付', 
                desc: '一站式解决跨境电商、留学、旅游等场景的支付需求' 
              }
            ].map((item, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card 
                  className="animate-fadeIn" 
                  style={{ 
                    height: '100%', 
                    borderRadius: 'var(--radius-large)',
                    boxShadow: 'var(--shadow-1)',
                    border: 'none'
                  }}
                  hoverable
                >
                  <div style={{ 
                    fontSize: '36px', 
                    color: 'var(--primary-color)', 
                    marginBottom: '16px' 
                  }}>
                    {item.icon}
                  </div>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </Paragraph>
                  <Button type="link" style={{ padding: 0 }}>了解更多 &gt;</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="section">
        <div className="container">
          <Row gutter={[48, 48]} justify="center">
            {[
              { title: '全球商户', value: '100,000+', suffix: '' },
              { title: '支付国家/地区', value: '200+', suffix: '' },
              { title: '支付通道', value: '50+', suffix: '' },
              { title: '年交易额', value: '1000', suffix: '亿' }
            ].map((item, index) => (
              <Col xs={12} sm={6} key={index}>
                <div style={{ textAlign: 'center' }}>
                  <Title level={2} style={{ fontSize: '36px', color: 'var(--primary-color)', margin: '0 0 8px' }}>
                    {item.value}<span style={{ fontSize: '20px' }}>{item.suffix}</span>
                  </Title>
                  <Text style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{item.title}</Text>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 开发者资源 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <Title level={2} className="section-title">开发者资源</Title>
          <Paragraph className="section-subtitle">
            丰富的开发工具和技术文档，助力开发者快速接入我们的支付系统
          </Paragraph>

          <Row gutter={[32, 32]}>
            {[
              { 
                icon: <ApiOutlined />, 
                title: 'API文档', 
                desc: '详细的API接口说明，帮助开发者快速理解和使用我们的服务' 
              },
              { 
                icon: <CodeOutlined />, 
                title: 'SDK工具包', 
                desc: '提供多种语言的SDK，简化开发流程，加速项目集成' 
              },
              { 
                icon: <TeamOutlined />, 
                title: '开发者社区', 
                desc: '活跃的技术社区，解答问题，分享最佳实践和创新案例' 
              }
            ].map((item, index) => (
              <Col xs={24} md={8} key={index}>
                <Card 
                  className="animate-fadeIn" 
                  style={{ 
                    height: '100%', 
                    borderRadius: 'var(--radius-large)',
                    boxShadow: 'var(--shadow-1)',
                    border: 'none'
                  }}
                  hoverable
                >
                  <div style={{ 
                    fontSize: '36px', 
                    color: 'var(--primary-color)', 
                    marginBottom: '16px' 
                  }}>
                    {item.icon}
                  </div>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </Paragraph>
                  <Button type="primary">立即访问</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="section">
        <div className="container">
          <Title level={2} className="section-title">合作伙伴</Title>
          <Paragraph className="section-subtitle">
            我们与全球知名企业建立了长期稳定的合作关系
          </Paragraph>

          <div style={{ textAlign: 'center' }}>
            <Row gutter={[32, 32]} justify="center" align="middle">
              {Array.from({ length: 8 }).map((_, index) => (
                <Col xs={12} sm={8} md={6} key={index}>
                  <div 
                    style={{ 
                      height: '80px', 
                      background: '#f5f7fa', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px'
                    }}
                  >
                    <div style={{ color: '#bfbfbf', fontSize: '16px', fontWeight: 'bold' }}>
                      合作伙伴 {index + 1}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      {/* 咨询注册 */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, #165dff 0%, #4080ff 100%)',
        color: 'white',
        borderRadius: '16px',
        margin: '0 24px 80px',
        maxWidth: 'var(--max-width)',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <div style={{ padding: '48px 24px', textAlign: 'center' }}>
          <Title level={2} style={{ color: 'white', marginBottom: '16px' }}>
            准备好开始了吗？
          </Title>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px', marginBottom: '32px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            立即注册，体验我们的支付服务，享受专业的技术支持和优质的客户服务
          </Paragraph>
          <Space size="large">
            <Button type="primary" size="large" style={{ background: 'white', color: '#165dff', borderColor: 'white' }}>
              免费注册
            </Button>
            <Button ghost size="large">
              联系销售
            </Button>
          </Space>
        </div>
      </section>
    </div>
  );
};

export default Home;