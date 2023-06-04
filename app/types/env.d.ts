declare module '@env' {
  export const AUTH0_DOMAIN: string;
  export const AUTH0_CLIENT_ID: string;
  export const GRAPHQL_ENDPOINT: string;
}

declare var process: {
  env: {
    NODE_ENV: string;
    GRAPHQL_ENDPOINT: string;
    HASURA_ADMIN_TOKEN: string;
  };
};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHQL_ENDPOINT: string;
      HASURA_ADMIN_TOKEN: string;
    }
  }
}
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
