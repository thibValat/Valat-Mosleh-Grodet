import { z } from "zod";

export const declineParticipantPathParamsSchema = z.object({
  id: z.coerce.number(),
});

export const declineParticipantQueryParamsSchema = z.object({
  participantId: z.coerce.number(),
});
/**
 * @description OK
 */
export const declineParticipant200Schema = z.any();

export const declineParticipantMutationResponseSchema = z.any();
