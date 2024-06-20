import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  LeaveEventMutationResponse,
  LeaveEventPathParams,
  LeaveEventQueryParams,
} from "../models/LeaveEvent";

/**
 * @link /api/events/:id/leave
 */
export async function leaveEvent(
  id: LeaveEventPathParams["id"],
  params: LeaveEventQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<LeaveEventMutationResponse>["data"]> {
  const res = await client<LeaveEventMutationResponse>({
    method: "post",
    url: `http://localhost:8081/api/events/${id}/leave`,
    params,
    ...options,
  });
  return res.data;
}
