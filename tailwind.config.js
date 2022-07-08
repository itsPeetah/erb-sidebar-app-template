const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: {
          DEFAULT: '#efebe9',
          light: '#fbfbfb',
          dark: '#bdb9b7',
          text: '#494949',
        },
        'dark-primary': {
          DEFAULT: '#424242',
          light: '#6d6d6d',
          dark: '#1b1b1b',
          text: '#fafafa',
        },
        accent: '#29b6f6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
