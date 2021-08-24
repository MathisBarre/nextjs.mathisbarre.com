module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      spacing: {
        192: "48rem",
        144: "36rem",
      },
      colors: {
        "primary-100": "#f50057",
        "primary-200": "#cc1355",
        "primary-800": "#581a28",
      },
      backgroundImage: (theme) => ({
        hero: "url('/images/john-towner-JgOeRuGD_Y4-unsplash.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
