import { z } from "zod";

export const removeRequirementPathParamsSchema = z.object({
  id: z.coerce.number(),
});

export const removeRequirementQueryParamsSchema = z.object({
  requirement: z.coerce.string(),
});
/**
 * @description OK
 */
export const removeRequirement200Schema = z.any();

export const removeRequirementMutationResponseSchema = z.any();
