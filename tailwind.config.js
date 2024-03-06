/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#e3ded8",
        gray2: "#d4cdc8",
      },
      animation: {
        "spin-slow": "spin 3s linear forwards",
        "ping-once": "ping 1s cubic-bezier(0, 0, 0.2, 0.5) 1",
        "slide-in-left": "slideInLeft 3s ease-out forwards",
      },
      keyframes: {
        "ping-once": {
          "0%": { transform: "scale(1)", opacity: "0" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
