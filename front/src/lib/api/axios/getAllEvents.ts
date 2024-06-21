import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  GetAllEventsQueryResponse,
  GetAllEventsQueryParams,
} from "../models/GetAllEvents";

/**
 * @link /api/events
 */
export async function getAllEvents(
  params?: GetAllEventsQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetAllEventsQueryResponse>["data"]> {
  const res = await client<GetAllEventsQueryResponse>({
    method: "get",
    url: `http://localhost:8081/api/events`,
    params,
    ...options,
  });
  return res.data;
}
