/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mona: ['Mona Sans', 'sans'],  
      anton: ['Anton'],  
    },
  },
  plugins: [
    require('daisyui'),
  ],
}