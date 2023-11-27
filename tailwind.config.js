/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Space Grotesk'", "sans-serif"],
    },
    colors: {
      red: "hsl(0, 100%, 66%)",
      white: "hsl(0, 0%, 100%)",
      lightGrayishViolet: "hsl(270, 3%, 87%)",
      darkGrayishViolet: "hsl(279, 6%, 55%)",
      veryDarkViolet: "hsl(278, 68%, 11%)",
      purple: "hsl(249, 99%, 64%)",
      magenta: "hsl(278, 94%, 30%)",
    },
  },
  plugins: [],
}
