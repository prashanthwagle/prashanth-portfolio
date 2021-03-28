module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        deepBlack: "#1A1A1C",
        darkGray: "#5CDB94",
        darkViolet: "#E03690",
        lightViolet: "black",
        white: "#EDF4E0",
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover"],
    },
  },
  plugins: [],
};
