import { accountDtoSchema } from "./accountDtoSchema";
import { addressDtoSchema } from "./addressDtoSchema";
import { demandDtoSchema } from "./demandDtoSchema";
import { z } from "zod";

export const eventDtoSchema = z.object({
  id: z.coerce.number().optional(),
  description: z.coerce.string(),
  organizer: z.lazy(() => accountDtoSchema).optional(),
  eventTypeId: z.coerce.number().optional(),
  eventType: z.coerce.string(),
  name: z.coerce.string(),
  date: z.date(),
  address: z.lazy(() => addressDtoSchema),
  capacity: z.coerce.number(),
  participants: z.array(z.lazy(() => accountDtoSchema)).optional(),
  price: z.coerce.number(),
  demands: z.array(z.lazy(() => demandDtoSchema)).optional(),
  requirements: z.array(z.coerce.string()),
  alcoolAllowed: z.boolean(),
  additionalProperties: z.object({}).catchall(z.object({})).optional(),
});
