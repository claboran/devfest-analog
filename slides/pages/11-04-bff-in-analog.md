---
layout: 1-2-page
---

# BFF in Analog
Welche Möglichkeiten bietet Analog für Backend-For-Frontends?

<div class="text-sm">

* Server-Side Data Fetching
* API Routes
* tRPC

</div>


<template v-slot:right>

<div class="p-8">

# API Routes

API Routes sind ein einfacher Weg, um Server-Endpunkte zu definieren.

Definition:  `src/server/routes/myapi.ts` (statisch) oder 
`src/server/routes/myapi/[param].ts` (dynamisch)

File Namen können auch mit `.get`, `.post`, `.put`, `.delete` enden.

API Routes basieren auf [Nitro und h3](https://nitro.unjs.io/).


# Server-Side Data Fetching

Analog unterstützt Server-Side Data Fetching vor dem Rendern der Seite.
Dies wird durch eine `async load` Funktion in`.server.ts` der `Page`ermöglicht.


# tRPC

tRPC ist ein Typ-sicherer Weg, um Server-Endpunkte zu definieren und zu verwenden.

[tRPC Dokumentation](https://trpc.io)

</div>
 

</template>
