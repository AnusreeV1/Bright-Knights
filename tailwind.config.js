module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "",
      secondary: "Lato",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      colors: {
        primary: "#810CA8", //purple3
        secondary: "#2D033B", //purple4
        accent: {
          primary: "#810CA8", //purple3
          primary_hover: "#C147E9", //purple2
          secondary: "#810CA8", //purple3
          secondary_hover: "#C147E9", //purple2
          tertiary: "#E5B8F4", //purple1
        },
        tertiary: "#E5B8F4", //purple1
        purple2l: "#cb74e8", //purple2light
        purple3l: "#8836a3", //purple3light
      },
      backgroundImage: {
        hero: "url('../src/assets/img/bg.png')",
      },
      dropShadow: {
        primary: " 0px 5px 5px rgba(75, 93, 104, 0.1)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        // 1: "200px minmax(900px, 1fr) 100px",
        // 2: "200px minmax(900px, 1fr) 100px",
        // Complex site-specific column configuration
      },
    },
  },
  plugins: [],
};
