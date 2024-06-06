import { graphql } from 'msw'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type CreateUserRecipe = {
  __typename?: 'CreateUserRecipe';
  id: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUserRecipe;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  users: Array<UserRecipe>;
};

export type UserRecipe = {
  __typename?: 'UserRecipe';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UserRecipe', email: string, id: string, userName: string }> };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserRecipe', id: string } };

const test = graphql.link(`${process.env.NEXT_PUBLIC_BFF_URL}`)

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetUsersQueryTest((req, res, ctx) => {
 *   return res(
 *     ctx.data({ users })
 *   )
 * })
 */
export const mockGetUsersQueryTest = (resolver: Parameters<typeof test.query<GetUsersQuery, GetUsersQueryVariables>>[1]) =>
  test.query<GetUsersQuery, GetUsersQueryVariables>(
    'GetUsers',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateUserMutationTest((req, res, ctx) => {
 *   const { createUserInput } = req.variables;
 *   return res(
 *     ctx.data({ createUser })
 *   )
 * })
 */
export const mockCreateUserMutationTest = (resolver: Parameters<typeof test.mutation<CreateUserMutation, CreateUserMutationVariables>>[1]) =>
  test.mutation<CreateUserMutation, CreateUserMutationVariables>(
    'CreateUser',
    resolver
  )
