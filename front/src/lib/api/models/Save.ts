import { AccountCreationDto } from "./AccountCreationDto";
import type { AccountDto } from "./AccountDto";

/**
 * @description OK
 */
export type Save200 = AccountDto;
export type SaveMutationRequest = AccountCreationDto;
/**
 * @description OK
 */
export type SaveMutationResponse = AccountDto;
export type SaveMutation = {
  Response: SaveMutationResponse;
  Request: SaveMutationRequest;
};
