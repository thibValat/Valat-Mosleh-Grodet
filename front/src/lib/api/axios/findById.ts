import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  FindByIdQueryResponse,
  FindByIdPathParams,
} from "../models/FindById";

/**
 * @link /account/:id
 */
export async function findById(
  id: FindByIdPathParams["id"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<FindByIdQueryResponse>["data"]> {
  const res = await client<FindByIdQueryResponse>({
    method: "get",
    url: `/account/${id}`,
    ...options,
  });
  return res.data;
}
