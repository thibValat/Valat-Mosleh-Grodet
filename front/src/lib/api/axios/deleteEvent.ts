import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  DeleteEventMutationResponse,
  DeleteEventPathParams,
} from "../models/DeleteEvent";

/**
 * @link /api/events/:id
 */
export async function deleteEvent(
  id: DeleteEventPathParams["id"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<DeleteEventMutationResponse>["data"]> {
  const res = await client<DeleteEventMutationResponse>({
    method: "delete",
    url: `http://localhost:8081/api/events/${id}`,
    ...options,
  });
  return res.data;
}
