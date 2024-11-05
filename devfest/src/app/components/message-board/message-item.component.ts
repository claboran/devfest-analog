import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { TMessage } from "../../../shared/message-board.model";

@Component({
  selector: 'devfest-message-item',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full flex flex-col py-3 px-1.5 rounded-xl  bg-base-100 shadow-xl">
      <div class="flex items-center justify-between text-2xl py-1 px-3">
        <div class="w-8/12 underline">
          {{ messageItem().title }}
        </div>
        <div class="w-4/12 flex justify-center items-center">
          <div class="w-1/12 text-white p-2">
            <img class="rounded-full" src="assets/user.svg" alt="user" width="100%" height="auto">
          </div>
          <div class="w-11/12 pl-4">
            {{ messageItem().author }}
          </div>
        </div>
      </div>
      <div class="w-full divider px-3"></div>
      <div class="w-full py-2 px-3">
        {{ messageItem().message }}
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageItemComponent {

  @HostBinding('class')
  readonly classes = ['w-full'];
  messageItem = input.required<TMessage>();
}
