import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';
import { AlertContextProvider } from '../Alerts/AlertContext';
import { SnackbarAlert } from '../Alerts/SnackbarAlert';
import '../styles/globals.css';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql', cache: new InMemoryCache() });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AlertContextProvider>
        <SnackbarAlert />
        <Component {...pageProps} />
      </AlertContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
