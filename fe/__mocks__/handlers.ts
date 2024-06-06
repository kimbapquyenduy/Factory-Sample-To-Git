import { faker } from '@faker-js/faker';
import { ACCOUNT_ENTITIES } from './fixtures';
import {
  mockCreateUserMutationTest,
  mockGetUsersQueryTest,
} from './mock.types.generated';

export const handlers = [
  mockCreateUserMutationTest((_, res, ctx) => {
    return res(
      ctx.data({
        createUser: { id: faker.string.uuid() },
      })
    );
  }),
  mockGetUsersQueryTest((_, res, ctx) => {
    return res(ctx.data({ users: ACCOUNT_ENTITIES }));
  }),
];
