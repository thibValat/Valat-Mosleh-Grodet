import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  RemoveRequirementMutationResponse,
  RemoveRequirementPathParams,
  RemoveRequirementQueryParams,
} from "../models/RemoveRequirement";

/**
 * @link /api/events/:id/remove-requirement
 */
export async function removeRequirement(
  id: RemoveRequirementPathParams["id"],
  params: RemoveRequirementQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<RemoveRequirementMutationResponse>["data"]> {
  const res = await client<RemoveRequirementMutationResponse>({
    method: "post",
    url: `http://localhost:8081/api/events/${id}/remove-requirement`,
    params,
    ...options,
  });
  return res.data;
}
