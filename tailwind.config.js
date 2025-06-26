module.exports = {
  darkMode: "class", // important!
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            background: "var(--color-bg)",
            text: "var(--color-text)",
            MaincontentBG: "var(--color-insidecontentbg)",
            primary: "var(--color-primary)",
            whiteFixed: "var(--color-white)",
            red: "#FF0000"
        }
    },
  },
  plugins: [],
};
