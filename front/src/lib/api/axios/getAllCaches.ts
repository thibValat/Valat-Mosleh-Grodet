import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { GetAllCachesQueryResponse } from "../models/GetAllCaches";

/**
 * @link /cache
 */
export async function getAllCaches(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetAllCachesQueryResponse>["data"]> {
  const res = await client<GetAllCachesQueryResponse>({
    method: "get",
    url: `/cache`,
    ...options,
  });
  return res.data;
}
