import { TMessage } from "../../../shared/message-board.model";
import { publicProcedure, router } from "../trpc";
import { produce } from "immer";
import { z } from "zod";

let messageBoard: TMessage[] = [];

export const getMessageBoard = () => messageBoard;

export const messageBoardRouter = router({
  add: publicProcedure.input(
    z.object({
      author: z.string().min(3),
      title: z.string().min(3),
      message: z.string().min(3),
    })
  ).mutation(options => {
    messageBoard = produce(messageBoard, draft => {
      draft.push({
        ...options.input,
        id: draft.length,
      });
    });
  }),
  list: publicProcedure.query(() => getMessageBoard()),
});
