module.exports = {
  darkMode: "class", // important!
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            background: "var(--color-bg)",
            text: "var(--color-text)",
            primary: "var(--color-primary)",
            whiteFixed: "var(--color-white)",
        }
    },
  },
  plugins: [],
};
