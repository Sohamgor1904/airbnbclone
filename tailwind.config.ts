import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          rausch: '#FF385C',
          'rausch-dark': '#E00B41',
          charcoal: '#222222',
          muted: '#717171',
          border: '#DDDDDD',
          light: '#F7F7F7',
          hover: '#F7F7F7',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: [
          'Circular',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 6px 16px rgba(0, 0, 0, 0.12)',
        floating: '0 6px 20px rgba(0, 0, 0, 0.2)',
        modal: '0 8px 28px rgba(0, 0, 0, 0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
