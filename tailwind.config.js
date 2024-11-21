/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  container:{
    center: true,
    padding:{
      DEFAULT: "1rem",
      md: "2rem",
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

