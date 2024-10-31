<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  classes: {
    type: String,
    default: 'bg-accent-4',
  },
  arrowClass: {
    type: String,
    default: 'border-l-accent-4',
  },
  textClass: {
    type: String,
    default: 'text-white',
  }
})

const classes = computed(() => (props.classes) + ' ' + props.textClass)

</script>

<template>
  <div class="h-20 min-w-42 mr-[39px] relative rounded-r-[2px] flex items-center" v-bind:class="classes">
    <div class=" pl-3 arrowbox">
      <slot/>
    </div>


    <div class="absolute top-0 -right-[39px] arrow-right border-y-40 border-y-transparent border-l-40 " :class="props.arrowClass"></div>
  </div>


</template>

<style>

.arrowbox  {
  @apply leading-5
}

.arrow-right {
  width: 0;
  height: 0;
}
</style>
