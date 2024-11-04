import { patchState, SignalState } from "@ngrx/signals";
import { messageBoardStateReducer, TMessageBoardStateModel } from "../../state/message-board-state.model";
import { InputSignal } from "@angular/core";


export const messageBoardPatchFactoryFn = (
  messageBoardState: SignalState<TMessageBoardStateModel>,
  messageBoard: InputSignal<{
    id: number,
    author: string,
    message: string,
    title: string,
  }[]>,
) => () => {
  patchState(
    messageBoardState, (state: TMessageBoardStateModel) =>
    messageBoardStateReducer(state, messageBoard()),
  );
};
