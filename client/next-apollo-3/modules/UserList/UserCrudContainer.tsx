import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useRouteService } from '../../common/services/RouteService';
import { GET_ALL_USERS } from '../../query/getAllUsers';
import { INIT_DB } from '../../query/initDb';
import { AddUser } from './AddUser';
import { UserListBlock } from './UserListBlock';

export function UserCrudContainer() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const usersQuery = useQuery(GET_ALL_USERS);
  const [initDb] = useMutation(INIT_DB, {
    onCompleted: () => usersQuery.refetch(),
  });
  const appRoutes = useRouteService();
  const router = useRouter();

  const handleSetEditUser = (user) => setUser(user);
  const handleRowClick = ({ id }) => {
    router.push({ pathname: appRoutes.getUserPath(), query: { id } });
  };

  const handleInitDb = (limit: number) =>
    initDb({
      variables: { limit: +limit },
    });

  useEffect(() => {
    usersQuery.data && setUsers(usersQuery.data.getAllUsers);
  }, [usersQuery.data]);

  return (
    <>
      <UserListBlock
        users={users}
        loading={usersQuery.loading}
        onInitDb={handleInitDb}
        setEditUser={handleSetEditUser}
        onRowClick={handleRowClick}
      />
      <AddUser user={user} />
    </>
  );
}
