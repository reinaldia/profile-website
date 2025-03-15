/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      before: ["hover", "focus"],
      after: ["hover", "focus"],
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
  },
  plugins: [plugin(function ({ addUtilities }) {
    addUtilities({
      ".slanted-edge-sm": {
        "clip-path":
        "polygon(0 0, calc(100% - 1.5rem) 0, 100% 1.5rem, 100% 100%, 100% 100%, 1.5rem 100%, 0 calc(100% - 1.5rem), 0 0)",
      },
      ".slanted-edge-md": {
        "clip-path":
          "polygon(0 0, calc(100% - 2.25rem) 0, 100% 2.25rem, 100% 100%, 100% 100%, 2.25rem 100%, 0 calc(100% - 2.25rem), 0 0)",
      },
      ".slanted-edge-lg": {
        "clip-path":
          "polygon(0 0, calc(100% - 3rem) 0, 100% 3rem, 100% 100%, 100% 100%, 3rem 100%, 0 calc(100% - 3rem), 0 0)",
      },
    });
  }),],
};
