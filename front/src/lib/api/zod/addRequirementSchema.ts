import { z } from "zod";

export const addRequirementPathParamsSchema = z.object({
  id: z.coerce.number(),
});

export const addRequirementQueryParamsSchema = z.object({
  requirement: z.coerce.string(),
});
/**
 * @description OK
 */
export const addRequirement200Schema = z.any();

export const addRequirementMutationResponseSchema = z.any();
