import { useMemo } from 'react';
import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import merge from 'deepmerge';

const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
const isSSR = typeof window === 'undefined';
const PORT = process.env.NEXT_PUBLIC_SERVER_PORT;

let apolloClient;

function createIsomorphLink() {
  const { HttpLink } = require('@apollo/client/link/http');

  return new HttpLink({
    uri: `http://localhost:${PORT}/graphql`,
    credentials: 'same-origin',
  });
}

function createApolloClient() {
  const defaultOptions = isSSR
    ? {
        // query: {
        //   fetchPolicy: 'no-cache',
        //   errorPolicy: 'all',
        // },
      }
    : {
        query: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'all',
        },
      };

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
    defaultOptions,
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (isSSR) return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}

export function addApolloState(client, pageProps) {
  return {
    ...pageProps,
    props: { ...pageProps.props, [APOLLO_STATE_PROP_NAME]: client.cache.extract() },
  };
}

export function removeApolloState(pageProps) {
  return omit(pageProps, APOLLO_STATE_PROP_NAME);
}
