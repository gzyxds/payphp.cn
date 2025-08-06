import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

const MainLayout = () => {
  return (
    <HelmetProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ marginTop: 'var(--header-height)' }}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </HelmetProvider>
  );
};

export default MainLayout;