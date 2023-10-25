/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lato", "sans-serif"],
      },
      animation: {
        "spin-once": "spin 0.5s linear",
      },
      colors: {
        primary: "rgb(168 85 247)",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
