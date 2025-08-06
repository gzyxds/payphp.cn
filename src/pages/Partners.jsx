import React from 'react';
import { Typography, Row, Col, Card, Button, Tabs, List, Space, Divider } from 'antd';
import SEO from '../components/SEO';
import { 
  ShopOutlined, 
  BankOutlined, 
  GlobalOutlined, 
  TeamOutlined,
  CheckCircleOutlined,
  RightOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Partners = () => {
  const partnerTypes = [
    {
      title: '渠道合作伙伴',
      description: '帮助我们拓展市场，推广我们的支付解决方案，获取丰厚的佣金回报',
      benefits: [
        '高额佣金激励',
        '专属合作经理',
        '市场推广支持',
        '技术培训与认证',
        '定期业务回顾'
      ],
      requirements: [
        '拥有广泛的客户资源',
        '具备基本的支付行业知识',
        '良好的沟通和销售能力',
        '能够提供基本的客户支持'
      ],
      icon: <TeamOutlined style={{ fontSize: '48px', color: 'var(--primary-color)' }} />
    },
    {
      title: '技术集成伙伴',
      description: '将我们的支付解决方案集成到您的产品中，为您的客户提供更完善的服务',
      benefits: [
        '技术对接支持',
        '联合营销机会',
        '优先产品更新',
        '专属技术支持',
        '共同客户开发'
      ],
      requirements: [
        '拥有成熟的软件产品或服务',
        '具备技术集成能力',
        '稳定的客户群体',
        '良好的品牌声誉'
      ],
      icon: <GlobalOutlined style={{ fontSize: '48px', color: 'var(--primary-color)' }} />
    },
    {
      title: '战略合作伙伴',
      description: '与我们建立深度战略合作关系，共同开发市场，创造更大的商业价值',
      benefits: [
        '定制化解决方案',
        '优先资源配置',
        '高管层直接对接',
        '联合品牌推广',
        '共享行业资源'
      ],
      requirements: [
        '行业领先地位',
        '广泛的市场影响力',
        '强大的资源整合能力',
        '长期合作意愿'
      ],
      icon: <BankOutlined style={{ fontSize: '48px', color: 'var(--primary-color)' }} />
    }
  ];

  const successCases = [
    {
      name: '某电商SaaS平台',
      type: '技术集成伙伴',
      description: '通过集成我们的支付API，为其平台上的10万+商户提供一站式支付服务，大幅提升了平台的竞争力和用户满意度。',
      results: [
        '平台交易额提升35%',
        '商户留存率提高20%',
        '支付体验满意度达95%',
        '合作一年内共同开发5000+新商户'
      ],
      logo: '/placeholder.svg?height=80&width=160'
    },
    {
      name: '某金融科技公司',
      type: '战略合作伙伴',
      description: '与我们建立战略合作关系，共同开发创新的金融支付产品，满足新兴市场的需求，实现双方业务的快速增长。',
      results: [
        '联合开发3款创新支付产品',
        '覆盖5个新兴市场',
        '合作业务年增长率达40%',
        '获得2项行业创新奖项'
      ],
      logo: '/placeholder.svg?height=80&width=160'
    },
    {
      name: '某IT咨询公司',
      type: '渠道合作伙伴',
      description: '作为我们的渠道合作伙伴，为其企业客户推荐我们的支付解决方案，创造了可观的佣金收入，同时提升了客户满意度。',
      results: [
        '成功推荐200+企业客户',
        '年佣金收入超过100万',
        '客户满意度达92%',
        '合作范围扩展到3个国家'
      ],
      logo: '/placeholder.svg?height=80&width=160'
    }
  ];

  return (
    <div>
      <SEO 
        title="合作伙伴"
        description="支付宝开放平台提供多种合作模式，包括渠道合作伙伴、技术集成伙伴和战略合作伙伴，与我们携手共赢，共同开拓支付市场，创造更大的商业价值"
        keywords="合作伙伴,渠道合作,技术集成,战略合作,支付合作,合作案例"
        canonicalUrl="https://www.paypay.com/partners"
        ogData={{
          image: "https://www.paypay.com/images/partners-og.jpg",
          url: "https://www.paypay.com/partners"
        }}
      />
      {/* 合作伙伴页面头部 */}
      <section style={{ 
        background: 'linear-gradient(135deg, #165dff 0%, #4080ff 100%)',
        color: 'white',
        padding: '80px 0 60px',
      }}>
        <div className="container">
          <Title level={1} style={{ color: 'white', textAlign: 'center', marginBottom: '16px' }}>
            合作伙伴
          </Title>
          <Paragraph style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '18px', 
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            与我们携手共赢，共同开拓支付市场，创造更大的商业价值
          </Paragraph>
        </div>
      </section>

      {/* 合作伙伴类型 */}
      <section className="section">
        <div className="container">
          <Title level={2} className="section-title">合作模式</Title>
          <Paragraph className="section-subtitle">
            我们提供多种合作模式，满足不同伙伴的需求，共创双赢
          </Paragraph>

          <Tabs 
            defaultActiveKey="0" 
            centered
            items={partnerTypes.map((type, index) => ({
              key: String(index),
              label: (
                <span>
                  <span style={{ marginRight: '8px', color: 'var(--primary-color)' }}>{type.icon}</span>
                  {type.title}
                </span>
              ),
              children: (
                <Card 
                  style={{ 
                    borderRadius: 'var(--radius-large)',
                    boxShadow: 'var(--shadow-1)',
                    border: 'none',
                    marginBottom: '32px'
                  }}
                >
                  <Row gutter={[48, 32]} align="middle">
                    <Col xs={24} md={16}>
                      <Title level={3} style={{ marginBottom: '16px' }}>{type.title}</Title>
                      <Paragraph style={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '16px',
                        marginBottom: '24px'
                      }}>
                        {type.description}
                      </Paragraph>
                      
                      <Row gutter={[32, 32]}>
                        <Col xs={24} md={12}>
                          <Title level={5} style={{ marginBottom: '16px' }}>合作优势</Title>
                          <List
                            dataSource={type.benefits}
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
                        </Col>
                        <Col xs={24} md={12}>
                          <Title level={5} style={{ marginBottom: '16px' }}>申请条件</Title>
                          <List
                            dataSource={type.requirements}
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
                        </Col>
                      </Row>
                      
                      <Button type="primary" size="large">
                        申请成为{type.title}
                      </Button>
                    </Col>
                    <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                      <div style={{ 
                        fontSize: '120px', 
                        color: 'var(--primary-color)', 
                        opacity: 0.1 
                      }}>
                        {type.icon}
                      </div>
                    </Col>
                  </Row>
                </Card>
              )
            }))}
          />
        </div>
      </section>

      {/* 合作流程 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <Title level={2} className="section-title">合作流程</Title>
          <Paragraph className="section-subtitle">
            简单高效的合作流程，帮助您快速成为我们的合作伙伴
          </Paragraph>

          <Row gutter={[16, 16]} justify="center" style={{ marginTop: '48px' }}>
            {[
              { title: '提交申请', desc: '填写合作伙伴申请表，提供基本信息和合作意向' },
              { title: '资质审核', desc: '我们的团队将审核您的申请资质，确认合作可行性' },
              { title: '商务洽谈', desc: '双方深入沟通，确定具体的合作模式和条件' },
              { title: '签署协议', desc: '达成一致后，签署正式的合作协议，明确权责' },
              { title: '正式合作', desc: '开始正式合作，共同开拓市场，创造价值' }
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

      {/* 成功案例 */}
      <section className="section">
        <div className="container">
          <Title level={2} className="section-title">成功案例</Title>
          <Paragraph className="section-subtitle">
            了解我们与合作伙伴共同创造的成功故事
          </Paragraph>

          <Row gutter={[32, 32]}>
            {successCases.map((caseItem, index) => (
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
                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <img src={caseItem.logo} alt={caseItem.name} style={{ height: '80px' }} />
                  </div>
                  
                  <Title level={4} style={{ marginBottom: '8px' }}>{caseItem.name}</Title>
                  <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>{caseItem.type}</Text>
                  
                  <Paragraph style={{ 
                    color: 'var(--text-secondary)',
                    marginBottom: '16px'
                  }}>
                    {caseItem.description}
                  </Paragraph>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <Title level={5} style={{ fontSize: '14px', marginBottom: '8px' }}>合作成果</Title>
                    <List
                      size="small"
                      dataSource={caseItem.results}
                      renderItem={item => (
                        <List.Item style={{ padding: '4px 0', border: 'none' }}>
                          <Space>
                            <CheckCircleOutlined style={{ color: 'var(--primary-color)' }} />
                            <Text>{item}</Text>
                          </Space>
                        </List.Item>
                      )}
                    />
                  </div>
                  
                  <Button type="link" style={{ padding: 0 }}>
                    查看详细案例 <RightOutlined />
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 合作伙伴展示 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <Title level={2} className="section-title">我们的合作伙伴</Title>
          <Paragraph className="section-subtitle">
            与众多行业领先企业建立了长期稳定的合作关系
          </Paragraph>

          <div style={{ textAlign: 'center' }}>
            <Row gutter={[32, 32]} justify="center" align="middle">
              {Array.from({ length: 12 }).map((_, index) => (
                <Col xs={12} sm={8} md={6} lg={4} key={index}>
                  <div 
                    style={{ 
                      height: '80px', 
                      background: 'white', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px',
                      boxShadow: 'var(--shadow-1)'
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

      {/* 联系我们 */}
      <section className="section">
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Title level={2} style={{ marginBottom: '16px' }}>
                成为我们的合作伙伴
              </Title>
              <Paragraph style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '16px', 
                marginBottom: '24px'
              }}>
                无论您是想成为我们的渠道合作伙伴、技术集成伙伴还是战略合作伙伴，我们都期待与您携手共赢，共同开拓支付市场，创造更大的商业价值。
              </Paragraph>
              
              <Space direction="vertical" size="large" style={{ marginBottom: '32px' }}>
                <Space>
                  <MailOutlined style={{ color: 'var(--primary-color)', fontSize: '20px' }} />
                  <Text>合作邮箱：partner@paypay.com</Text>
                </Space>
                <Space>
                  <PhoneOutlined style={{ color: 'var(--primary-color)', fontSize: '20px' }} />
                  <Text>合作热线：400-888-8888</Text>
                </Space>
              </Space>
              
              <Button type="primary" size="large">
                立即申请合作
              </Button>
            </Col>
            <Col xs={24} md={12}>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="合作伙伴" 
                style={{ 
                  width: '100%', 
                  borderRadius: 'var(--radius-large)',
                  boxShadow: 'var(--shadow-2)'
                }} 
              />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Partners;