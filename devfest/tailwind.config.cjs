// import type { Config } from 'tailwindcss';
// import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
// import { join } from 'node:path';
//
// export default {
//   content: [
//     join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,md,analog,ag}'),
//     ...createGlobPatternsForDependencies(__dirname),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } satisfies Config;
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }),
    },
  },
  daisyui: {
    themes: [{
      dark: {
        ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
        primary: '#c30f2e',
        'primary-focus': '#a10d26',
        secondary: '#007aff',
        accent: '#ffd700',
        neutral: '#2a323c',
        'base-100': '#1d232a',
        'info': '#2094f3',
        'success': '#009485',
        'warning': '#ded576',
        'error': '#ff5724',
      }
    }]
  },
  plugins: [require('daisyui')],
};
