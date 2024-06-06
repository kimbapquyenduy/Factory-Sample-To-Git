/* eslint-disable */

/** Imported data from MRP service */
export interface OffsetPaginationResponseModel {
  /** Current page. Ex: 1 */
  page: number;
  /** Number of taken item. Ex: 100 */
  take: number;
  /** Total received items */
  itemCount: number;
  /** Total pages. Ex: 8 */
  pageCount: number;
  /** Is there a previous page?. Ex: True */
  hasPreviousPage: boolean;
  /** Is there a next page?. Ex: True */
  hasNextPage: boolean;
}
