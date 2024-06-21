import type { EventDto } from "./EventDto";

export type GetEventByIdPathParams = {
  /**
   * @type integer, int64
   */
  id: number;
};
/**
 * @description OK
 */
export type GetEventById200 = EventDto;
/**
 * @description OK
 */
export type GetEventByIdQueryResponse = EventDto;
export type GetEventByIdQuery = {
  Response: GetEventByIdQueryResponse;
  PathParams: GetEventByIdPathParams;
};
