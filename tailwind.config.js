/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#eaf3fa',
          100: '#d5e7f5',
          200: '#358ad1',  // Base color
          300: '#287abf',
          400: '#1b69ad',
          500: '#0d599a',
          600: '#004888',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};