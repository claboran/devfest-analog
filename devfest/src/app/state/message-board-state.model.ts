import { TMessage } from "../../shared/message-board.model";
import { produce } from "immer";

export type TMessageBoardStateModel = {
  messages: TMessage[];
};

export const messageBoardStateReducer = (
  state: TMessageBoardStateModel,
  messageBoard: TMessage[],
) =>
  produce(state, draft => {
    draft.messages = messageBoard
      .sort((a, b) => b.id - a.id);
  });
