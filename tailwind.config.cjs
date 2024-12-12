import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import daisyui from 'daisyui';

module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  theme: {
    fontSize: {
      xs: '0.34rem',
      sm: '0.53rem',
      base: '0.64rem',
      xl: '0.8rem',
      '2xl': '1.5rem',
      '3xl': '1.7rem',
      '4xl': '2rem',
      '5xl': '2.6rem',
    },
  },
  daisyui: {
    themes: [
      {
        custom: {
          primary: '#ff0000',
          secondary: '#888888',
          accent: '#afe2a1',
          neutral: '#ffffff',
          'base-100': '#efefef',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
    darkTheme: "custom", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root"
  },
  plugins: [
    require('daisyui'),
    iconsPlugin({
      collections: getIconCollections(['mdi']),
    }),
  ],
};
