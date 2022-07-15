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
        "hero-content": "700px 1fr",
        "navbar-hero": "100px 600px",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
