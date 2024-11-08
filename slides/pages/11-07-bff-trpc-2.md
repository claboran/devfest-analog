---
layout: 1-2-page
---

# BFF in Analog
tRPC Building Blocks

<div class="text-sm">

* Use Case spezifische Router
* Input Validierung
* Query und Mutation Definition
* Context und Middleware
* Error Handling mit TRPCError
* Request Batching

</div>


<template v-slot:right>

<div class="p-8">

# tRPC

```typescript

export const messageBoardRouter = router({
  add: publicProcedure.input(
    z.object({
      author: z.string().min(3),
      title: z.string().min(3),
      message: z.string().min(3),
    })
  ).mutation(options => {
    messageBoard = produce(messageBoard, draft => {
      draft.push({
        ...options.input,
        id: draft.length,
    //...
  list: publicProcedure.query(() => getMessageBoard()),
});
// Definition des Application Routers       
export const appRouter = router({
    messageBoard: messageBoardRouter,
    // other Routers...
});
// export type definition of API
export type AppRouter = typeof appRouter;
```
</div>
 

</template>
