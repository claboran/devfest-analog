<script setup lang="ts">
import {computed} from "vue";
import {handleBackground} from "../layoutHelper";

const props = defineProps({
  background: {
    type: String,
  },
  verticalPosition: {
    type: String,
  }
})

const style = computed(() => handleBackground(props.background, props.verticalPosition))


</script>

<template>
  <div class="h-full w-full bg-primary-dark-2 flex items-end" :style="style">
    <div class="flex w-2/3 flex-col justify-end mb-24">
      <div class="flex w-full h-32">
        <div class="w-8 h-full bg-accent-2 border-r-3 border-r-white"></div>
        <div class="flex px-8 py-6 flex-col flex-1 text-white bg-primary-dark-1 title-area">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .title-area h1 {
    @apply text-4xl;
  }
</style>
