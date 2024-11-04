---
layout: default
---

# Metadaten in Routen

* Werden direkt in den Pages angegeben
* Für Guards, Titel, Resolver, etc ...

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
