/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 60px -1 4px rgb(	211, 211, 211)",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
    },
  },
  colors: {
    midnight: "#011635",
    customblue: "#5889db",
  },
  plugins: [],
};
