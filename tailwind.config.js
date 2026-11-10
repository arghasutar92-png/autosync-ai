/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        violet: {
          neon: "#8b5cf6",
          bright: "#a855f7",
        },
      },
      boxShadow: {
        neon: "0 0 30px rgba(139, 92, 246, 0.35)",
      },
    },
  },
  plugins: [],
};
