import React, { useState, Fragment } from 'react';
import { Typography, Row, Col, Card, Button, Tabs, List, Space, Tag, Pagination, Input } from 'antd';
import SEO from '../components/SEO';
import { 
  CalendarOutlined, 
  EyeOutlined, 
  SearchOutlined,
  RightOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
  NotificationOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const newsData = [
    {
      id: 1,
      title: 'PayPay支付与某大型电商平台达成战略合作',
      summary: '近日，PayPay支付与国内某大型电商平台签署战略合作协议，将为该平台提供全方位的支付解决方案，助力其数字化转型。',
      date: '2023-06-15',
      category: '公司新闻',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      views: 1256
    },
    {
      id: 2,
      title: 'PayPay支付荣获"2023年度最佳支付创新奖"',
      summary: 'PayPay支付凭借其创新的跨境支付解决方案，在2023年金融科技创新大会中获得"年度最佳支付创新奖"。',
      date: '2023-05-20',
      category: '公司荣誉',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      views: 986
    },
    {
      id: 3,
      title: 'PayPay支付发布全新开发者工具包，简化支付集成流程',
      summary: '为了帮助开发者更快速地接入支付系统，PayPay支付发布了全新的开发者工具包，包括多语言SDK和完善的API文档。',
      date: '2023-04-12',
      category: '产品更新',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      views: 1542
    },
    {
      id: 4,
      title: 'PayPay支付完成新一轮融资，估值突破10亿美元',
      summary: 'PayPay支付宣布完成C轮融资，融资金额达2亿美元，公司估值突破10亿美元，正式进入独角兽行列。',
      date: '2023-03-08',
      category: '公司新闻',
      image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      views: 2103
    },
    {
      id: 5,
      title: 'PayPay支付推出小微企业专属支付解决方案',
      summary: '为了帮助小微企业降低支付成本，提升经营效率，PayPay支付推出了小微企业专属支付解决方案，提供更优惠的费率和更灵活的结算方式。',
      date: '2023-02-15',
      category: '产品更新',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      views: 876
    },
    {
      id: 6,
      title: 'PayPay支付与某银行达成合作，共同推进数字支付创新',
      summary: 'PayPay支付与国内某大型银行签署合作协议，双方将在数字支付领域展开深入合作，共同推进支付创新和普惠金融发展。',
      date: '2023-01-10',
      category: '公司新闻',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      views: 1320
    }
  ];

  const eventsData = [
    {
      id: 1,
      title: '2023全球支付创新峰会',
      summary: 'PayPay支付将参加在上海举办的2023全球支付创新峰会，并发表主题演讲《数字支付的未来趋势》。',
      date: '2023-07-15',
      location: '上海',
      type: '线下活动',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 2,
      title: '支付安全技术沙龙',
      summary: 'PayPay支付技术团队将举办线上技术沙龙，分享支付安全领域的最新技术和实践经验。',
      date: '2023-06-25',
      location: '线上',
      type: '线上活动',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 3,
      title: '跨境电商支付解决方案研讨会',
      summary: 'PayPay支付将举办跨境电商支付解决方案研讨会，邀请行业专家和客户共同探讨跨境支付的挑战和机遇。',
      date: '2023-08-10',
      location: '深圳',
      type: '线下活动',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
    }
  ];

  const resourcesData = [
    {
      id: 1,
      title: '2023年支付行业趋势报告',
      summary: '深入分析支付行业的最新趋势和发展方向，为企业提供战略参考。',
      type: '行业报告',
      icon: <FileTextOutlined />
    },
    {
      id: 2,
      title: '如何选择适合您企业的支付解决方案',
      summary: '详细介绍不同类型企业应如何选择最适合的支付解决方案，提高支付效率。',
      type: '白皮书',
      icon: <FileTextOutlined />
    },
    {
      id: 3,
      title: '支付安全最佳实践指南',
      summary: '分享支付安全领域的最佳实践，帮助企业构建安全可靠的支付系统。',
      type: '技术指南',
      icon: <FileTextOutlined />
    },
    {
      id: 4,
      title: 'PayPay支付产品介绍视频',
      summary: '详细介绍PayPay支付的产品功能和优势，帮助您快速了解我们的服务。',
      type: '视频',
      icon: <VideoCameraOutlined />
    }
  ];

  return (
    <div>
      <SEO 
        title="新闻与活动"
        description="了解支付宝开放平台的最新动态、行业资讯和即将举办的活动，包括公司新闻、活动日历和资源中心"
        keywords="支付新闻,支付活动,行业资讯,支付报告,技术沙龙,支付峰会"
        canonicalUrl="https://www.paypay.com/news"
        ogData={{
          image: "https://www.paypay.com/images/news-og.jpg",
          url: "https://www.paypay.com/news"
        }}
      />
      {/* 新闻与活动页面头部 */}
      <section style={{ 
        background: 'linear-gradient(135deg, #165dff 0%, #4080ff 100%)',
        color: 'white',
        padding: '80px 0 60px',
      }}>
        <div className="container">
          <Title level={1} style={{ color: 'white', textAlign: 'center', marginBottom: '16px' }}>
            新闻与活动
          </Title>
          <Paragraph style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '18px', 
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            了解PayPay支付的最新动态、行业资讯和即将举办的活动
          </Paragraph>
        </div>
      </section>

      {/* 新闻与活动内容 */}
      <section className="section">
        <div className="container">
          <Tabs 
            defaultActiveKey="1" 
            centered
            items={[
              {
                key: '1',
                label: (
                  <span>
                    <NotificationOutlined style={{ marginRight: '8px' }} />
                    公司新闻
                  </span>
                ),
                children: (
                  <div>
                    <div style={{ marginBottom: '32px' }}>
                      <Search
                        placeholder="搜索新闻"
                        enterButton={<SearchOutlined />}
                        size="large"
                        style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
                      />
                    </div>

                    <Row gutter={[32, 32]}>
                      {newsData.map((news, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                          <Card 
                            hoverable
                            cover={
                              <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img 
                                  alt={news.title} 
                                  src={news.image} 
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                              </div>
                            }
                            style={{ 
                              height: '100%', 
                              borderRadius: 'var(--radius-large)',
                              boxShadow: 'var(--shadow-1)',
                              border: 'none'
                            }}
                          >
                          <div style={{ marginBottom: '12px' }}>
                            <Tag color="blue">{news.category}</Tag>
                          </div>
                          <Title level={4} style={{ marginBottom: '12px' }}>{news.title}</Title>
                          <Paragraph 
                            ellipsis={{ rows: 3 }}
                            style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}
                          >
                            {news.summary}
                          </Paragraph>
                          <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}>
                            <Space>
                              <CalendarOutlined style={{ color: 'var(--text-tertiary)' }} />
                              <Text type="secondary">{news.date}</Text>
                            </Space>
                            <Space>
                              <EyeOutlined style={{ color: 'var(--text-tertiary)' }} />
                              <Text type="secondary">{news.views}</Text>
                            </Space>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>

                  <div style={{ textAlign: 'center', marginTop: '48px' }}>
                      <Pagination 
                        current={currentPage} 
                        total={50} 
                        onChange={setCurrentPage} 
                        showSizeChanger={false}
                      />
                    </div>
                   </div>
                )
              },
              
              {
                key: '2',
                label: (
                  <span>
                    <CalendarOutlined style={{ marginRight: '8px' }} />
                    活动日历
                  </span>
                ),
                children: (
                  <div>
                    <Row gutter={[32, 32]}>
                    {eventsData.map((event, index) => (
                      <Col xs={24} md={8} key={index}>
                        <Card 
                          hoverable
                          cover={
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                              <img 
                                alt={event.title} 
                                src={event.image} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                              <div style={{ 
                                position: 'absolute', 
                                top: '16px', 
                                right: '16px',
                                background: 'rgba(22, 93, 255, 0.9)',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: 'var(--radius-small)'
                              }}>
                                {event.date}
                              </div>
                            </div>
                          }
                          style={{ 
                            height: '100%', 
                            borderRadius: 'var(--radius-large)',
                            boxShadow: 'var(--shadow-1)',
                            border: 'none'
                          }}
                        >
                          <div style={{ marginBottom: '12px' }}>
                            <Tag color={event.type === '线上活动' ? 'green' : 'blue'}>{event.type}</Tag>
                            <Tag>{event.location}</Tag>
                          </div>
                          <Title level={4} style={{ marginBottom: '12px' }}>{event.title}</Title>
                          <Paragraph 
                            ellipsis={{ rows: 3 }}
                            style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}
                          >
                            {event.summary}
                          </Paragraph>
                          <Button type="primary">
                            立即报名
                          </Button>
                        </Card>
                      </Col>
                    ))}
                  </Row>

                  <div style={{ textAlign: 'center', marginTop: '48px' }}>
                      <Button type="primary">
                        查看更多活动
                      </Button>
                    </div>
                   </div>
                )
              },
              {
                key: '3',
                label: (
                  <span>
                    <FileTextOutlined style={{ marginRight: '8px' }} />
                    资源中心
                  </span>
                ),
                children: (
                  <div>
                    <Row gutter={[32, 32]}>
                    {resourcesData.map((resource, index) => (
                      <Col xs={24} sm={12} key={index}>
                        <Card 
                          hoverable
                          style={{ 
                            height: '100%', 
                            borderRadius: 'var(--radius-large)',
                            boxShadow: 'var(--shadow-1)',
                            border: 'none'
                          }}
                        >
                          <div style={{ display: 'flex' }}>
                            <div style={{ 
                              marginRight: '16px',
                              width: '48px',
                              height: '48px',
                              background: 'var(--primary-light)',
                              borderRadius: 'var(--radius-small)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '24px',
                              color: 'var(--primary-color)'
                            }}>
                              {resource.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ marginBottom: '8px' }}>
                                <Tag color="blue">{resource.type}</Tag>
                              </div>
                              <Title level={4} style={{ marginBottom: '12px' }}>{resource.title}</Title>
                              <Paragraph 
                                ellipsis={{ rows: 2 }}
                                style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}
                              >
                                {resource.summary}
                              </Paragraph>
                              <Button type="link" style={{ padding: 0 }}>
                                立即下载 <RightOutlined />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>

                  <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <Button type="primary">
                      查看更多资源
                    </Button>
                  </div>
                  </div>
                )
              }
            ]}
          />
        </div>
      </section>

      {/* 订阅新闻 */}
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
            订阅我们的新闻
          </Title>
          <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px', marginBottom: '32px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            及时获取PayPay支付的最新动态、行业资讯和活动信息
          </Paragraph>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Input.Group compact>
              <Input 
                style={{ width: 'calc(100% - 120px)' }} 
                placeholder="请输入您的邮箱" 
                size="large"
              />
              <Button type="primary" size="large" style={{ width: '120px', background: 'white', color: '#165dff', borderColor: 'white' }}>
                订阅
              </Button>
            </Input.Group>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;