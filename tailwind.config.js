/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    keyframes: (theme) => ({
      "text-blink": {
        "0%": {
          color: theme("colors.black"),
          textShadow: `-1px -1px 0 ${theme(
            "colors.gray.1"
          )}, 1px -1px 0 ${theme("colors.gray.1")}, -1px 1px 0 ${theme(
            "colors.gray.1"
          )}, 1px 1px 0 ${theme("colors.gray.1")}`,
        },
        "25%": {
          color: "currentColor",
          textShadow:
            "-1px -1px 0 transparent, 1px -1px 0 transparent, -1px 1px 0 transparent, 1px 1px 0 transparent",
        },
        "50%": {
          color: theme("colors.black"),
          textShadow: `-1px -1px 0 ${theme(
            "colors.gray.1"
          )}, 1px -1px 0 ${theme("colors.gray.1")}, -1px 1px 0 ${theme(
            "colors.gray.1"
          )}, 1px 1px 0 ${theme("colors.gray.1")}`,
        },
        "100%": {
          color: "currentColor",
          textShadow:
            "-1px -1px 0 transparent, 1px -1px 0 transparent, -1px 1px 0 transparent, 1px 1px 0 transparent",
        },
      },
    }),
    animation: {
      "text-blink": "text-blink 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  plugins: [],
};
