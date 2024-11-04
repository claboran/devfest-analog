---
layout: 1-2-page
---

# Content Routes

Markdown und anderer deklarativer Inhalt.

* <span class="text-sm">Markdown Route</span>
* <span class="text-sm">Syntax Highlighting</span>
* <span class="font-bold">Mermaid Support</span>
* <span class="text-sm">Content Route</span>

<template v-slot:right>

<div class="p-8 pb-0 flex flex-col gap-10">

<div class="flex flex-col">
<div class="font-bold">Mermaid Support</div>

Unterstützung für [Mermaid](https://mermaid-js.github.io/)-Diagramme durch dynamischen Import in der Markdown-Renderer-Konfiguration.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideContent(withMarkdownRenderer({
      preloadMermaid: () => import('mermaid'),
    })),
  ],
};
```
<div class="mt-2">
Benutzung in Markdown durch "```mermaid" block:
```markdown
---
title: About
---
# About Angalog and Angular

'''mermaid
graph TD
A[Angular] ---> B[Analog]
'''


```

</div>


</div>

</div>

</template>
