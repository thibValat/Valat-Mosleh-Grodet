import { z } from "zod";

export const addressDtoSchema = z.object({
  id: z.coerce.number().optional(),
  city: z.coerce.string(),
  postCode: z.coerce.string(),
  streetName: z.coerce.string(),
  streetNumber: z.coerce.string(),
});
