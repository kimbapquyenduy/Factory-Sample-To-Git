export interface CustomExceptionDetails {
  type: string;
  details: string;
  domain: string;
  metadata: { service: string };
}
