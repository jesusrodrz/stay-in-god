import { GRAPHQL_ENDPOINT } from '@env';
import { Auth0ContextInterface } from 'react-native-auth0';

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { setContext } from '@apollo/client/link/context';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const getAuthLink = (
  getCredentials: Auth0ContextInterface['getCredentials'],
): ApolloLink =>
  setContext(async (_, { headers }) => {
    const { accessToken } = await getCredentials();

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    };
  });
const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
});

/**
 * @param getToken - Get token function.
 * @returns Apollo link.
 */
export function createAuthApolloLink(
  getCredentials: Auth0ContextInterface['getCredentials'],
): ApolloLink {
  const authLink = getAuthLink(getCredentials).concat(httpLink);
  /**
   * @returns Headers.
   */
  async function getHeaders(): Promise<{ headers: Record<string, string> }> {
    const { accessToken } = await getCredentials();

    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  const wsLink = new GraphQLWsLink(
    createClient({
      url: GRAPHQL_ENDPOINT.replace('http', 'ws'),
      connectionParams: getHeaders,
    }),
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink,
  );

  return splitLink;
}
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
