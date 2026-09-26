/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#faf6ef',
          200: '#f3ebdd',
          300: '#e9dcc6',
          400: '#dcc9ab',
        },
        cocoa: {
          400: '#9c8a78',
          500: '#7a6858',
          700: '#4a3b31',
          900: '#2e241e',
        },
        caramel: {
          50: '#fbf3ea',
          100: '#f4e2cd',
          200: '#e9c9a4',
          300: '#ddaa78',
          400: '#c98e58',
          500: '#b07443',
          600: '#935d35',
          700: '#74482a',
        },
        sage: {
          100: '#e7ecdf',
          500: '#6f8060',
          700: '#4f5c43',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
