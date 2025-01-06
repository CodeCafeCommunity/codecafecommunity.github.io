/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "hsl(0,0%,70%)",
      // background: "hsl(0, 0%, 30%)",
      primary: "#240e1f",
      secondary: "#c08021",
      accent: "#e96932",
    },
    extend: {},
  },
  plugins: [],
};
