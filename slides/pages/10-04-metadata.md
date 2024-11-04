---
layout: 1-2-page
---

# Metadaten in Routen

* Werden direkt in den Pages angegeben
* Für Guards, Titel, Resolver, etc ...

<template v-slot:right>
<div class="p-8 pb-0 flex flex-col">

<div class="font-bold">

Metadaten werden als `routeMeta` Variable deklariert
</div>

```typescript
import {RouteMeta} from "@analogjs/router";
import {Component} from "@angular/core";

export const routeMeta: RouteMeta = {
  title: 'About',
  canActivate: [() => true]
  /* ... */
}
@Component({
  template: '<div>About</div>'
})
export class AboutPageComponent {}
```

<div class="mt-4">
<div class="font-bold">

Redirect Routes werden als `routeMeta` ohne Komponente definiert
</div>

```typescript
import {RouteMeta} from "@analogjs/router";

export const routeMeta: RouteMeta = {
  redirectTo: '/home',
  pathMatch: 'full',
}
```
</div>
</div>

</template>

