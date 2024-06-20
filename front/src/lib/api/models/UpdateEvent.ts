import type { EventDto } from "./EventDto";

export type UpdateEventPathParams = {
  /**
   * @type integer, int64
   */
  id: number;
};
/**
 * @description OK
 */
export type UpdateEvent200 = EventDto;
export type UpdateEventMutationRequest = EventDto;
/**
 * @description OK
 */
export type UpdateEventMutationResponse = EventDto;
export type UpdateEventMutation = {
  Response: UpdateEventMutationResponse;
  Request: UpdateEventMutationRequest;
  PathParams: UpdateEventPathParams;
};
