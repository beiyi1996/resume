/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    fontSize: {
      sm: ["12px", "16px"],
      base: ["14px", "20px"],
      lg: ["16px", "24px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "30px"],
    },
    extend: {},
  },
  plugins: [],
};
