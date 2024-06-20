import type { EventDto } from "./EventDto";

export type GetAllEventsQueryParams = {
  /**
   * @type integer | undefined, int32
   */
  page?: number;
  /**
   * @type integer | undefined, int32
   */
  size?: number;
};
/**
 * @description OK
 */
export type GetAllEvents200 = EventDto[];
/**
 * @description OK
 */
export type GetAllEventsQueryResponse = EventDto[];
export type GetAllEventsQuery = {
  Response: GetAllEventsQueryResponse;
  QueryParams: GetAllEventsQueryParams;
};
