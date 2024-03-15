/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
    },
    fontFamily: {
      golos: ['Golos Text', 'sans-serif'],
      onest: ['Onest', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

