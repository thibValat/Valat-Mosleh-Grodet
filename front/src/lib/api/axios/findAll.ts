import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { FindAllQueryResponse } from "../models/FindAll";

/**
 * @link /account
 */
export async function findAll(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<FindAllQueryResponse>["data"]> {
  const res = await client<FindAllQueryResponse>({
    method: "get",
    url: `/account`,
    ...options,
  });
  return res.data;
}
