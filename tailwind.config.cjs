/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-page": "url('src/assets/auth-bg.jpg')",
      },
      colors: {
        orange: "#ed7c12",
        "dark-brown": "#211200",
        pageMainColor: "#f5f3f3",
        ashBgColor: "#f5f3f3",
        babyPinkBg: "#f5eee9",
        ashText: "#9b9fa7",
        pepperRed: "#e80013",
        blackText: "#515151",
        "dark-blue": "#030021",
      },
      screens: {
        md: "870px",
      },
      fontFamily: {
        "frank-ruhl": ["Frank Ruhl Libre", "serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      gridTemplateColumns: {
        "root-layout": "5rem 1fr",
        "menu-items": "repeat(auto-fit, minmax(20rem, 1fr))",
        "menu-small-screens": "repeat(auto-fit, minmax(12rem, 1fr))",
        "cart-items": "3fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
