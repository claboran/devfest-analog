<script setup lang="ts">
import Footer from "./components/Footer.vue";
import {computed} from "vue";
import {handleBackground} from "../layoutHelper";

const props = defineProps({
  redCircles: {
    type: String,
    required: false,
    default: 'true',
  },


  icon1: {
    type: String,
    required: false,
  },
  icon2: {
    type: String,
    required: false,
  },
  icon3: {
    type: String,
    required: false,
  },
  background: {
    type: String,
  }
})

const circles = computed(() => props.redCircles === 'true');

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout three-facts flex flex-col z-0 cover" :style="style">
    <div class="text-primary-dark-2 flex flex-1 flex-col px-6 py-8">
      <slot></slot>
    </div>
    <div class="flex text-white">
      <div class="flex-1 flex flex-col items-center text-xs text-center px-10 h-64 bg-accent-6 relative justify-center pt-6">
        <div v-if="circles" class="rounded-full bg-transparent border border-dashed border-transparent border-t-accent-4 border-r-accent-4 -rotate-45 size-36 absolute left-1/2 -ml-18 -z-0 -top-18"></div>
        <div v-if="circles" class="flex justify-center items-center rounded-full bg-accent-2 size-32 absolute left-1/2 -ml-16 -top-16">
          <img class="size-16" v-bind:src="'/layouts/images/icons/' + props.icon1 + '.png'" alt="icon 1">
        </div>

        <slot name="fakt-1" />
      </div>
      <div class="flex-1 flex flex-col items-center text-xs text-center px-10  h-64 bg-accent-3 relative justify-center pt-6">
        <div v-if="circles" class="rounded-full bg-transparent border border-dashed border-transparent border-t-accent-4 border-r-accent-4 -rotate-45 size-36 absolute left-1/2 -ml-18 -top-18"></div>
        <div v-if="circles" class="flex justify-center items-center rounded-full bg-accent-2 size-32 absolute left-1/2 -ml-16 -top-16">
          <img class="size-16" v-bind:src="'/layouts/images/icons/' + props.icon2 + '.png'" alt="icon 1">
        </div>

        <slot name="fakt-2" />
      </div>
      <div class="flex-1 flex flex-col items-center text-xs text-center px-10  h-64 bg-accent-4 relative justify-center pt-6">
        <div v-if="circles" class="rounded-full bg-transparent border border-dashed border-transparent border-t-accent-4 border-r-accent-4 -rotate-45 size-36 absolute left-1/2 -ml-18 -top-18"></div>
        <div v-if="circles" class="flex justify-center items-center rounded-full bg-accent-2 size-32 absolute left-1/2 -ml-16 -top-16">
          <img class="size-16" v-bind:src="'/layouts/images/icons/' + props.icon3 + '.png'" alt="icon 1">

        </div>

        <slot name="fakt-3" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
 .three-facts p{
   @apply min-h-16;

 }
</style>
