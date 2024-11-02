<template>
  <div class="list-item-content">
    <slot/>
  </div>


</template>
<style>
.list-item-content {
  h4 {
    @apply leading-6 font-bold;
  }
  p {
    @apply mt-2 leading-6;
  }
}
</style>
