---
layout: 1-2-page


---

# Analog
Single File Components


* Semantisch getrennte Blöcke: Logik, View und Style
* Implizite Nutzung von Standalone Components und OnPush
* Loslösung von Komponentenklassen und Decorators
* Zwingt den Entwickler, in kleinen Komponenten zu denken



<template v-slot:right>

<div class="flex h-full justify-center items-center scale-80">

```html

<script lang="ts">
  import { RouterOutlet } from '@angular/router' with { analog: 'imports' };;
  import CoolButton from './cool-button.analog' with { analog: 'imports' };
  import { AuthStore } from '../shared-data-access-auth/auth.store';
  
  const authStore = inject(AuthStore);
  
  function doClick() {
    console.log("Clicked!");
  }
</script>

<template class="flex h-screen w-screen items-center justify-center">
  <div class="wrapper">
    @if(authStore.isAuthenticated()) {
      <CoolButton (click)="doClick()">Ein Button</CoolButton>
    }
    <router-outlet />
  </div>
</template>

<style>
  .wrapper { background: red }
</style>   

```

</div>
</template>
