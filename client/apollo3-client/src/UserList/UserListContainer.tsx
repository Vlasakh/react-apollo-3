import { useEffect, useState } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { CREATE_USER } from '../query/createUser';
import { INIT_DB } from '../query/initDb';
import { GET_ALL_USERS } from '../query/users';
import { AddUser } from './AddUser';
import { UserList } from './UserList';

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
    <Box sx={{ margin: 1 }}>
      <UserList users={users} loading={usersQuery.loading} onInitDb={handleInitDb} setEditUser={handleSetEditUser} />
      <AddUser user={user} />
    </Box>
  );
}
