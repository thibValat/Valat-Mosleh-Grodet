import { z } from "zod";

export const addressDtoSchema = z.object({
  id: z.coerce.number().optional(),
  city: z.string(),
  postCode: z.string(),
  streetName: z.string(),
  streetNumber: z.string(),
});
