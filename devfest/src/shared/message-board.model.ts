import { z } from "zod";

export const MessageSchema = z.object({
  id: z.number(),
  author: z.string().min(3),
  title: z.string().min(3),
  message: z.string().min(3),
});

export type TMessage = z.infer<typeof MessageSchema>;
