module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        mycolors:"#00BFFF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
