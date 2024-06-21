import { z } from "zod";

export const acceptParticipantPathParamsSchema = z.object({
  id: z.coerce.number(),
});

export const acceptParticipantQueryParamsSchema = z.object({
  participantId: z.coerce.number(),
});
/**
 * @description OK
 */
export const acceptParticipant200Schema = z.any();

export const acceptParticipantMutationResponseSchema = z.any();
