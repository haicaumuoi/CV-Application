/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js}",
    "./src/components/Form/**/*.js",
    "./src/components/View/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      custom: ["EB-Garamond", "Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
