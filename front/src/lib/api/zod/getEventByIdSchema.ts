import { z } from "zod";
import { eventDtoSchema } from "./eventDtoSchema";

export const getEventByIdPathParamsSchema = z.object({ id: z.coerce.number() });
/**
 * @description OK
 */
export const getEventById200Schema = z.lazy(() => eventDtoSchema);
/**
 * @description OK
 */
export const getEventByIdQueryResponseSchema = z.lazy(() => eventDtoSchema);
