// https://raw.githubusercontent.com/tailwindlabs/tailwindcss/v1/stubs/defaultConfig.stub.js

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#F3F3F3',
        200: '#606060',
        300: '#181717',
      },
    },
    fontSize: {
      1: '3.75rem',
      2: '2rem',
      body: '1.125rem',
      'body-sm': '0.875rem',
      nav: '1.3125rem',
    },

    fontFamily: {
      sans: [
        'Roboto Condensed',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
