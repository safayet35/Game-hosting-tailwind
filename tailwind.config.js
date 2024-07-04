/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Oxanium, sans-serif',
        para: 'Manrope, sans-serif'
      },
      colors: {
        primary: '#5623d8',
        gradient: '#e615af',
        text: '#adb7be',
        background: '#1e1f22'
      }
    }
  },
  plugins: []
};
