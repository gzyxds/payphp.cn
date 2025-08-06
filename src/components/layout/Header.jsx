import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Space, Grid } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const { Header: AntHeader } = Layout;

/**
 * 页面顶部导航组件
 * 支持响应式布局，在移动端和桌面端有不同的显示方式
 * 包含透明/不透明状态切换和移动端抽屉菜单
 */
const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // 使用 Ant Design 的响应式断点
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

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

  /**
   * 根据滚动状态和屏幕尺寸设置头部样式
   */
  const headerStyle = {
    position: 'fixed',
    zIndex: 100,
    width: '100%',
    padding: screens.xs ? '0 16px' : '0 24px',
    height: screens.xs ? '56px' : '64px',
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
            <img 
              src={logo} 
              alt="PayPay Logo" 
              style={{ height: screens.xs ? '24px' : '32px', transition: 'height 0.3s' }} 
            />
          </Link>
        </div>

        {/* 桌面端导航 */}
        {screens.md && (
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center' }}>
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              style={{ 
                border: 'none', 
                background: 'transparent',
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
        )}

        {/* 移动端菜单按钮 */}
        {!screens.md && (
          <div className="mobile-menu">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
              style={{ fontSize: '18px', padding: '4px 8px' }}
              aria-label="打开菜单"
            />
          </div>
        )}

        {/* 移动端抽屉菜单 */}
        <Drawer
          title={
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>菜单</span>
              <Button 
                type="text" 
                icon={<CloseOutlined />} 
                onClick={() => setVisible(false)}
                aria-label="关闭菜单"
              />
            </div>
          }
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
          width={screens.xs ? '80%' : 280}
          styles={{
            body: { padding: '16px 0' },
            header: { padding: '16px' },
            mask: { animation: 'none' },
            content: { animation: 'none' }
          }}
          closeIcon={null}
          maskMotion={false}
          motion={false}
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
          <div style={{ margin: '24px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button type="default" block size={screens.xs ? 'large' : 'middle'}>登录</Button>
            <Button type="primary" block size={screens.xs ? 'large' : 'middle'}>注册</Button>
          </div>
        </Drawer>
      </div>
    </AntHeader>
  );
};

export default Header;