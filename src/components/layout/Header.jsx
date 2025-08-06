import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const { Header: AntHeader } = Layout;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: '/', label: '首页' },
    { key: '/products', label: '产品' },
    { key: '/solutions', label: '解决方案' },
    { key: '/developers', label: '开发者中心' },
    { key: '/partners', label: '合作伙伴' },
    { key: '/news', label: '新闻与活动' },
  ];

  const headerStyle = {
    position: 'fixed',
    zIndex: 100,
    width: '100%',
    padding: '0 24px',
    background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    boxShadow: scrolled ? '0 2px 8px rgba(0, 0, 0, 0.06)' : 'none',
    transition: 'all 0.3s',
  };

  return (
    <AntHeader style={headerStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src={logo} alt="PayPay Logo" style={{ height: '32px' }} />
          </Link>
        </div>

        {/* 桌面端导航 */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center' }}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            style={{ 
              border: 'none', 
              background: 'transparent',
              display: { xs: 'none', md: 'flex' }
            }}
            items={menuItems.map(item => ({
              key: item.key,
              label: <Link to={item.key}>{item.label}</Link>
            }))}
          />
          <Space style={{ marginLeft: 24 }}>
            <Button type="default">登录</Button>
            <Button type="primary">注册</Button>
          </Space>
        </div>

        {/* 移动端菜单按钮 */}
        <div className="mobile-menu" style={{ display: { xs: 'block', md: 'none' } }}>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setVisible(true)}
            style={{ fontSize: '18px' }}
          />
        </div>

        {/* 移动端抽屉菜单 */}
        <Drawer
          title="菜单"
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
          width={280}
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            style={{ border: 'none' }}
            items={menuItems.map(item => ({
              key: item.key,
              label: <Link to={item.key} onClick={() => setVisible(false)}>{item.label}</Link>
            }))}
          />
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button type="default" block>登录</Button>
            <Button type="primary" block>注册</Button>
          </div>
        </Drawer>
      </div>
    </AntHeader>
  );
};

export default Header;