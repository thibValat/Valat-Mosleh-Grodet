import type { AccountDto } from "./AccountDto";

/**
 * @description OK
 */
export type FindAll200 = AccountDto[];
/**
 * @description OK
 */
export type FindAllQueryResponse = AccountDto[];
export type FindAllQuery = {
  Response: FindAllQueryResponse;
};
