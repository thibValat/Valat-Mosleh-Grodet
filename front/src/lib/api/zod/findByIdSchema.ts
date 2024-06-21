import { z } from "zod";
import { accountDtoSchema } from "./accountDtoSchema";

export const findByIdPathParamsSchema = z.object({ id: z.coerce.number() });
/**
 * @description OK
 */
export const findById200Schema = z.lazy(() => accountDtoSchema);
/**
 * @description OK
 */
export const findByIdQueryResponseSchema = z.lazy(() => accountDtoSchema);
