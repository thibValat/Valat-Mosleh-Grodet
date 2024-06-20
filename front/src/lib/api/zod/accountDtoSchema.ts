import { addressDtoSchema } from "./addressDtoSchema";
import { commentDtoSchema } from "./commentDtoSchema";
import { eventDtoSchema } from "./eventDtoSchema";
import { z } from "zod";

export const accountDtoSchema = z.object({
  id: z.coerce.number().optional(),
  firstname: z.coerce.string(),
  lastName: z.coerce.string(),
  password: z.coerce.string(),
  email: z.coerce.string(),
  address: z.lazy(() => addressDtoSchema),
  birthDate: z.string().datetime(),
  preferences: z.array(z.coerce.string()).optional(),
  rating: z.coerce.number().optional(),
  comments: z.array(z.lazy(() => commentDtoSchema)).optional(),
  description: z.coerce.string().optional(),
  events: z.array(z.lazy(() => eventDtoSchema)).optional(),
});
