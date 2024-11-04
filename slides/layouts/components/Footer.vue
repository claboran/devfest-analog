

<template>
  <div class="flex items-center">
    <div class="size-8 text-[0.625rem] flex justify-center items-center bg-accent-2 border-r-3 border-r-white text-white">
      {{$nav.currentPage}}
    </div>
    <div class="flex-1 h-8 pl-4 text-white bg-accent-5 flex items-center">
      <div class="flex-1 text-[0.625rem]">
        {{ $slidev.configs.footer }}
      </div>
      <div class="pr-4"><img src="../images/bit_cube.svg" alt="Bit Würfel"> </div>
    </div>
  </div>
</template>
