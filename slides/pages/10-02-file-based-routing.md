---
layout: 1-2-page

inverted: "false"

---

# File-based Routing

In a Nutshell

<template v-slot:right>


<div class="p-8 flex flex-col gap-8">

<div class="flex flex-col">
  
  ### Gemeinsame Basis

  Unter `/src/app/pages` liegen alle Routen einer Anwendung

</div>

<div class="flex flex-col">

### Routenübersicht

```

src/
├── app/
│   ├── pages/
│   │   ├── (home).page.ts             // Route: '/'
│   │   ├── about.page.ts              // Route: '/about'
│   │   ├── (auth).page.ts              // Route: '/about'
│   │   ├── (auth)/
│   │   │   ├── login.page.ts          // Route: '/login'
│   │   │   └── signup.page.ts         // Route: '/signup'
│   │   ├── users/
│   │   │   └── [userId].page.ts       // Route: '/users/[userId]'
│   │   ├── groups.[groupId].page.ts   // Route: '/groups/[groupId]'
│   │   ├── products.page.ts           // Layout for '/products'
│   │   ├── products/
│   │   │   ├── (product-list).page.ts // Route: '/products'
│   │   │   └── [productId].page.ts    // Route: '/products/[productId]'
│   │   │
│   │   ├── [...not-found].md          // Route: '/not-found'


```



</div>

</div>

</template>
