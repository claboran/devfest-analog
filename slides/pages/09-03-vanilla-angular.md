---
layout: 1-2-page


---

# Vanilla Angular
Single File Components


* Fast alles wird im Component Decorator definiert.
* Templates und Styles werden als String-Literals definiert
* Change Detection Strategie muss explizit auf OnPush gesetzt werden
* Standalone Components müssen explizit aktiviert werden


<template v-slot:right>

<div class="flex h-full justify-center items-center scale-80">

```typescript

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button.component';
import { AuthStore } from '../auth/auth.store';

@Component({
  selector: 'app-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, RouterOutlet],

  template: `
    <div class="wrapper">
      @if(authStore.isAuthenticated()) {
        <app-button (click)="doClick()">Ein Button</app-button>
      }
      <router-outlet />
    </div>
  `,
  styles: `.wrapper { background: red }`,
  host: { class: 'flex h-screen w-screen items-center justify-center'}
})
export class AppComponent {
  authStore = inject(AuthStore);
  doClick() {
    console.log("Clicked!")
  }
}

```

</div>
</template>
