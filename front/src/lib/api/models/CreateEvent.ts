import type { EventDto } from "./EventDto";

/**
 * @description OK
 */
export type CreateEvent200 = EventDto;
export type CreateEventMutationRequest = EventDto;
/**
 * @description OK
 */
export type CreateEventMutationResponse = EventDto;
export type CreateEventMutation = {
  Response: CreateEventMutationResponse;
  Request: CreateEventMutationRequest;
};
