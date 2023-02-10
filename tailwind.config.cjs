/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', "./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        myGray: '#F0F0F0',
        darkGray: '#E0E0E0',
        darkerGray: '#7C7C7C',
        mainBlack: '#0F0F0F',
        light: '#aaa',
        notWhite: "#f1f1f1"
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        slideleft: 'slideleft 1s ease-in-out'
      },
      keyframes: {
        slideleft: {
          from: {opacity: 0, transform: 'translateX(-240px)'},
          to: {opacity: 1, transform: 'translateX(0)'}
        }
      }
    },
  },
  plugins: [],
}
