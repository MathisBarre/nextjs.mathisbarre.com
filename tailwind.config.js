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
        "primary-200": "#498DEC",
        "primary-500": "#3260A0",
        "primary-700": "#040031",
        "primary-800": "#070519",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
