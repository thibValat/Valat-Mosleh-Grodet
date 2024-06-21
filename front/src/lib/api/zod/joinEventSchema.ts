import { z } from "zod";

export const joinEventPathParamsSchema = z.object({ id: z.coerce.number() });

export const joinEventQueryParamsSchema = z.object({
  participantId: z.coerce.number(),
});
/**
 * @description OK
 */
export const joinEvent200Schema = z.any();

export const joinEventMutationResponseSchema = z.any();
