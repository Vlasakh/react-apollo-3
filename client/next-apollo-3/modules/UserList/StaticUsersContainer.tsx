import { useQuery } from '@apollo/client';
import { GET_STATIC_USERS } from '../../query/getStaticUsers';
import { UserList } from './UserList';

export function StaticUsersContainer() {
  // const [users, setUsers] = useState([]);
  const usersQuery = useQuery(GET_STATIC_USERS);

  return (
    <>
      <UserList users={usersQuery?.data?.values} />
    </>
  );
}
