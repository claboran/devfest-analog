---
layout: 1-2-page
---

# BFF in Analog
Welche Möglichkeiten bietet Analog für Backend-For-Frontends?

<div class="text-sm">

* API Routes
* Server-Side Data Fetching
* tRPC

</div>


<template v-slot:right>

<div class="pl-8 pt-8 pr-2">


### API Routes

API Routes sind ein einfacher Weg, um Server-Endpunkte zu definieren.

Definition:  `src/server/routes/myapi.ts` (statisch) oder 
`src/server/routes/myapi/[param].ts` (dynamisch)

File Namen können auch mit `.get`, `.post`, `.put`, `.delete` enden.

API Routes basieren auf [Nitro und h3](https://nitro.unjs.io/).

<div class="mt-6"></div>

<v-click>

### Server-Side Data Fetching

Analog unterstützt Server-Side Data Fetching vor dem Rendern der Seite.
Dies wird durch eine `async load` Funktion in`.server.ts` der `Page`ermöglicht.

<div class="mt-6"></div>

</v-click>
<v-click>

### tRPC

tRPC ist ein Typ-sicherer Weg, um Server-Endpunkte zu definieren und zu verwenden.

[tRPC Dokumentation](https://trpc.io)

</v-click>

</div>
 


</template>
