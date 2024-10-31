<script setup lang="ts">
import Footer from "./components/Footer.vue";

const props = defineProps({
  agenda: {
    type: Array,
    required: true,
  }
})
</script>
<template>
  <div class="slidev-layout flex flex-col">


    <div class="flex flex-1 flex-col px-6 py-8">
      <h1 class="pb-8">Agenda</h1>

      <div class="grid grid-cols-2 grid-rows-4 grid-flow-col gap-4 gap-x-12 text-white">
        <div class="flex" v-for="(item, index) in props.agenda">
          <div class="w-4 h-18 bg-accent-2 border-r-white border-r-3"></div>
          <div class="size-18 bg-accent-5 flex justify-center items-center "> 0{{index +1}}</div>
          <div class="p-4 pr-8 h-18 bg-accent-6 flex-1 flex items-center">{{item}}</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
