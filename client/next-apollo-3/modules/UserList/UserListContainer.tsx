import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import { GET_ALL_USERS } from '../../query/getAllUsers';
import { INIT_DB } from '../../query/initDb';
import { AddUser } from './AddUser';
import { UserListBlock } from './UserListBlock';

export function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const usersQuery = useQuery(GET_ALL_USERS);
  const [initDb] = useMutation(INIT_DB, {
    onCompleted: () => usersQuery.refetch(),
  });

  const handleSetEditUser = (user) => () => setUser(user);

  const handleInitDb = (limit: number) =>
    initDb({
      variables: { limit: +limit },
    });

  useEffect(() => {
    usersQuery.data && setUsers(usersQuery.data.getAllUsers);
  }, [usersQuery.data]);

  return (
    <>
      <UserListBlock users={users} loading={usersQuery.loading} onInitDb={handleInitDb} setEditUser={handleSetEditUser} />
      <AddUser user={user} />
    </>
  );
}
