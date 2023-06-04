import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'https://modu-main.hasura.app/v1/graphql': {
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_TOKEN,
      },
    },
  },

  documents: './app/**/*.graphql',
  generates: {
    './app/types/generated/': {
      preset: 'client',
      config: {},
      plugins: [],
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
