import { z } from "zod";
import { eventDtoSchema } from "./eventDtoSchema";

/**
 * @description OK
 */
export const createEvent200Schema = z.lazy(() => eventDtoSchema);

export const createEventMutationRequestSchema = z.lazy(() => eventDtoSchema);
/**
 * @description OK
 */
export const createEventMutationResponseSchema = z.lazy(() => eventDtoSchema);
