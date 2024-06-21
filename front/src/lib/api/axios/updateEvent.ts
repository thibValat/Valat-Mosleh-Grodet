import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  UpdateEventMutationRequest,
  UpdateEventMutationResponse,
  UpdateEventPathParams,
} from "../models/UpdateEvent";

/**
 * @link /api/events/:id
 */
export async function updateEvent(
  id: UpdateEventPathParams["id"],
  data: UpdateEventMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateEventMutationResponse>["data"]> {
  const res = await client<
    UpdateEventMutationResponse,
    UpdateEventMutationRequest
  >({
    method: "put",
    url: `http://localhost:8081/api/events/${id}`,
    data,
    ...options,
  });
  return res.data;
}
