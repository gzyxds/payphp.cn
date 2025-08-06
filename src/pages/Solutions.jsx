import React from 'react';
import { Typography, Row, Col, Card, Button, Tabs, List, Space } from 'antd';
import SEO from '../components/SEO';
import { 
  ShopOutlined, 
  BankOutlined, 
  GlobalOutlined, 
  MobileOutlined,
  ShoppingOutlined,
  CustomerServiceOutlined,
  MedicineBoxOutlined,
  CarOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

const Solutions = () => {
  const industries = [
    {
      icon: <ShoppingOutlined />,
      title: '电商行业',
      description: '为电商平台提供全渠道收款、分账、退款等完整支付流程，支持PC、移动端多场景支付。',
      features: [
        '全渠道收款解决方案',
        '智能风控系统',
        '灵活的分账功能',
        '高效的退款处理',
        '会员积分体系'
      ],
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: <BankOutlined />,
      title: '金融行业',
      description: '为银行、保险、证券等金融机构提供安全合规的支付通道和资金清算服务，满足严格的监管要求。',
      features: [
        '合规支付解决方案',
        '实时资金清算',
        '多级风控体系',
        '金融级安全保障',
        '完整审计追踪'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: <CustomerServiceOutlined />,
      title: '服务行业',
      description: '为酒店、餐饮、旅游等服务行业提供线上线下一体化支付解决方案，提升服务体验和运营效率。',
      features: [
        '线上线下一体化支付',
        '会员管理系统',
        '预订支付流程',
        '多门店管理',
        '数据分析报表'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: <MedicineBoxOutlined />,
      title: '医疗健康',
      description: '为医院、诊所、健康平台提供安全便捷的医疗支付解决方案，支持预约挂号、在线问诊等场景。',
      features: [
        '医疗支付解决方案',
        '医保直连服务',
        '分期支付功能',
        '健康档案管理',
        '医疗数据安全'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: <CarOutlined />,
      title: '出行行业',
      description: '为出租车、网约车、共享单车等出行服务提供便捷的移动支付解决方案，提升用户体验。',
      features: [
        '移动支付解决方案',
        '实时交易处理',
        '自动扣费服务',
        '出行场景优化',
        '安全支付保障'
      ],
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: <GlobalOutlined />,
      title: '跨境贸易',
      description: '为进出口贸易、跨境电商提供一站式跨境支付解决方案，简化跨境交易流程，降低汇率风险。',
      features: [
        '多币种支付结算',
        '汇率优化服务',
        '合规支付通道',
        '跨境物流对接',
        '全球税务处理'
      ],
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    }
  ];

  const caseStudies = [
    {
      title: '某全球电商平台',
      industry: '电商行业',
      challenge: '需要支持全球200多个国家和地区的支付，满足不同国家的支付习惯和合规要求。',
      solution: '提供全球支付解决方案，支持100+种支付方式，覆盖全球主要市场，实现本地化支付体验。',
      result: '支付成功率提升30%，用户转化率提升25%，业务覆盖范围扩大到200+个国家和地区。'
    },
    {
      title: '某连锁酒店集团',
      industry: '服务行业',
      challenge: '多门店管理复杂，需要统一的支付系统和会员体系，提升客户体验和运营效率。',
      solution: '提供线上线下一体化支付解决方案，打通预订、入住、消费等全流程支付，集成会员管理系统。',
      result: '运营效率提升40%，会员复购率提升35%，客户满意度显著提升。'
    },
    {
      title: '某跨境电商平台',
      industry: '跨境贸易',
      challenge: '跨境支付流程复杂，汇率波动风险大，合规要求高，影响用户体验和交易效率。',
      solution: '提供一站式跨境支付解决方案，支持多币种结算，优化汇率，简化合规流程。',
      result: '交易处理时间缩短50%，成本降低15%，用户满意度提升40%。'
    }
  ];

  return (
    <div>
      <SEO 
        title="行业解决方案"
        description="支付宝开放平台为不同行业提供定制化的支付解决方案，包括电商、金融、服务、医疗健康、出行和跨境贸易等多个行业，满足各行业特定需求"
        keywords="行业解决方案,支付解决方案,电商支付,金融支付,医疗支付,跨境支付,出行支付"
        canonicalUrl="https://www.paypay.com/solutions"
        ogData={{
          image: "https://www.paypay.com/images/solutions-og.jpg",
          url: "https://www.paypay.com/solutions"
        }}
      />
      {/* 解决方案页面头部 */}
      <section style={{ 
        background: 'linear-gradient(135deg, #165dff 0%, #4080ff 100%)',
        color: 'white',
        padding: '80px 0 60px',
      }}>
        <div className="container">
          <Title level={1} style={{ color: 'white', textAlign: 'center', marginBottom: '16px' }}>
            行业解决方案
          </Title>
          <Paragraph style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '18px', 
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            我们深入了解各行业特点，为不同行业客户提供定制化的支付解决方案
          </Paragraph>
        </div>
      </section>

      {/* 行业解决方案 */}
      <section className="section">
        <div className="container">
          <Tabs defaultActiveKey="0" centered tabPosition="top" style={{ marginBottom: '48px' }}>
            {industries.map((industry, index) => (
              <TabPane 
                tab={
                  <span>
                    <span style={{ marginRight: '8px', color: 'var(--primary-color)' }}>{industry.icon}</span>
                    {industry.title}
                  </span>
                } 
                key={index}
              >
                <Row gutter={[48, 32]} align="middle">
                  <Col xs={24} md={12}>
                    <div>
                      <Title level={3} style={{ marginBottom: '16px' }}>{industry.title}解决方案</Title>
                      <Paragraph style={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '16px',
                        marginBottom: '24px'
                      }}>
                        {industry.description}
                      </Paragraph>
                      
                      <Title level={5} style={{ marginBottom: '16px' }}>核心功能</Title>
                      <List
                        dataSource={industry.features}
                        renderItem={item => (
                          <List.Item style={{ padding: '8px 0', borderBottom: 'none' }}>
                            <Space>
                              <CheckCircleOutlined style={{ color: 'var(--primary-color)' }} />
                              <Text>{item}</Text>
                            </Space>
                          </List.Item>
                        )}
                        style={{ marginBottom: '24px' }}
                      />
                      
                      <Button type="primary">了解详情</Button>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <img 
                      src={industry.image} 
                      alt={industry.title} 
                      style={{ 
                        width: '100%', 
                        borderRadius: 'var(--radius-medium)',
                        boxShadow: 'var(--shadow-1)'
                      }} 
                    />
                  </Col>
                </Row>
              </TabPane>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 客户案例 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <Title level={2} className="section-title">客户案例</Title>
          <Paragraph className="section-subtitle">
            了解我们如何帮助各行业客户解决支付难题，提升业务效率
          </Paragraph>

          <Row gutter={[32, 32]}>
            {caseStudies.map((caseStudy, index) => (
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
                  <Title level={4} style={{ marginBottom: '8px' }}>{caseStudy.title}</Title>
                  <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>{caseStudy.industry}</Text>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <Title level={5} style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>挑战</Title>
                    <Paragraph>{caseStudy.challenge}</Paragraph>
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <Title level={5} style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>解决方案</Title>
                    <Paragraph>{caseStudy.solution}</Paragraph>
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <Title level={5} style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>成果</Title>
                    <Paragraph>{caseStudy.result}</Paragraph>
                  </div>
                  
                  <Button type="link" style={{ padding: 0 }}>查看完整案例 &gt;</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 解决方案流程 */}
      <section className="section">
        <div className="container">
          <Title level={2} className="section-title">解决方案实施流程</Title>
          <Paragraph className="section-subtitle">
            我们提供端到端的解决方案实施服务，确保您的业务顺利接入我们的支付系统
          </Paragraph>

          <Row gutter={[16, 16]} justify="center" style={{ marginTop: '48px' }}>
            {[
              { title: '需求分析', desc: '深入了解您的业务需求和痛点，制定个性化解决方案' },
              { title: '方案设计', desc: '根据需求设计最佳支付解决方案，包括技术架构和业务流程' },
              { title: '系统对接', desc: '提供技术支持和文档，协助您快速完成系统对接' },
              { title: '测试上线', desc: '全面测试和验证，确保系统稳定可靠，满足业务需求' },
              { title: '持续优化', desc: '根据业务发展和市场变化，持续优化和升级解决方案' }
            ].map((step, index) => (
              <Col xs={24} sm={12} md={8} lg={4} key={index}>
                <div style={{ 
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  <div style={{ 
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--primary-color)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: '0 auto 16px'
                  }}>
                    {index + 1}
                  </div>
                  
                  {index < 4 && (
                    <div style={{ 
                      position: 'absolute',
                      top: '32px',
                      right: '-50%',
                      width: '100%',
                      height: '2px',
                      background: 'var(--primary-color)',
                      display: { xs: 'none', md: 'block' }
                    }} />
                  )}
                  
                  <Title level={5} style={{ marginBottom: '8px' }}>{step.title}</Title>
                  <Paragraph style={{ color: 'var(--text-secondary)' }}>{step.desc}</Paragraph>
                </div>
              </Col>
            ))}
          </Row>
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
            寻找适合您行业的解决方案
          </Title>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px', marginBottom: '32px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            我们的行业专家将为您提供个性化咨询，帮助您找到最适合的支付解决方案
          </Paragraph>
          <Space size="large">
            <Button type="primary" size="large" style={{ background: 'white', color: '#165dff', borderColor: 'white' }}>
              预约咨询
            </Button>
            <Button ghost size="large">
              查看更多案例
            </Button>
          </Space>
        </div>
      </section>
    </div>
  );
};

export default Solutions;