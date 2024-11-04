<template>
  <div class="cursor"></div>
</template>
<style>
.cursor {
  --t: 25%; /* control the tail part */
  --h: 90%; /* control the head part */

  @apply -rotate-120;

  aspect-ratio: 3/2;
  width: 50px;
  background: #033649;

  clip-path: polygon(0 calc(50% - var(--t)/2),calc(100% - var(--h)) calc(50% - var(--t)/2),calc(100% - var(--h)) 0,100% 50%,calc(100% - var(--h)) 100%,calc(100% - var(--h)) calc(50% + var(--t)/2),0 calc(50% + var(--t)/2));
}
</style>
