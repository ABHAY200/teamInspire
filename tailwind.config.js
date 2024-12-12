/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#00645C',
        'primary-green-light': '#068379',
        'primary-green-dark': '#08645C',
        'off-white': '#C4C4C4',
      },
    },
  },
  plugins: [],
}