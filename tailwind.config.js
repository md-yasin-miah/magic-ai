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
      'headingForeground': '#1F2328',
      'lightGray': 'rgb(102, 112, 127)',
    },
    fontFamily: {
      golos: ['Golos Text', 'sans-serif'],
      onest: ['Onest', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

