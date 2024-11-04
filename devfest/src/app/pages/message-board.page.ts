import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'message-board-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
       <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MessageBoardPage {
}
