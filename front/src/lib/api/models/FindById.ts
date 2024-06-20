import type { AccountDto } from "./AccountDto";

export type FindByIdPathParams = {
  /**
   * @type integer, int64
   */
  id: number;
};
/**
 * @description OK
 */
export type FindById200 = AccountDto;
/**
 * @description OK
 */
export type FindByIdQueryResponse = AccountDto;
export type FindByIdQuery = {
  Response: FindByIdQueryResponse;
  PathParams: FindByIdPathParams;
};
