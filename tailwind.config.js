/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['landing.html'],
  darkMode:'class',
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      colors :{
        primary: '#0e7490',
        secondary: '#64748b',
        dark: '#18181b'
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
