import { AccountDto } from "./AccountDto";
import { AddressDto } from "./AddressDto";
import { DemandDto } from "./DemandDto";

export type EventDto = {
  /**
   * @type integer | undefined, int64
   */
  id?: number;
  /**
   * @type string
   */
  description: string;
  organizer?: AccountDto;
  /**
   * @type integer | undefined, int64
   */
  eventTypeId?: number;
  /**
   * @type string
   */
  eventType: string;
  /**
   * @type string
   */
  name: string;
  /**
   * @type string, date-time
   */
  date: Date;
  address: AddressDto;
  /**
   * @type integer, int32
   */
  capacity: number;
  /**
   * @type array | undefined
   */
  participants?: AccountDto[];
  /**
   * @type number, float
   */
  price: number;
  /**
   * @type array | undefined
   */
  demands?: DemandDto[];
  /**
   * @type array
   */
  requirements: string[];
  /**
   * @type boolean
   */
  alcoolAllowed: boolean;
  /**
   * @type object | undefined
   */
  additionalProperties?: {
    [key: string]: {};
  };
};
