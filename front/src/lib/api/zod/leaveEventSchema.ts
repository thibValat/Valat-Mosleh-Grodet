import { z } from "zod";

export const leaveEventPathParamsSchema = z.object({ id: z.coerce.number() });

export const leaveEventQueryParamsSchema = z.object({
  participantId: z.coerce.number(),
});
/**
 * @description OK
 */
export const leaveEvent200Schema = z.any();

export const leaveEventMutationResponseSchema = z.any();
