import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  AcceptParticipantMutationResponse,
  AcceptParticipantPathParams,
  AcceptParticipantQueryParams,
} from "../models/AcceptParticipant";

/**
 * @link /api/events/:id/accept-participant
 */
export async function acceptParticipant(
  id: AcceptParticipantPathParams["id"],
  params: AcceptParticipantQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<AcceptParticipantMutationResponse>["data"]> {
  const res = await client<AcceptParticipantMutationResponse>({
    method: "post",
    url: `http://localhost:8081/api/events/${id}/accept-participant`,
    params,
    ...options,
  });
  return res.data;
}
