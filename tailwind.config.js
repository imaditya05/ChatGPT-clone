/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#202123",
        "light-gray": "#343541",
      },
    },
  },
  plugins: [],
};
