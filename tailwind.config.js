/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
        spaceGrotesk: [
          "var(--font-space-grotesk)",
          ...defaultTheme.fontFamily.sans,
        ],
        generalSans: [
          "var(--font-general-sans)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: "#34d572",
        secondary: "#f4f7fa",
        "off-white": "#fafffd",
        "off-black": "#1a1a1a",
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
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
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      }),
      animation: {
        "text-blink": "text-blink 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        title: "title 3s ease-out forwards",
        marquee: "marquee 25s linear infinite",
        marqueeReverse: "marqueeReverse 25s linear infinite",
      },
    },
  },

  plugins: [],
};
