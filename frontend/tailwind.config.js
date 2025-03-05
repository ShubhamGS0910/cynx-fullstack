/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // Enables dark mode based on class
    theme: {
      extend: {
        colors: {
          primary: "#FF6B00", // Vibrant Orange
          secondary: "#1E1E1E", // Dark Charcoal
          accent: "#0D6EFD", // Neon Blue
          lightBg: "#F9F9F9", // Light theme background
          darkBg: "#121212", // Dark theme background
        },
      },
      animation: {
        float: "float 6s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
    plugins: [],
  };
  