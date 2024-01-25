import type { NextPage } from 'next';
import { addApolloState, initializeApollo } from '../common/services/Apollo';
import { UserCrudContainer } from '../modules/UserList/UserCrudContainer';
import { GET_ALL_USERS } from '../query/getAllUsers';

const UsersCrudPage: NextPage = () => {
  return <UserCrudContainer />;
};

// export async function getServerSideProps() {
//   const client = initializeApollo();
//
//   try {
//     await client.query({ query: GET_ALL_USERS });
//   } catch (e) {
//     console.error('❗e.message', e.message);
//   }
//
//   return addApolloState(client, {});
// }

export default UsersCrudPage;
