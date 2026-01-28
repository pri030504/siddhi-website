/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: {
          50: '#FAF8F6',
          100: '#F5F1ED',
          200: '#EBE3DB',
          300: '#D9CCC0',
          400: '#C4B5A6',
          500: '#B09E8C',
        },
        blush: {
          50: '#FDF5F7',
          100: '#FCEEF2',
          200: '#F9DDE5',
          300: '#F5BDD0',
          400: '#F09DB9',
          500: '#E87DA2',
        },
        gold: {
          50: '#FFFCF5',
          100: '#FFF9EB',
          200: '#FFF0CC',
          300: '#FFE599',
          400: '#FFD666',
          500: '#D4AF37',
        },
        charcoal: {
          50: '#F7F7F7',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#A8A8A8',
          400: '#6B6B6B',
          500: '#2D2D2D',
          600: '#1F1F1F',
          700: '#141414',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FFFEFA',
          200: '#FFFDF5',
          300: '#FFF9E6',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        elegant: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
