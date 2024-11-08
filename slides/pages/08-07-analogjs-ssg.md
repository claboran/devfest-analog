---
layout: 1-2-page
---

# SSR & SSG

Einsatz in Analog

<template v-slot:right>
<div class="p-8 flex flex-col ">

### Static Site Generation
Einfache Konfiguration in der `vite.config.ts`. Alle statischen Routen werden unter `prerender` angegeben.

```typescript
import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    analog({
      prerender: {
        routes: async () => [
          '/',
          '/about',
          '/blog',
          '/blog/posts/2023-02-01-my-first-post',
        ],
      },
    }),
  ],
}));
```
</div>
</template>
