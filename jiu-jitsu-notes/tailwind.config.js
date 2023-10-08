/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        20: "5rem",
        40: "10rem",
        xs: "20rem",
      },
    },
  },
  plugins: [],
};
