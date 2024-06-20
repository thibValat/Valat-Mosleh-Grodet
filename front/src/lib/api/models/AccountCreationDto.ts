import { AddressDto } from "./AddressDto";

export type AccountCreationDto = {
  /**
   * @type string
   */
  firstName: string;
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
};
