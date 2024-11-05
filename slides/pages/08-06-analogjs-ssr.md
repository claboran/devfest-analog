---
layout: 1-2-page
---

# SSR & SSG

Einsatz in Analog

<template v-slot:right>

<div class="p-8 flex flex-col gap-8">
<div>

### Server-Side Rendering

Out-of-the-Box aktiv und standardmäßig keine Konfiguration erforderlich.

</div>
<div>

**Aber Achtung:**

Manche Abhängigkeiten benötigen eine Transformation für SSR.

```typescript
import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  ssr: {
    noExternal: [
      'apollo-angular', // npm package import
      'apollo-angular/**', // npm package import along with sub-packages
      '@spartan-ng/**', // libs under the npmScope inside an Nx workspace
    ],
  },
  // ...other config
}));
```
</div>
</div>
</template>
