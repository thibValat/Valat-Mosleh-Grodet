export type AddRequirementPathParams = {
  /**
   * @type integer, int64
   */
  id: number;
};
export type AddRequirementQueryParams = {
  /**
   * @type string
   */
  requirement: string;
};
/**
 * @description OK
 */
export type AddRequirement200 = any;
export type AddRequirementMutationResponse = any;
export type AddRequirementMutation = {
  Response: AddRequirementMutationResponse;
  PathParams: AddRequirementPathParams;
  QueryParams: AddRequirementQueryParams;
};
