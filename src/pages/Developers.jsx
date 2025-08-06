import React from 'react';
import { Typography, Row, Col, Card, Button, Tabs, List, Space, Collapse, Tag } from 'antd';
import { 
  CodeOutlined, 
  ApiOutlined, 
  BookOutlined, 
  ToolOutlined,
  QuestionCircleOutlined,
  GithubOutlined,
  RightOutlined,
  DownloadOutlined,
  CheckCircleOutlined,
  UserOutlined, 
  AppstoreOutlined, 
  RocketOutlined 
} from '@ant-design/icons';
import SEO from '../components/SEO';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const Developers = () => {
  const sdkList = [
    { 
      name: 'Java SDK', 
      version: 'v2.5.3', 
      description: '适用于Java应用的SDK，支持Spring Boot集成',
      icon: <i className="devicon-java-plain colored" style={{ fontSize: '36px' }}></i>,
      features: ['支持所有API接口', '异步处理能力', '自动重试机制', '完整日志记录']
    },
    { 
      name: 'PHP SDK', 
      version: 'v3.1.0', 
      description: '适用于PHP应用的SDK，支持Laravel、ThinkPHP等框架',
      icon: <i className="devicon-php-plain colored" style={{ fontSize: '36px' }}></i>,
      features: ['简单易用API', 'Composer支持', '详细错误处理', '完整单元测试']
    },
    { 
      name: 'Node.js SDK', 
      version: 'v4.2.1', 
      description: '适用于Node.js应用的SDK，支持Express、Koa等框架',
      icon: <i className="devicon-nodejs-plain colored" style={{ fontSize: '36px' }}></i>,
      features: ['Promise支持', '类型定义完善', '自动化测试', '丰富的示例代码']
    },
    { 
      name: 'Python SDK', 
      version: 'v2.0.5', 
      description: '适用于Python应用的SDK，支持Django、Flask等框架',
      icon: <i className="devicon-python-plain colored" style={{ fontSize: '36px' }}></i>,
      features: ['异步支持', '完整类型注解', '丰富的工具函数', '详细文档']
    },
    { 
      name: 'Go SDK', 
      version: 'v1.8.2', 
      description: '适用于Go应用的SDK，轻量高效',
      icon: <i className="devicon-go-plain colored" style={{ fontSize: '36px' }}></i>,
      features: ['高性能设计', '并发支持', '完整错误处理', '模块化结构']
    },
    { 
      name: '.NET SDK', 
      version: 'v3.0.1', 
      description: '适用于.NET应用的SDK，支持.NET Core和.NET Framework',
      icon: <i className="devicon-dot-net-plain colored" style={{ fontSize: '36px' }}></i>,
      features: ['异步方法支持', 'DI容器集成', 'Linq查询支持', '跨平台兼容']
    }
  ];

  const apiCategories = [
    {
      title: '支付API',
      apis: [
        { name: '创建支付订单', method: 'POST', path: '/v1/payments', desc: '创建新的支付订单' },
        { name: '查询支付订单', method: 'GET', path: '/v1/payments/{id}', desc: '查询支付订单状态和详情' },
        { name: '关闭支付订单', method: 'POST', path: '/v1/payments/{id}/close', desc: '关闭未支付的订单' },
        { name: '申请退款', method: 'POST', path: '/v1/refunds', desc: '对已支付的订单申请退款' },
        { name: '查询退款', method: 'GET', path: '/v1/refunds/{id}', desc: '查询退款状态和详情' }
      ]
    },
    {
      title: '账户API',
      apis: [
        { name: '创建账户', method: 'POST', path: '/v1/accounts', desc: '创建新的商户账户' },
        { name: '查询账户', method: 'GET', path: '/v1/accounts/{id}', desc: '查询账户信息' },
        { name: '更新账户', method: 'PUT', path: '/v1/accounts/{id}', desc: '更新账户信息' },
        { name: '账户余额', method: 'GET', path: '/v1/accounts/{id}/balance', desc: '查询账户余额' },
        { name: '交易记录', method: 'GET', path: '/v1/accounts/{id}/transactions', desc: '查询账户交易记录' }
      ]
    },
    {
      title: '结算API',
      apis: [
        { name: '创建结算', method: 'POST', path: '/v1/settlements', desc: '创建新的结算请求' },
        { name: '查询结算', method: 'GET', path: '/v1/settlements/{id}', desc: '查询结算状态和详情' },
        { name: '结算记录', method: 'GET', path: '/v1/settlements', desc: '查询结算记录列表' }
      ]
    }
  ];

  const faqs = [
    {
      question: '如何开始使用PayPay支付API？',
      answer: '首先，您需要注册一个开发者账号，然后创建应用并获取API密钥。之后，您可以根据我们的文档指南，选择适合您的SDK进行集成。我们提供了详细的快速入门指南和示例代码，帮助您快速上手。'
    },
    {
      question: '支持哪些支付方式？',
      answer: '我们支持多种支付方式，包括但不限于：信用卡、借记卡、支付宝、微信支付、Apple Pay、Google Pay等。具体支持的支付方式可能因地区而异，您可以在开发者控制台查看您所在地区支持的支付方式。'
    },
    {
      question: '如何处理支付回调？',
      answer: '当支付状态发生变化时，我们会向您预先设置的回调URL发送通知。您需要在您的服务器上实现一个接收回调的接口，验证回调的真实性，并根据支付结果更新您的订单状态。详细的回调处理流程请参考我们的文档。'
    },
    {
      question: '如何确保支付安全？',
      answer: '我们采用多层次的安全措施保障支付安全，包括SSL加密、签名验证、风险控制等。作为开发者，您需要妥善保管API密钥，使用HTTPS协议，验证回调签名，并遵循我们的安全最佳实践。'
    },
    {
      question: '如何测试支付流程？',
      answer: '我们提供沙箱环境供开发者测试支付流程。在沙箱环境中，您可以使用测试账号和测试卡号进行支付测试，而不会产生真实的资金交易。完成测试后，您可以切换到生产环境进行真实交易。'
    }
  ];

  return (
    <div>
      <SEO 
        title="开发者中心"
        description="支付宝开放平台为开发者提供丰富的开发工具和技术文档，包括多种编程语言的SDK、详细的API文档、开发者社区和技术支持，助力开发者快速接入支付系统"
        keywords="开发者中心,支付API,SDK下载,API文档,开发者工具,支付集成,开发者社区"
        canonicalUrl="https://www.paypay.com/developers"
        ogData={{
          image: "https://www.paypay.com/images/developers-og.jpg",
          url: "https://www.paypay.com/developers"
        }}
      />
      
      {/* 开发者中心页面头部 */}
      <section style={{ 
        background: 'linear-gradient(135deg, #165dff 0%, #4080ff 100%)',
        color: 'white',
        padding: '80px 0 60px',
      }}>
        <div className="container">
          <Title level={1} style={{ color: 'white', textAlign: 'center', marginBottom: '16px' }}>
            开发者中心
          </Title>
          <Paragraph style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '18px', 
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            丰富的开发工具和技术文档，助力开发者快速接入我们的支付系统
          </Paragraph>
          <div style={{ textAlign: 'center' }}>
            <Button type="primary" size="large" style={{ background: 'white', color: '#165dff', borderColor: 'white', marginRight: '16px' }}>
              快速开始
            </Button>
            <Button ghost size="large">
              查看文档
            </Button>
          </div>
        </div>
      </section>

      {/* 快速入门 */}
      <section className="section">
        <div className="container">
          <Title level={2} className="section-title">快速入门</Title>
          <Paragraph className="section-subtitle">
            只需几个简单步骤，即可快速接入我们的支付系统
          </Paragraph>

          <Row gutter={[32, 32]} justify="center" style={{ marginTop: '48px' }}>
            {[
              { 
                title: '创建开发者账号', 
                desc: '注册并创建您的开发者账号，获取访问权限',
                icon: <UserOutlined style={{ fontSize: '32px', color: 'var(--primary-color)' }} />
              },
              { 
                title: '创建应用', 
                desc: '在开发者控制台创建应用，获取API密钥',
                icon: <AppstoreOutlined style={{ fontSize: '32px', color: 'var(--primary-color)' }} />
              },
              { 
                title: '集成SDK', 
                desc: '选择适合您的SDK，按照文档指南进行集成',
                icon: <CodeOutlined style={{ fontSize: '32px', color: 'var(--primary-color)' }} />
              },
              { 
                title: '测试与上线', 
                desc: '在沙箱环境测试，确认无误后切换到生产环境',
                icon: <RocketOutlined style={{ fontSize: '32px', color: 'var(--primary-color)' }} />
              }
            ].map((step, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
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
                  <div style={{ marginBottom: '16px' }}>
                    {step.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: '8px' }}>{step.title}</Title>
                  <Paragraph style={{ color: 'var(--text-secondary)' }}>{step.desc}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button type="primary" size="large">
              查看详细指南
            </Button>
          </div>
        </div>
      </section>

      {/* SDK下载 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <Title level={2} className="section-title">SDK下载</Title>
          <Paragraph className="section-subtitle">
            我们提供多种编程语言的SDK，帮助您快速集成我们的支付系统
          </Paragraph>

          <Row gutter={[24, 24]}>
            {sdkList.map((sdk, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
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
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ marginRight: '16px' }}>
                      {sdk.icon}
                    </div>
                    <div>
                      <Title level={4} style={{ margin: 0 }}>{sdk.name}</Title>
                      <Tag color="blue">{sdk.version}</Tag>
                    </div>
                  </div>
                  
                  <Paragraph style={{ 
                    color: 'var(--text-secondary)',
                    marginBottom: '16px'
                  }}>
                    {sdk.description}
                  </Paragraph>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <List
                      size="small"
                      dataSource={sdk.features}
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
                  
                  <Button type="primary" icon={<DownloadOutlined />}>
                    下载SDK
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* API文档 */}
      <section className="section">
        <div className="container">
          <Title level={2} className="section-title">API文档</Title>
          <Paragraph className="section-subtitle">
            详细的API接口说明，帮助开发者快速理解和使用我们的服务
          </Paragraph>

          <Tabs 
            defaultActiveKey="0" 
            centered
            items={apiCategories.map((category, index) => ({
              key: index,
              label: category.title,
              children: (
                <Card 
                  style={{ 
                    borderRadius: 'var(--radius-large)',
                    boxShadow: 'var(--shadow-1)',
                    border: 'none'
                  }}
                >
                  <List
                    itemLayout="horizontal"
                    dataSource={category.apis}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <Button type="link" icon={<RightOutlined />}>查看详情</Button>
                        ]}
                      >
                        <List.Item.Meta
                          title={
                            <Space>
                              <Tag color={
                                item.method === 'GET' ? 'green' : 
                                item.method === 'POST' ? 'blue' : 
                                item.method === 'PUT' ? 'orange' : 
                                item.method === 'DELETE' ? 'red' : 'default'
                              }>
                                {item.method}
                              </Tag>
                              <Text strong>{item.name}</Text>
                              <Text code>{item.path}</Text>
                            </Space>
                          }
                          description={item.desc}
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              )
            }))}
          />

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Button type="primary" size="large">
              查看完整API文档
            </Button>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <Title level={2} className="section-title">常见问题</Title>
          <Paragraph className="section-subtitle">
            解答开发过程中的常见问题，帮助您快速解决集成中遇到的困难
          </Paragraph>

          <Collapse 
            bordered={false} 
            defaultActiveKey={['0']}
            expandIconPosition="right"
            style={{ 
              background: 'transparent',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {faqs.map((faq, index) => (
              <Panel 
                header={
                  <Space>
                    <QuestionCircleOutlined style={{ color: 'var(--primary-color)' }} />
                    <Text strong>{faq.question}</Text>
                  </Space>
                } 
                key={index}
                style={{ 
                  marginBottom: '16px',
                  background: 'white',
                  borderRadius: 'var(--radius-medium)',
                  border: 'none'
                }}
              >
                <Paragraph style={{ color: 'var(--text-secondary)' }}>
                  {faq.answer}
                </Paragraph>
              </Panel>
            ))}
          </Collapse>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Button type="primary">
              查看更多问题
            </Button>
          </div>
        </div>
      </section>

      {/* 开发者社区 */}
      <section className="section">
        <div className="container">
          <Title level={2} className="section-title">开发者社区</Title>
          <Paragraph className="section-subtitle">
            加入我们的开发者社区，获取最新资讯，分享经验，解决问题
          </Paragraph>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card 
                className="animate-fadeIn" 
                style={{ 
                  height: '100%', 
                  borderRadius: 'var(--radius-large)',
                  boxShadow: 'var(--shadow-1)',
                  border: 'none',
                  textAlign: 'center'
                }}
                hoverable
              >
                <GithubOutlined style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '16px' }} />
                <Title level={4}>GitHub</Title>
                <Paragraph style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  访问我们的开源项目，获取示例代码和工具
                </Paragraph>
                <Button type="primary">访问GitHub</Button>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                className="animate-fadeIn" 
                style={{ 
                  height: '100%', 
                  borderRadius: 'var(--radius-large)',
                  boxShadow: 'var(--shadow-1)',
                  border: 'none',
                  textAlign: 'center'
                }}
                hoverable
              >
                <BookOutlined style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '16px' }} />
                <Title level={4}>开发者论坛</Title>
                <Paragraph style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  与其他开发者交流，分享经验，解决问题
                </Paragraph>
                <Button type="primary">加入论坛</Button>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                className="animate-fadeIn" 
                style={{ 
                  height: '100%', 
                  borderRadius: 'var(--radius-large)',
                  boxShadow: 'var(--shadow-1)',
                  border: 'none',
                  textAlign: 'center'
                }}
                hoverable
              >
                <ToolOutlined style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '16px' }} />
                <Title level={4}>技术支持</Title>
                <Paragraph style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  获取专业的技术支持，解决集成过程中的问题
                </Paragraph>
                <Button type="primary">联系支持</Button>
              </Card>
            </Col>
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
            准备好开始开发了吗？
          </Title>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px', marginBottom: '32px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            立即注册开发者账号，获取API密钥，开始集成我们的支付系统
          </Paragraph>
          <Space size="large">
            <Button type="primary" size="large" style={{ background: 'white', color: '#165dff', borderColor: 'white' }}>
              注册开发者账号
            </Button>
            <Button ghost size="large">
              查看开发文档
            </Button>
          </Space>
        </div>
      </section>
    </div>
  );
};

export default Developers;