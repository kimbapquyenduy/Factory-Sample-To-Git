import { GraphQLError } from 'graphql';
import { CustomException } from './customException.interface';
import { CustomExceptionDetails } from './customExceptionDetails.interface';

export function GraphQLException(err: any) {
  let _exception: CustomException<string>;
  let details: CustomExceptionDetails;
  if (typeof err === 'object') {
    _exception = err as CustomException<string>;
    details = <CustomExceptionDetails>JSON.parse(_exception.details);
  }
  throw new GraphQLError(details.details, {
    extensions: {
      code: details.type,
    },
  });
}
