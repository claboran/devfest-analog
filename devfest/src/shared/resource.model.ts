import { z } from 'zod';

export const ResourceSchema = z.object({
  headline: z.string(),
  description: z.string(),
  order: z.number(),
  link: z.string().url(),
  image: z.string().url(),
  tags: z.array(z.string()),
});


export type TResource = z.infer<typeof ResourceSchema>;
