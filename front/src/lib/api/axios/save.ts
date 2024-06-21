import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type { SaveMutationRequest, SaveMutationResponse } from "../models/Save";

/**
 * @link /account/inscription
 */
export async function save(
  data: SaveMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<SaveMutationResponse>["data"]> {
  const res = await client<SaveMutationResponse, SaveMutationRequest>({
    method: "post",
    url: `/account/inscription`,
    data,
    ...options,
  });
  return res.data;
}
