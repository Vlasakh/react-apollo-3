import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { GET_ALL_USERS } from './query/users';

export function UserList() {
  const [users, setUsers] = useState([]);
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  console.log('❗users data', { users, data });
  useEffect(() => {
    data && setUsers(data.getAllUsers);
  }, [data]);

  return (
    <div className="App">
      {loading
        ? 'loading...'
        : !!users.length && (
            <>
              <h1>Users</h1>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell component="th">id</TableCell>
                    <TableCell component="th">name</TableCell>
                    <TableCell component="th">username</TableCell>
                    <TableCell component="th">email</TableCell>
                    <TableCell component="th">address</TableCell>
                    <TableCell component="th">company</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(({ id, name, username, email, address, company }) => (
                    <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell>{id}</TableCell>
                      <TableCell>{name}</TableCell>
                      <TableCell>{username}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{address}</TableCell>
                      <TableCell>{company}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
    </div>
  );
}
