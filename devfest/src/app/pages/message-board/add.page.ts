import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MessageBoardFormComponent } from "../../components/message-board/message-board-form.component";


@Component({
  selector: 'devfest-message-board-add-page',
  standalone: true,
  imports: [
    CommonModule,
    MessageBoardFormComponent,
  ],
  template: `
        <devfest-message-board-form></devfest-message-board-form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MessageBoardAddPage {
  @HostBinding('class')
  readonly classes = ['w-full'];
}
