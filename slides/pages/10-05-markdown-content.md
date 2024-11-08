---
layout: 1-2-page
---

# Content Routes

Markdown und anderer deklarativer Inhalt.

* <span class="font-bold text-xl">Markdown Route</span>
* <span class="text-sm">Syntax Highlighting</span>
* <span class="text-sm">Mermaid Support</span>
* <span class="text-sm">Content Route</span>

<template v-slot:right>

<div class="p-8 pb-0 flex flex-col gap-10">

<div class="flex flex-col">
<div class="font-bold">Unterstützung von Markdown Inhalten in Routen:</div>

Statt Angular Komponenten `about.pages.ts` können auch Markdown Dateien wie `about.md` geschrieben werden.
<div class="flex flex-col">

```
src/
├── app/
│   ├── pages/
│   │   └── about.md    // Route: '/about'


```

```markdown
---
title: About
meta:
  - name: description
    content: About Page Description
  - property: og:title
    content: About
---
# About Angalog and Angular

This is a Markdown Content Route

* Stable
* Declarative
* Markdown
```

</div>

</div>

</div>

</template>

<!--
Header: Front-Matter
-->
