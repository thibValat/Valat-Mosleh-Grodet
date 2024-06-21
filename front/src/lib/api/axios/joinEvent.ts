import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  JoinEventMutationResponse,
  JoinEventPathParams,
  JoinEventQueryParams,
} from "../models/JoinEvent";

/**
 * @link /api/events/:id/join
 */
export async function joinEvent(
  id: JoinEventPathParams["id"],
  params: JoinEventQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<JoinEventMutationResponse>["data"]> {
  const res = await client<JoinEventMutationResponse>({
    method: "post",
    url: `http://localhost:8081/api/events/${id}/join`,
    params,
    ...options,
  });
  return res.data;
}
