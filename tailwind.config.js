/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontSize: {
      sm: ["12px", "16px"],
      base: ["14px", "20px"],
      lg: ["16px", "24px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "30px"],
    },
    extend: {
      colors: {
        text: {
          DEFAULT: "#707070",
          dark: "#fafaf9",
        },
      },
      borderColor: {
        DEFAULT: "#4b5563",
        dark: "#fafaf9",
      },
      backgroundColor: {
        DEFAULT: "#FFFFFF",
        dark: "#52525b",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".btn-custom": {
          "@apply border border-gray-600 bg-gray-600 p-1 text-gray-50": {},
        },
        ".btn-custom:hover": {
          "@apply bg-transparent text-gray-600": {},
        },
        ".dark .btn-custom": {
          "@apply bg-stone-50 border-stone-50 text-zinc-600": {},
        },
        ".dark .btn-custom:hover": {
          "@apply bg-transparent text-stone-50": {},
        },
        ".border-custom": {
          "@apply border border-gray-600": {},
        },
        ".dark .border-custom": {
          "@apply border-stone-50": {},
        },
        ".border-t-none": {
          "@apply border-t-0": {},
        },
        ".border-b-none": {
          "@apply border-b-0": {},
        },
        ".border-l-none": {
          "@apply border-l-0": {},
        },
        ".border-r-none": {
          "@apply border-r-0": {},
        },
        ".banner-section": {
          "@apply flex flex-col bg-stone-200": {},
        },
        ".dark .banner-section": {
          "@apply bg-zinc-700": {},
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          backgroundColor: theme("background.DEFAULT"),
          color: theme("colors.text.DEFAULT"),
          borderColor: theme("borderColor.DEFAULT"),
        },
        ".dark body": {
          backgroundColor: theme("backgroundColor.dark"),
          color: theme("colors.text.dark"),
          borderColor: theme("borderColor.dark"),
        },
        ".dark *": {
          borderColor: theme("borderColor.dark"),
        },
      });
    }),
  ],
};
