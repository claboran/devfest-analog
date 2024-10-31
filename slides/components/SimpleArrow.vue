<script setup lang="ts">

import {computed, CSSProperties} from "vue";

const props = defineProps({
  tailWidth: {
    type: String,
    default: "25",
  },
  headSize: {
    type: String,
    default: "90",
  },
  width: {
    type: String,
    default: "50",
  },
  height: {
    type: String,
    default: "20",
  },
  rotation: {
    type: String,
    default: "0"
  }});

  const style = computed(() => <CSSProperties>{
    transform: `rotate(${props.rotation}deg)`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    '--t':  `${props.tailWidth}px`,
    '--h':  `${props.headSize}%`,
  });

</script>

<template>
  <div class="simple-arrow" :style="style"></div>
</template>
<style>
.simple-arrow {
  --t: 25%; /* control the tail part */
 --h: 90%; /* control the head part */

  @apply -rotate-120;

  aspect-ratio: 2/3;
  width: 50px;
  background: currentColor;

  clip-path: polygon(0 calc(50% - var(--t)/2),calc(100% - var(--h)) calc(50% - var(--t)/2),calc(100% - var(--h)) 0,100% 50%,calc(100% - var(--h)) 100%,calc(100% - var(--h)) calc(50% + var(--t)/2),0 calc(50% + var(--t)/2));
}
</style>
