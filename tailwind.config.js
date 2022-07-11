module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "netflix-background": 'url("/src/assets/netflixBackground.jpg")',
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        "navbar-content": "100px 1fr",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
