import type { NextPage } from 'next';
import { addApolloState, initializeApollo, useApollo } from '../common/services/Apollo';
import { StaticUsersContainer } from '../modules/UserList/StaticUsersContainer';
import { GET_STATIC_USERS } from '../query/getStaticUsers';

const StaticUsersPage: NextPage = () => {
  return <StaticUsersContainer />;
};

export async function getServerSideProps() {
  const client = initializeApollo();

  await client.query({ query: GET_STATIC_USERS });

  return addApolloState(client, {});
}

export default StaticUsersPage;
