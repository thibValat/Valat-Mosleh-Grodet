import type { EventDto } from "./EventDto";

export type SearchEventsQueryParams = {
  /**
   * @type string | undefined
   */
  city?: string;
  /**
   * @type string | undefined
   */
  eventType?: string;
  /**
   * @type integer | undefined, int32
   */
  maxParticipants?: number;
  /**
   * @type number | undefined, double
   */
  maxPrice?: number;
  /**
   * @type string | undefined
   */
  date?: string;
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
export type SearchEvents200 = EventDto[];
/**
 * @description OK
 */
export type SearchEventsQueryResponse = EventDto[];
export type SearchEventsQuery = {
  Response: SearchEventsQueryResponse;
  QueryParams: SearchEventsQueryParams;
};
