import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { TMessage } from "../../../shared/message-board.model";

@Component({
  selector: 'devfest-message-item',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full flex flex-col py-3 px-1.5 text-2xl border-2 rounded-xl border-gray-300">
      <div class="flex items-center justify-around py-1">
        <div>
          {{ messageItem().title }}
        </div>
        <div>
          {{ messageItem().author }}
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
