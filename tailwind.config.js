/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-default": "#24A3B6",
        "btn-active": "red"
      },
    },
  },
  plugins: [],
};
