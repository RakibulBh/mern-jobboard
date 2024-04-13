/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      backgroundGreen : '#CAE6D2',
      logoGreen: '#1AD0A5',
      buttonBg: '#263238',
      grayText: '#656565',
      greenToUse: '#E6FEED',
      myWhite: '#FAFFFB',
      grayBg: '#CFCFCF',
      grayTextDark: '#504A4A',
      grayLighter: '#C5C5C5'
    },
    extend: {},
  },
  plugins: [],
}