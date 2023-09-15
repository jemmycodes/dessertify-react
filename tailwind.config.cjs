/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ed7c12",
        "dark-brown": "#211200",
        pageMainColor: "#f5f3f3",
        ashBgColor: "#f5f3f3",
        babyPinkBg: "#f5eee9",
        ashText: "#9b9fa7",
        pepperRed: "#e80013",
        blackText: "#515151",
      },
      fontFamily: {
        "frank-ruhl": ["Frank Ruhl Libre", "serif"],
        poppins: ["Poppins", "san-serif"],
      },
      gridTemplateColumns: {
        "root-layout": "5rem 1fr",
      },
    },
  },
  plugins: [],
};
