/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindTypography = require('@tailwindcss/typography');
const tailwindLineClamp = require('@tailwindcss/line-clamp');
const tailwindForms = require('@tailwindcss/forms');
const tailwindAspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    tailwindTypography,
    tailwindLineClamp,
    tailwindForms,
    tailwindAspectRatio,
  ],
};
