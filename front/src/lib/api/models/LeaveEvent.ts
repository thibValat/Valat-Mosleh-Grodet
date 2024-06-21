export type LeaveEventPathParams = {
  /**
   * @type integer, int64
   */
  id: number;
};
export type LeaveEventQueryParams = {
  /**
   * @type integer, int64
   */
  participantId: number;
};
/**
 * @description OK
 */
export type LeaveEvent200 = any;
export type LeaveEventMutationResponse = any;
export type LeaveEventMutation = {
  Response: LeaveEventMutationResponse;
  PathParams: LeaveEventPathParams;
  QueryParams: LeaveEventQueryParams;
};
