import {
  GetRolesDocument,
  CreateRoleDocument,
} from '@/graphql/client.generated';

export const QueriesRoles = {
  query: {
    roles: GetRolesDocument,
  },
  mutation: {
    role: CreateRoleDocument,
  },
  subscription: {},
};
