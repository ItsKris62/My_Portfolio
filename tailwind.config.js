module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#193022',
        secondary: '#c2c8c4',
        accent: '#445b3c',
        neutral: '#504f53',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        playwrite: ['Playwrite AU QLD', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        edu: ['Edu Australia Hand', 'cursive'],
      },
    },
  },
  plugins: [],
}
