/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff7607",
          secondary: "#f59e0b",
          success: "#16a34a",
          warning: "#dc2626",
          accent: "#232F3C",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#fff7ed",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
