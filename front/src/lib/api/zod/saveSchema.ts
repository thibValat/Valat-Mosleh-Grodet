import { z } from "zod";
import { accountDtoSchema } from "./accountDtoSchema";
import { accountCreationDtoSchema } from "./accountCreationDtoSchema";

/**
 * @description OK
 */
export const save200Schema = z.lazy(() => accountDtoSchema);

export const saveMutationRequestSchema = z.lazy(() => accountCreationDtoSchema);
/**
 * @description OK
 */
export const saveMutationResponseSchema = z.lazy(() => accountDtoSchema);
