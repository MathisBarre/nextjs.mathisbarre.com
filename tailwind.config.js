module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '192': '48rem',
        '144': '36rem'
      },
      colors: {
        'primary': '#f50057',
        'darkPrimary': '#cc1355'
      },
      backgroundImage: theme => ({
        'hero': "url('/images/john-towner-JgOeRuGD_Y4-unsplash.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
