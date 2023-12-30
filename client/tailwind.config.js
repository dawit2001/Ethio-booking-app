/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#125D98",
        secondary: "#F6FA70",
        success: "#00DFA2",
        danger: "#FF0060",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
