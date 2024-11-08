---
layout: 1-2-page
---

# Content Routes

Markdown und anderer deklarativer Inhalt.

* <span class="text-sm">Markdown Route</span>
* <span class="text-sm">Syntax Highlighting</span>
* <span class="text-sm">Mermaid Support</span>
* <span class="font-bold text-xl">Content Route</span>

<template v-slot:right>

<div class="p-8 flex flex-col gap-10">



<div class="flex flex-col">
<div class="font-bold">Content Files</div>

Unter `src/content` kann Markdown Content hinterlegt werden, der in Angular Komponenten genutzt werden kann. 

Beispiel: Blogpost unter `src/content/blog/2024-11-09-devfest-ka`

```markdown
---
title: My First Post
slug: 2024-11-09-devfest-ka
description: My First Post Description
coverImage: https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80
---
Hello World
```

<div class="mt-12">

Gelesen werden können die Posts über  `injectContentFiles`:

```typescript
readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
  contentFile.filename.includes('/src/content/blog/')
);
```

</div>
</div>

</div>

</template>
