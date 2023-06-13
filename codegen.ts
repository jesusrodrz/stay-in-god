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
      config: {
        scalars: {
          ID: { input: ' string | number', output: 'string' },
          String: { input: 'string', output: 'string' },
          Boolean: { input: 'boolean', output: 'boolean' },
          Int: { input: 'number', output: 'number' },
          Float: { input: 'number', output: 'number' },
          _int4: {
            input: '`{${string}}`',
            output: 'number[]',
          },
          date: { input: 'string', output: 'string' },
          timestamptz: { input: 'string', output: 'string' },
          uuid: { input: 'string', output: 'string' },
        },
      },
      plugins: [],
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
