import type { NextPage } from 'next';
import { addApolloState, initializeApollo, useApollo } from '../common/services/Apollo';
import { SsrUsersContainer } from '../modules/UserList/SsrUsersContainer';
import { GET_STATIC_USERS, defaultVariables } from '../query/getStaticUsers';

const SsrUsersPage: NextPage = () => {
  return <SsrUsersContainer />;
};

export async function getServerSideProps() {
  const client = initializeApollo();

  await client.query({ query: GET_STATIC_USERS, variables: defaultVariables });

  return addApolloState(client, {});
}

export default SsrUsersPage;
