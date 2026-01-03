/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#A3CEF1",
        pastelPink: "#F5C6EC",
        pastelGreen: "#C6F1C6",
        pastelYellow: "#FFF3B0",
        pastelPurple: "#D9B3FF",
        pastelPeach: "#FFD6BA",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
