import { router } from '../trpc';
import { noteRouter } from './notes';
import { messageBoardRouter } from "./message-board.router";

export const appRouter = router({
  note: noteRouter,
  messageBoard: messageBoardRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
