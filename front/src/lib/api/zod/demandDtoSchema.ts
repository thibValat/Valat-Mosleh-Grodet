import { accountDtoSchema } from "./accountDtoSchema";
import { z } from "zod";

export const demandDtoSchema = z.object({
  id: z.coerce.number().optional(),
  sender: z.lazy(() => accountDtoSchema).optional(),
  isAccepted: z.boolean().optional(),
  eventId: z.coerce.number().optional(),
});
