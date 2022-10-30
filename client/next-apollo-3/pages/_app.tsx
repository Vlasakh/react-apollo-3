import { ApolloProvider } from '@apollo/client';
import Box from '@mui/material/Box';
import type { AppProps } from 'next/app';
import { AlertContextProvider } from '../Alerts/AlertContext';
import { SnackbarAlert } from '../Alerts/SnackbarAlert';
import { removeApolloState, useApollo } from '../common/services/Apollo';
import '../styles/globals.css';

// const client = new ApolloClient({ uri: 'http://localhost:5000/graphql', cache: new InMemoryCache() });

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AlertContextProvider>
        <SnackbarAlert />
        <Box sx={{ margin: 1 }}>
          <Component {...removeApolloState(pageProps)} />
        </Box>
      </AlertContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
