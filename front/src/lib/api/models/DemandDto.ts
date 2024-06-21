import { AccountDto } from "./AccountDto";

export type DemandDto = {
  /**
   * @type integer | undefined, int64
   */
  id?: number;
  sender?: AccountDto;
  /**
   * @type boolean | undefined
   */
  isAccepted?: boolean;
  /**
   * @type integer | undefined, int64
   */
  eventId?: number;
};
