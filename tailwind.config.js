module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
