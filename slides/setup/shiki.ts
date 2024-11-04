import { defineShikiSetup } from '@slidev/types'
import darcula from './darkula.json';

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'aurora-x',
      light: 'aurora-x'
    },
    langs: [
      "typescript", "angular-html", "angular-ts"
      ]
  }
});
