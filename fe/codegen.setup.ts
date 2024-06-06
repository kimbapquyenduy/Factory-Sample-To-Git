import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_BFF_URL,
  documents: ['src/graphql/client.graphql'],
  generates: {
    'src/graphql/types.generated.ts': {
      plugins: ['typescript'],
    }, // generate graphql typescript
    'src/graphql/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.generated.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    }, // generate query, mutation, .... typescript
    '__mocks__/mock.types.generated.ts': {
      config: {
        link: {
          name: 'test',
          endpoint: 'process.env.NEXT_PUBLIC_BFF_URL',
        },
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-msw'],
    },
  },
};

export default config;
