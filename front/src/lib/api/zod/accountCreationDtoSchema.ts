import { addressDtoSchema } from "./addressDtoSchema";
import { z } from "zod";

export const accountCreationDtoSchema = z.object({
  firstName: z.coerce.string(),
  lastName: z.coerce.string(),
  password: z.coerce.string(),
  email: z.coerce.string(),
  address: z.lazy(() => addressDtoSchema),
  birthDate: z.string().datetime(),
});
