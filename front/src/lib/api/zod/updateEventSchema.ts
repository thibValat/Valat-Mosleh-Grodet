import { z } from "zod";
import { eventDtoSchema } from "./eventDtoSchema";

export const updateEventPathParamsSchema = z.object({ id: z.coerce.number() });
/**
 * @description OK
 */
export const updateEvent200Schema = z.lazy(() => eventDtoSchema);

export const updateEventMutationRequestSchema = z.lazy(() => eventDtoSchema);
/**
 * @description OK
 */
export const updateEventMutationResponseSchema = z.lazy(() => eventDtoSchema);
