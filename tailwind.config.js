/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#ff0000",
        Secondary: "#ff5a00",
        Accent: "#ff9a00",
        Optional: "#ffce00",
      },
    },
  },
  plugins: [],
};
