## Graphql + Codegen

```bash
# development generate graphql type
$ yarn codegen:dev
```

```typescript
const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_BFF_URL,
  documents: ['src/infrastructure/graphql/client.graphql'],
  generates: {
    'src/infrastructure/graphql/types.generated.ts': {
      plugins: ['typescript'],
    },
    'src/infrastructure/graphql/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.generated.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
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
```

### Server schema

we can specify the file `graphql` or `url`. Example `http://localhost/graphql`.

### Client query

we define graphql client `query`, `mutation`.

### Generate testing

the cli will be generate `typescript` , `msw` only for testing
