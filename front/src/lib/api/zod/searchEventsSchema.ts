import { z } from "zod";
import { eventDtoSchema } from "./eventDtoSchema";

export const searchEventsQueryParamsSchema = z
  .object({
    city: z.coerce.string().optional(),
    eventType: z.coerce.string().optional(),
    maxParticipants: z.coerce.number().optional(),
    maxPrice: z.coerce.number().optional(),
    date: z.coerce.string().optional(),
    page: z.coerce.number().optional(),
    size: z.coerce.number().optional(),
  })
  .optional();
/**
 * @description OK
 */
export const searchEvents200Schema = z.array(z.lazy(() => eventDtoSchema));
/**
 * @description OK
 */
export const searchEventsQueryResponseSchema = z.array(
  z.lazy(() => eventDtoSchema),
);
