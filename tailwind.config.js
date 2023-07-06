/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "481px",
      md: "769px",
      lg: "993px",
      lg2: "1181px",
      xl: "1281px",
      "2xl": "1536px",
    },

    extend: {
      fontSize: {
        "-2": "var(--step--2)",
        "-1": "var(--step--1)",
        0: "var(--step-0)",
        1: "var(--step-1)",
        2: "var(--step-2)",
        3: "var(--step-3)",
        4: "var(--step-4)",
        5: "var(--step-5)",
      },
      colors: {
        "primary-pink-400": "var(--primary-pink-400)",
        "primary-pink-200": "var(--primary-pink-200)",
        "secondary-yellow": "var(--secondary-yellow)",
        headerGrey: "#F8F8F8",
        headerLink: "#040415",
      },
      fontFamily: {
        sans: ["var(--main-font)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
