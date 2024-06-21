import { AddressDto } from "./AddressDto";
import { CommentDto } from "./CommentDto";
import { EventDto } from "./EventDto";

export type AccountDto = {
  /**
   * @type integer | undefined, int64
   */
  id?: number;
  /**
   * @type string
   */
  firstname: string;
  /**
   * @type string
   */
  lastName: string;
  /**
   * @type string
   */
  password: string;
  /**
   * @type string
   */
  email: string;
  address: AddressDto;
  /**
   * @type string, date-time
   */
  birthDate: string;
  /**
   * @type array | undefined
   */
  preferences?: string[];
  /**
   * @type number | undefined, float
   */
  rating?: number;
  /**
   * @type array | undefined
   */
  comments?: CommentDto[];
  /**
   * @type string | undefined
   */
  description?: string;
  /**
   * @type array | undefined
   */
  events?: EventDto[];
};
