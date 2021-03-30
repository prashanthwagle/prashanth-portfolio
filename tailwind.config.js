module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        secondary: "#F2A119",
        text: "black",
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
