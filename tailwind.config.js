/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'pink': '#E24475',
      'pink-500': '#fbcfe8',
      'white-500': '#A0A0A0',
      'gray': '#F4F5FA',
    },
    screens: {
      'mobile': "320px",
      'tablet': '720px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1000px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

