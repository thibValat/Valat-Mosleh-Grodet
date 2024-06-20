import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  AddRequirementMutationResponse,
  AddRequirementPathParams,
  AddRequirementQueryParams,
} from "../models/AddRequirement";

/**
 * @link /api/events/:id/add-requirement
 */
export async function addRequirement(
  id: AddRequirementPathParams["id"],
  params: AddRequirementQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<AddRequirementMutationResponse>["data"]> {
  const res = await client<AddRequirementMutationResponse>({
    method: "post",
    url: `http://localhost:8081/api/events/${id}/add-requirement`,
    params,
    ...options,
  });
  return res.data;
}
