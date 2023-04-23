/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "bg-white": "var(--color-white)",
        "bg-primary": "var(--color-primary)",
        "bg-black": "var(--color-black)",
        "bg-btn": "var(--color-btn)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [require("daisyui")],
};
