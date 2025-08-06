// 主题配置文件
export const theme = {
  token: {
    colorPrimary: '#165dff',
    colorSuccess: '#00b42a',
    colorWarning: '#ff7d00',
    colorError: '#f53f3f',
    colorTextBase: '#1d2129',
    colorBgBase: '#ffffff',
    borderRadius: 8,
    wireframe: false,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  },
  components: {
    Button: {
      borderRadius: 8,
      controlHeight: 40,
    },
    Card: {
      borderRadius: 12,
    },
    Menu: {
      itemHeight: 50,
      itemHoverColor: '#165dff',
      activeBarHeight: 2,
    },
  },
};

// 响应式断点
export const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};