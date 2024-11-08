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

<div class="p-8 pb-0 flex flex-col gap-10">



<div class="flex flex-col">
<div class="font-bold">Rendern von Markdown Content</div>

Über die `<analog-markdown>` kann Markdown Content in einer Komponente gerendert werden.

Beispiel: `/src/app/pages/blog/posts.[slug].page.ts`
```typescript
import {injectContent, MarkdownComponent} from '@analogjs/content';
import {Component} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";

export interface PostAttributes { slug: string;}

@Component({
  standalone: true,
  imports: [MarkdownComponent],
  template: `<analog-markdown [content]="post()?.content"/>`,
})
export default class BlogPostComponent {
  readonly post = toSignal(injectContent<PostAttributes>(), {initialValue: null});
}
```

`injectContent()` nutzt den standardmäßig den `slug` Routenparameter und liest die Datei aus `src/content`

</div>
</div>
</template>
