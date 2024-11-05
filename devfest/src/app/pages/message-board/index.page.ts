import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { toSignal } from "@angular/core/rxjs-interop";
import { injectLoad } from "@analogjs/router";
import { load } from "./index.server";
import { MessageBoardListComponent } from "../../components/message-board/message-board-list.component";


@Component({
  selector: 'devfest-message-board-list-page',
  standalone: true,
  imports: [
    CommonModule,
    MessageBoardListComponent,
  ],
  template: `
    <devfest-message-board-list [messageBoard]="messageBoard()"></devfest-message-board-list>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MessageBoardListPage {
  messageBoard = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
