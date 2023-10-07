/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
        spaceGrotesk: ['var(--font-space-grotesk)', ...defaultTheme.fontFamily.sans],
        generalSans: ['var(--font-general-sans)', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        midas: '0px 0px 250px 15px rgba(15, 98, 254, 0.25)',
      },
      colors: {
        primary: '#34d572',
        secondary: '#f4f7fa',
        'off-white': '#fafffd',
        'off-black': '#1a1a1a',
        midas: {
          primary: '#0F62FE',
        },
        devhaven: {
          50: '#EBFFF0',
          100: '#D1FFDE',
          200: '#A3FFBD',
          300: '#7AFFA0',
          400: '#4DFF7F',
          500: '#1FFF5E',
          600: '#00E641',
          700: '#00AD31',
          800: '#007020',
          900: '#003810',
          950: '#001F09',
        },
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
      },
      keyframes: (theme) => ({
        'text-blink': {
          '0%': {
            color: theme('colors.black'),
            textShadow: `-1px -1px 0 ${theme('colors.gray.1')}, 1px -1px 0 ${theme(
              'colors.gray.1',
            )}, -1px 1px 0 ${theme('colors.gray.1')}, 1px 1px 0 ${theme('colors.gray.1')}`,
          },
          '25%': {
            color: 'currentColor',
            textShadow:
              '-1px -1px 0 transparent, 1px -1px 0 transparent, -1px 1px 0 transparent, 1px 1px 0 transparent',
          },
          '50%': {
            color: theme('colors.black'),
            textShadow: `-1px -1px 0 ${theme('colors.gray.1')}, 1px -1px 0 ${theme(
              'colors.gray.1',
            )}, -1px 1px 0 ${theme('colors.gray.1')}, 1px 1px 0 ${theme('colors.gray.1')}`,
          },
          '100%': {
            color: 'currentColor',
            textShadow:
              '-1px -1px 0 transparent, 1px -1px 0 transparent, -1px 1px 0 transparent, 1px 1px 0 transparent',
          },
        },
        title: {
          '0%': {
            'line-height': '0%',
            'letter-spacing': '0.25em',
            opacity: '0',
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%',
          },
          '80%': {
            opacity: '100%',
          },
          '100%': {
            'line-height': '100%',
            opacity: '100%',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }),
      animation: {
        'text-blink': 'text-blink 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        title: 'title 3s ease-out forwards',
        marquee: 'marquee var(--marquee-speed) linear infinite',
        marqueeReverse: 'marqueeReverse var(--marquee-speed) linear infinite',
      },
    },
  },

  plugins: [],
};
