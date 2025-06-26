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
        },
        fontFamily: {
        sfPro: ['SF Pro Display', 'sans-serif'],
        redHat: ['Red Hat Display', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
