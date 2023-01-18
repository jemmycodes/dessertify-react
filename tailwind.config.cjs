/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ea580c",
        pageMainColor: "#f5f3f3",
        ashBgColor: "#f5f3f3",
        babyPinkBg: "#f5eee9",
        ashText: "#9b9fa7",
        pepperRed: "#e80013",
        blackText: "#515151",
      },
    },
  },
  plugins: [],
};
