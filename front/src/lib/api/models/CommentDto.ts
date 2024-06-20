import { AccountDto } from "./AccountDto";

export type CommentDto = {
  /**
   * @type integer | undefined, int64
   */
  id?: number;
  /**
   * @type string
   */
  content: string;
  /**
   * @type integer, int32
   */
  rating: number;
  /**
   * @type string
   */
  title: string;
  sender: AccountDto;
  target: AccountDto;
};
