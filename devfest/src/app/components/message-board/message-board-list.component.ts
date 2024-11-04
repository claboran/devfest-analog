import { ChangeDetectionStrategy, Component, DestroyRef, effect, HostBinding, inject, input } from '@angular/core';
import { patchState, signalState } from "@ngrx/signals";
import { messageBoardStateReducer, TMessageBoardStateModel } from "../../state/message-board-state.model";
import { TMessage } from "../../../shared/message-board.model";
import { messageBoardPatchFactoryFn } from "./message-board.utils";
import { MessageItemComponent } from "./message-item.component";
import { injectTrpcClient } from "../../../trpc-client";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { tap } from "rxjs";

@Component({
  selector: 'devfest-message-board-list',
  standalone: true,
  imports: [
    MessageItemComponent
  ],
  template: `
    <div class="w-full pt-4 flex flex-col">
      <div class="flex justify-end w-full items-center py-3">
        <button class="btn btn-primary w-1/12" (click)="onClick()">
          <img src="assets/arrows-rotate.svg" alt="Refresh" width="40%" height="auto"/>
        </button>
      </div>
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

  readonly #trpc = injectTrpcClient();

  #destroyRef = inject(DestroyRef);

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

  onClick() {
    this.#trpc.messageBoard.list.query()
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        tap((messages: TMessage[]) => patchState(
          this.messageBoardState, (state: TMessageBoardStateModel) =>
            messageBoardStateReducer(state, messages))),
      ).subscribe();
  }
}
