export type AcceptParticipantPathParams = {
  /**
   * @type integer, int64
   */
  id: number;
};
export type AcceptParticipantQueryParams = {
  /**
   * @type integer, int64
   */
  participantId: number;
};
/**
 * @description OK
 */
export type AcceptParticipant200 = any;
export type AcceptParticipantMutationResponse = any;
export type AcceptParticipantMutation = {
  Response: AcceptParticipantMutationResponse;
  PathParams: AcceptParticipantPathParams;
  QueryParams: AcceptParticipantQueryParams;
};
