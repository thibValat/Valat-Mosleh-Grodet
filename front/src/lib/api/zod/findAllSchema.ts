import { z } from "zod";
import { accountDtoSchema } from "./accountDtoSchema";

/**
 * @description OK
 */
export const findAll200Schema = z.array(z.lazy(() => accountDtoSchema));
/**
 * @description OK
 */
export const findAllQueryResponseSchema = z.array(
  z.lazy(() => accountDtoSchema),
);
