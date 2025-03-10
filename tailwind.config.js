/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{
      screens: {
        xl: '700px'
      }
    },
    extend: {},
  },
  plugins: [],
};
