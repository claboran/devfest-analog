<!-- presentation-title.vue -->
<script setup lang="ts">


</script>
<template>
  <div class="h-full w-full presentation-title bg-primary-dark-2 flex items-end">
    <div class="absolute z-0 right-40 top-24 -rotate-20 bg-accent-2 size-64"></div>
    <div class="flex flex-1 flex-col justify-end mb-12">
      <div class="flex w-full h-42">
        <div class="w-8 h-full bg-accent-2 border-r-3 border-r-white"></div>
        <div class="flex p-8 flex-col flex-1 text-white bg-primary-dark-1 title-area">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="flex-1 z-10 flex justify-end mb-12 pr-8">
      <div class="size-72 border border-white image">
        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>
