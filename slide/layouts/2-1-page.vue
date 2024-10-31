<script setup lang="ts">
import {computed} from "vue";
import {handleBackground} from "../layoutHelper";

const props = defineProps({
  background: {
    type: String,
  }
})

const style = computed(() => handleBackground(props.background))

</script>
<template>
  <div class="slidev-layout page-1-2 flex">
    <div class="w-2/3 flex flex-col" :style="style">
      <slot name="left"/>
    </div>

    <div class="w-1/3 px-6 pt-8 bg-accent-4 text-white flex flex-col">
    <slot />
    </div>


  </div>
</template>

<style>
.page-1-2 {
   h1 {
    @apply mb-0 pb-1;
  }
  h1 + p {
    @apply pt-0  mt-0 text-sm;
  }

  li {
    @apply leading-6 mt-8 list-none ml-0;
  }
}
</style>
