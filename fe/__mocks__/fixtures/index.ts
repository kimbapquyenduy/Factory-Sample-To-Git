import { UserRecipe, CreateUserInput } from '../mock.types.generated';
import { faker } from '@faker-js/faker';

export const CREATE_ACCOUNT: CreateUserInput = {
  email: `${faker.person.firstName()}@gmail.com`,
  userName: faker.person.firstName(),
};

export const ACCOUNT_ENTITIES: UserRecipe[] = [
  {
    id: faker.string.uuid(),
    email: `${faker.person.firstName()}@gmail.com`,
    userName: faker.person.firstName(),
  },
  {
    id: faker.string.uuid(),
    email: `${faker.person.firstName()}@gmail.com`,
    userName: faker.person.firstName(),
  },
];
