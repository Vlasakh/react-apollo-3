import { ApolloProvider } from '@apollo/client';
import Box from '@mui/material/Box';
import type { AppProps } from 'next/app';
import { AlertContextProvider } from '../Alerts/AlertContext';
import { SnackbarAlert } from '../Alerts/SnackbarAlert';
import { removeApolloState, useApollo } from '../common/services/Apollo';
import { LayoutMain } from '../layouts/Main';
import '../styles/globals.css';

// const client = new ApolloClient({ uri: 'http://localhost:5000/graphql', cache: new InMemoryCache() });

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AlertContextProvider>
        <SnackbarAlert />
        <LayoutMain>
          <Component {...removeApolloState(pageProps)} />
        </LayoutMain>
      </AlertContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
