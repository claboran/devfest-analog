import { router } from '../trpc';
import { messageBoardRouter } from "./message-board.router";

export const appRouter = router({
  messageBoard: messageBoardRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
