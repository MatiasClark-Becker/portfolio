

/** @type {import('tailwindcss').Config} */
/*import defaultTheme from 'tailwindcss/defaultTheme';*/

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Reem Kufi"', 'sans-serif'],
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
