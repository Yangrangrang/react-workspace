/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // 'class' 또는 'media' 사용 가능
  theme: {
    extend: {
      colors: {
        // 커스텀 컬러 테마
        primary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#b3c5ff',
          400: '#8099ff',
          500: '#667eea',
          600: '#4d5fd1',
          700: '#3d4bb8',
          800: '#2e3a8f',
          900: '#1f2866',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#764ba2',
          600: '#5e3c82',
          700: '#4a2e65',
          800: '#3b2551',
          900: '#2e1d3e',
        },
      },
    },
  },
  plugins: [],
}
