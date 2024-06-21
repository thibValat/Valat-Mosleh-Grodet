import { z } from "zod";
import { eventDtoSchema } from "./eventDtoSchema";

export const getAllEventsQueryParamsSchema = z
  .object({
    page: z.coerce.number().optional(),
    size: z.coerce.number().optional(),
  })
  .optional();
/**
 * @description OK
 */
export const getAllEvents200Schema = z.array(z.lazy(() => eventDtoSchema));
/**
 * @description OK
 */
export const getAllEventsQueryResponseSchema = z.array(
  z.lazy(() => eventDtoSchema),
);
