import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  SearchEventsQueryResponse,
  SearchEventsQueryParams,
} from "../models/SearchEvents";

/**
 * @link /api/events/search
 */
export async function searchEvents(
  params?: SearchEventsQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<SearchEventsQueryResponse>["data"]> {
  const res = await client<SearchEventsQueryResponse>({
    method: "get",
    url: `http://localhost:8081/api/events/search`,
    params,
    ...options,
  });
  return res.data;
}
