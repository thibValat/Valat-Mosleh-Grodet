import { z } from "zod";

/**
 * @description OK
 */
export const getAllCaches200Schema = z.object({}).catchall(z.object({}));
/**
 * @description OK
 */
export const getAllCachesQueryResponseSchema = z
  .object({})
  .catchall(z.object({}));
