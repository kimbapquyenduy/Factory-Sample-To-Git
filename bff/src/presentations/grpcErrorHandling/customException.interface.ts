import { Metadata } from '@grpc/grpc-js';
import { StatusCode } from './gRPCStatus';
export interface CustomException<T> {
  code: StatusCode;
  details: T;
  metadata: Metadata;
}
