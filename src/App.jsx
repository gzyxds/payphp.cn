import React from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import MainLayout from './components/layout/MainLayout';

// 页面组件
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Developers from './pages/Developers';
import Partners from './pages/Partners';
import News from './pages/News';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="developers" element={<Developers />} />
            <Route path="partners" element={<Partners />} />
            <Route path="news" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;