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
      'xs':'320px',
      'mb':'428px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
    extend: {},
  },
  plugins: [],
}

