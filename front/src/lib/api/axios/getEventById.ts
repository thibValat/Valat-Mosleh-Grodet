import client from "@kubb/swagger-client/client";
import type { ResponseConfig } from "@kubb/swagger-client/client";
import type {
  GetEventByIdQueryResponse,
  GetEventByIdPathParams,
} from "../models/GetEventById";

/**
 * @link /api/events/:id
 */
export async function getEventById(
  id: GetEventByIdPathParams["id"],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetEventByIdQueryResponse>["data"]> {
  const res = await client<GetEventByIdQueryResponse>({
    method: "get",
    url: `http://localhost:8081/api/events/${id}`,
    ...options,
  });
  return res.data;
}
