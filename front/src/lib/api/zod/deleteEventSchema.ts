import { z } from "zod";

export const deleteEventPathParamsSchema = z.object({ id: z.coerce.number() });
/**
 * @description OK
 */
export const deleteEvent200Schema = z.any();

export const deleteEventMutationResponseSchema = z.any();
