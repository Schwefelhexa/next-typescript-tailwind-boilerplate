/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

module.exports = {
  purge: ['src/**/*.tsx', 'src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
