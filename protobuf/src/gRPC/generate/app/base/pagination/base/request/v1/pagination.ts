/* eslint-disable */

/** Pagination options model */
export interface OffsetPaginationRequestModel {
  /** Data ordering. Ex: ASC/DESC */
  order: string;
  /** Page number. Ex: 2 */
  page: number;
  /** Total received items */
  take: number;
  /** Total skipped items */
  skip: number;
}
