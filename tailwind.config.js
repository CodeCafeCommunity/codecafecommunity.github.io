/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#b3b3b3",
        // background: "#4d4d4d",
        primary: "#240e1f",
        secondary: "#c08021",
        accent: "#e96932",
      },
    },
  },
  plugins: [],
};
