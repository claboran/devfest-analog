<script setup lang="ts">
import Footer from "./components/Footer.vue";
</script>

<template>
<div class="slidev-layout default flex flex-col z-0 cover">
<div class="content text-primary-dark-2 flex flex-1 flex-col">
  <slot/>
</div>
  <Footer />
</div>
</template>

<style>
.slidev-layout.default .content {
  & > h1 {
    @apply px-6 pt-8;
  }

  & > p, & > div:not(.no-padding, .absolute) {
    @apply px-6;
  }

  p {
    @apply leading-6;
  }

}
.slidev-layout.default .content > div > p {
   @apply text-2xl leading-10;
 }
</style>
