/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#165dff',
          hover: '#4080ff',
          active: '#0e42d2',
          light: '#e8f3ff',
        },
        text: {
          primary: '#1d2129',
          secondary: '#4e5969',
          tertiary: '#86909c',
        },
        bg: {
          DEFAULT: '#ffffff',
          gray: '#f5f7fa',
        },
        border: '#e5e6eb',
      },
      boxShadow: {
        '1': '0 4px 8px rgba(0, 0, 0, 0.05)',
        '2': '0 8px 16px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'small': '4px',
        'medium': '8px',
        'large': '12px',
      },
    },
  },
  plugins: [],
}