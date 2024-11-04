<script setup lang="ts">
import {computed} from "vue";
import {handleBackground} from "../layoutHelper";
import Footer from "./components/Footer.vue";

const props = defineProps({
  background: {
    type: String,
  },
  inverted: {
    type: String,
    default: 'false'
  }
})

const style = computed(() => handleBackground(props.background))
const classRight = computed(() => props.inverted === 'true' ? 'bg-accent-4 text-white' : '');
const classLeft = computed(() => props.inverted === 'true' ? '' : 'bg-accent-4 text-white');

</script>
<template>
  <div class="slidev-layout page-2-1 flex flex-col">
    <div class="flex-1 flex">
      <div class="w-1/3 px-6 pt-8 flex flex-col" :class="classLeft">
      <slot />
      </div>

      <div class="w-2/3 flex flex-col" :style="style" :class="classRight">
        <slot name="right"/>
      </div>
    </div>

    <Footer/>
  </div>

</template>

<style>
.page-2-1 {
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
