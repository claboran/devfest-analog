import { PageServerLoad } from "@analogjs/router";
import { getMessageBoard } from "../../../server/trpc/routers/message-board.router";

export const load =
  async ({event}: PageServerLoad) => getMessageBoard();

