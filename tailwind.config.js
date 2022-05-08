const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    './node_modules/litepie-datepicker/**/*.js'
  ],
  theme: {
    extend: { 
      colors: {
      // Change with you want it
      'litepie-primary': colors.sky, // color system for light mode
      'litepie-secondary': colors.gray // color system for dark mode
      }
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled']
    }
  },
  plugins: [],
}
