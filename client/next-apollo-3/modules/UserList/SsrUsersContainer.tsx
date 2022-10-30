import { useQuery } from '@apollo/client';
import { GET_STATIC_USERS, defaultVariables } from '../../query/getStaticUsers';
import { UserList } from './UserList';

export function SsrUsersContainer() {
  // const [users, setUsers] = useState([]);
  const usersQuery = useQuery(GET_STATIC_USERS, { variables: defaultVariables });

  return (
    <>
      <UserList users={usersQuery?.data?.values} onRowClick={() => console.log('❗lciked')} />
    </>
  );
}
