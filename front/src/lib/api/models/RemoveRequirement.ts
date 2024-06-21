export type RemoveRequirementPathParams = {
  /**
   * @type integer, int64
   */
  id: number;
};
export type RemoveRequirementQueryParams = {
  /**
   * @type string
   */
  requirement: string;
};
/**
 * @description OK
 */
export type RemoveRequirement200 = any;
export type RemoveRequirementMutationResponse = any;
export type RemoveRequirementMutation = {
  Response: RemoveRequirementMutationResponse;
  PathParams: RemoveRequirementPathParams;
  QueryParams: RemoveRequirementQueryParams;
};
