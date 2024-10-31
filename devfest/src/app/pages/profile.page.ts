
 import { ChangeDetectionStrategy, Component } from '@angular/core';
 import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
     <div class="markdown-wrapper animate__animated animate__backInRight">
       <router-outlet></router-outlet>
     </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfilePage {
}
