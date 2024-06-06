import { GetCustomerOrderDocument } from '@/graphql/client.generated';
import { GetDataExportBarcodeDocument } from '@/graphql/client.generated';

export const QueriesCustOrd = {
  query: {
    custorddtl: GetCustomerOrderDocument,
    custorddtlBarcode: GetDataExportBarcodeDocument,
  },
  mutation: {},
  subscription: {},
};
