import { accountDtoSchema } from "./accountDtoSchema";
import { z } from "zod";

export const commentDtoSchema = z.object({
  id: z.coerce.number().optional(),
  content: z.coerce.string(),
  rating: z.coerce.number(),
  title: z.coerce.string(),
  sender: z.lazy(() => accountDtoSchema),
  target: z.lazy(() => accountDtoSchema),
});
