export type DeclineParticipantPathParams = {
  /**
   * @type integer, int64
   */
  id: number;
};
export type DeclineParticipantQueryParams = {
  /**
   * @type integer, int64
   */
  participantId: number;
};
/**
 * @description OK
 */
export type DeclineParticipant200 = any;
export type DeclineParticipantMutationResponse = any;
export type DeclineParticipantMutation = {
  Response: DeclineParticipantMutationResponse;
  PathParams: DeclineParticipantPathParams;
  QueryParams: DeclineParticipantQueryParams;
};
