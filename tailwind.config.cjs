/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        flip: 'flip 0.6s forwards',
      },
    },
  },
  plugins: [],
  darkMode: 'class', //dark mode using the "class" strategy https://prismic.io/blog/tailwind-css-darkmode-tutorial#:~:text=This%20strategy%20provides%20more%20control,added%20to%20the%20HTML%20tree.&text=In%20summary%2C%20if%20you%20want%20to%20toggle%20your%20dark,manually%2C%20use%20the%20selector%20strategy.
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // match project structure
  theme: {
    extend: {},
  },
  plugins: [],
};
