import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  DeclineParticipantMutationResponse,
  DeclineParticipantPathParams,
  DeclineParticipantQueryParams,
} from "../models/DeclineParticipant";

/**
 * @link /api/events/:id/decline-participant
 */
export async function declineParticipant(
  id: DeclineParticipantPathParams["id"],
  params: DeclineParticipantQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<DeclineParticipantMutationResponse>["data"]> {
  const res = await client<DeclineParticipantMutationResponse>({
    method: "post",
    url: `http://localhost:8081/api/events/${id}/decline-participant`,
    params,
    ...options,
  });
  return res.data;
}
