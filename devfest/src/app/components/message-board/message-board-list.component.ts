import { ChangeDetectionStrategy, Component, effect, HostBinding, input } from '@angular/core';
import { signalState } from "@ngrx/signals";
import { TMessageBoardStateModel } from "../../state/message-board-state.model";
import { TMessage } from "../../../shared/message-board.model";
import { messageBoardPatchFactoryFn } from "./message-board.utils";
import { MessageItemComponent } from "./message-item.component";

@Component({
  selector: 'devfest-message-board-list',
  standalone: true,
  imports: [
    MessageItemComponent
  ],
  template: `
    <div class="w-full pt-4">
      @for (message of messageBoardState().messages; track message.id) {
        <devfest-message-item [messageItem]="message"></devfest-message-item>
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBoardListComponent {

  @HostBinding('class')
  readonly classes = ['w-full'];

  readonly messageBoardState = signalState<TMessageBoardStateModel>({
    messages: [],
  });

  messageBoard = input.required<TMessage[]>();

  constructor() {
    effect(
      messageBoardPatchFactoryFn(this.messageBoardState, this.messageBoard),
      { allowSignalWrites: true },
    );
  }
}
