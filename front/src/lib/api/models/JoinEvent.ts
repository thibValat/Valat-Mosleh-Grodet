export type JoinEventPathParams = {
  /**
   * @type integer, int64
   */
  id: number;
};
export type JoinEventQueryParams = {
  /**
   * @type integer, int64
   */
  participantId: number;
};
/**
 * @description OK
 */
export type JoinEvent200 = any;
export type JoinEventMutationResponse = any;
export type JoinEventMutation = {
  Response: JoinEventMutationResponse;
  PathParams: JoinEventPathParams;
  QueryParams: JoinEventQueryParams;
};
