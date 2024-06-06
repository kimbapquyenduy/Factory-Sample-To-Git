import {
  GetUsersDocument,
  CreateUserDocument,
} from '@/graphql/client.generated';

export const QueriesUsers = {
  query: {
    users: GetUsersDocument,
  },
  mutation: {
    user: CreateUserDocument,
  },
  subscription: {},
};
