---
layout: 1-2-page
---

# Content Routes

Markdown und anderer deklarativer Inhalt.

* <span class="text-sm">Markdown Route</span>
* <span class="font-bold">Syntax Highlighting</span>
* <span class="text-sm">Mermaid Support</span>
* <span class="text-sm">Content Route</span>

<template v-slot:right>

<div class="p-8 pb-0 flex flex-col gap-10">

<div class="flex flex-col">
<div class="font-bold">Syntax Highlighting</div>

Mit [Shiki](https://shiki.style/) oder [Prism](https://prismjs.com/) können Syntax Highlighter für den Markdown Inhalt konfiguriert werden. 

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideContent(withMarkdownRenderer(), withPrismHighlighter()),
  ],
};
```
<div class="mt-12">
Benutzung in Markdown durch "```"
```markdown
---
title: About
---
# About Angalog and Angular

'''typescript
const count = 1;
'''


```

</div>


</div>

</div>

</template>
