import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: ['http://localhost:4000/graphql', './src/graphql/typeDefs.ts'],
  documents: 'src/graphql/**/*.{gql,ts,tsx}',
  generates: {
    'src/generated/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'typescript-apollo-client-helpers',
      ],
    },
  },
};
export default config;
