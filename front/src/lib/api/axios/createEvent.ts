import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  CreateEventMutationRequest,
  CreateEventMutationResponse,
} from "../models/CreateEvent";

/**
 * @link /api/events
 */
export async function createEvent(
  data: CreateEventMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateEventMutationResponse>["data"]> {
  const res = await client<
    CreateEventMutationResponse,
    CreateEventMutationRequest
  >({
    method: "post",
    url: `http://localhost:8081/api/events`,
    data,
    ...options,
  });
  return res.data;
}
