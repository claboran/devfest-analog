import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'aurora-x',
      light: 'aurora-x'
    },
    langs: [
      "typescript", "angular-html", "angular-ts", "markdown"
      ]
  }
});
