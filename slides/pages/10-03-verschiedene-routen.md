---
layout: 1-2-page

inverted: "false"

---

# File-based Routing

Routentypen

<template v-slot:right>

<div class="px-4 pt-8 flex flex-col">

### Verschiedene Routentypen

<div class="flex mt-4 text-sm flex-wrap">
  <ListItem class="w-72">

  #### Index-Route

  Definiert die Route für `/`. <br> Beispiele: `index.page.ts` oder `(home).page.ts`  

  </ListItem>

  <ListItem class="w-72">

  #### Statische Routen
  
  Definiert durch den Dateinamen, z.B. `about.page.ts` für die Route `/about`

  </ListItem>

  <ListItem class="w-72">

  #### Dynamische Routen

  Definiert durch Dateinamen in eckigen Klammern, z.B. `[productId].page.ts` für die Route `/products/:productId`.

  </ListItem>

<ListItem class="w-72">

#### Layout Routen

Übergeordnete Datei und untergeordnetes Verzeichnis mit demselben Namen, z.B. `products.page.ts` und `products/[productId].page.ts`.

  </ListItem>

<ListItem class="w-72">

#### Catch-all Routen

Wildcard Routen, z.B. <br>`[...not-found].page.ts`. Leitet alle unbekannten Routen auf <br> `/not-found` weiter.

  </ListItem>

<ListItem class="w-72">

#### Gruppierungen

Gruppiert einzelne Routen "thematisch", jedoch ohne das Routing zu beeinflussen: `(auth)/signup.page.ts` und `(auth)/login.page.ts` sind unter `/signup` und `/login` zu finden.

  </ListItem>
</div>



</div>





</template>
