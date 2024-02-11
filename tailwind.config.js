/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["JosefinSans"],
      display: ["Mikoena-Demo"],
      italic: ["JosefinSans"],
      bold: ["JosefinSans"],
    },
    extend: {
      flexGrow: {
        2: "2",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#CD395E",
          secondary: "#E87E98",
          accent: "#EC587C",
          neutral: "#16090C",
          "base-100": "#FAF1F3",
          info: "#ffffff",
          success: "#00ffff",
          warning: "#ffffff",
          error: "#ffffff",
        },
        dark: {
          primary: "#A8EE90",
          secondary: "#168F63",
          accent: "#38E1CF",
          neutral: "#E6FAE0",
          "base-100": "#0C1708",
          info: "#ffffff",
          success: "#00ffff",
          warning: "#ffffff",
          error: "#ffffff",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
  ],
};
