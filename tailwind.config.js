/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#ededed",
      },
      animation: {
        "spin-slow": "spin 3s linear forwards",
        "ping-once": "ping 1s cubic-bezier(0, 0, 0.2, 0.5) 1",
      },
      keyframes: {
        "ping-once": {
          "0%": { transform: "scale(1)", opacity: "0" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
