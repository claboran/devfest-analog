<script setup lang="ts">
import Footer from "./components/Footer.vue";
import {computed} from "vue";
import {handleBackground} from "../layoutHelper";


const props = defineProps({
  background: {
    type: String,
  },
  verticalPosition: {
    type: String,
  },
  dark: {
    type: String,
  }
})

const style = computed(() => handleBackground(props.background, props.verticalPosition))

const textClass = computed(() => props.dark ? 'text-white' : 'text-primary-dark-2');


</script>

<template>
  <div class="slidev-layout flex flex-col z-0 cover" :style="style">
    <div class="flex-1 flex flex-col " v-bind:class="textClass" >
      <div class="flex flex-1 flex-col px-6 py-8">
        <slot/>
      </div>

      <div class="flex flex-1 flex-col text-white">
        <div class="h-48 flex">
          <div class="h-full bg-accent-4 flex-1 flex feature">
            <slot name="feature-1"/>
          </div>
          <div class="h-full bg-accent-3 w-90 flex feature">
            <slot name="feature-2"/>
          </div>
          <div class="h-full bg-accent-4 w-90 flex feature">
            <slot name="feature-3"/>
          </div>
        </div>
        <div class="h-48 flex">
          <div class="h-full bg-accent-1 w-90 flex feature">
            <slot name="feature-4"/>
          </div>
          <div class="h-full bg-accent-2 w-90 flex feature">
            <slot name="feature-5"/>
          </div>
          <div class="h-full bg-accent-3 flex-1 feature">
            <slot name="feature-6"/>
          </div>
      </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
  .feature {
    @apply flex flex-col py-4 px-10 text-center items-center;

    p {
      @apply flex-1 flex justify-center items-center text-[0.825rem] leading-6;
    }

    h3 {
      @apply flex justify-center items-center h-16;
    }
  }
</style>
