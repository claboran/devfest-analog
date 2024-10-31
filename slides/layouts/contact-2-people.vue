
<script setup lang="ts">
import Footer from "./components/Footer.vue";
import HeadRed from "./components/HeadRed.vue";
import GithubIcon from "./components/GithubIcon.vue";

const props = defineProps({
  profiles: {
    type: Array,
    required: true,
  }
})


</script>
<template>
  <div class="slidev-layout flex flex-col">
    <HeadRed />
    <div class="flex flex-1">
      <div class="flex-1 flex flex-col">
        <div class="flex1">
          <img v-bind:src="props.profiles[0]['image']" alt="person 1">
        </div>
        <div class="px-10 pt-6 flex flex-col justify-center h-1/3">
          <div class="text-4xl">{{props.profiles[0]['name']}}</div>
          <div class="text-sm">{{props.profiles[0]['position']}}</div>
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <div class="flex-1 bg-accent-6 w-full relative p-6">
          <div class="bg-accent-6 size-8 rotate-45 absolute -left-2 top-8"></div>
          <div class="flex-1 h-full text-white flex flex-col">
            <div class="flex-1">
              <ul>
                <li v-for="key in props.profiles[0]['keys']">{{key}}</li>
              </ul>
            </div>
            <div class="flex items-center gap-2">
              <img src="./images/icons/GithubLogo.png" alt="github logo" class="size-6">
              <a v-bind:href="'https://github.com/' + props.profiles[0]['github']" target="_blank">https://github.com/{{props.profiles[0]['github']}}</a>
            </div>
          </div>

        </div>
        <div class="flex-1 bg-accent-4 w-full relative p-6">
          <div class="bg-accent-4 size-8 rotate-45 absolute -right-2 top-8"></div>
          <div class="flex-1 h-full text-white flex flex-col">
            <div class="flex-1">
              <ul>
                <li v-for="key in props.profiles[1]['keys']">{{key}}</li>
              </ul>
            </div>
            <div class="flex items-center gap-2">
              <img src="./images/icons/GithubLogo.png" alt="github logo" class="size-6">
              <a v-bind:href="'https://github.com/' + props.profiles[1]['github']" target="_blank">https://github.com/{{props.profiles[1]['github']}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <div class="flex1">
          <img v-bind:src="props.profiles[1]['image']" alt="person 2">
        </div>
        <div class="px-10 pt-6 flex flex-col justify-center h-1/3">
          <div class="text-4xl">{{props.profiles[1]['name']}}</div>
          <div class="text-sm">{{props.profiles[1]['position']}}</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
