---
layout: 1-2-page
---

# BFF in Analog
Server-Side Data Fetching
<div class="text-sm">

* Fetch von Daten auf dem Server
* Rendering vor der Auslieferung an den Client
* 

</div>


<template v-slot:right>

<div class="p-8">

# Server-Side Data Fetching

```typescript
// src/app/pages/(home)/index.server.ts

export const load = async ({event}: PageServerLoad) => fetchAnalogJSResources();

// src/server/service/(home).page.ts
export default class HomePageComponent {
  // ...
  resources = toSignal(injectLoad<typeof load>(), { requireSync: true });
  // Alternativ InputBinding 
  @Input() load(data: LoadResult<typeof load>) {
    this.data = data;
  }

  data!: LoadResult<typeof load>;
}
```


</div>
 

</template>
