module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color_Hot_Pink_LP: "#E971AC",
        color_Governor_Bay_LLB: "#4D5D8F",
        color_Midnight_Express_DB: "#0C183C",
        color_Medium_Aquamarine_LG: "#54DCAA",
        color_Lucky_Point_LB: "#1E2B5F",
      },
      backgroundImage: {
        desktop: "url('/src/assets/background.png')",
        mobile: "url('/src/assets/mobile-bg.png')",
      },
    },
  },
  plugins: [],
};
