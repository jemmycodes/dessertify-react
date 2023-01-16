/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ea580c",
        pageMainColor: "#f5f3f3",
      },
    },
  },
  plugins: [],
};
