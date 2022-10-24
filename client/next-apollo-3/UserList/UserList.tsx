import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

export function UserList({ users, loading, onInitDb, setEditUser }) {
  const [limit, setLimit] = useState(3);

  return (
    <div>
      {loading ? (
        'loading...'
      ) : !!users.length ? (
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
                <TableCell component="th"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => {
                const { id, name, username, email, address, company } = user;

                return (
                  <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{username}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{address}</TableCell>
                    <TableCell>{company}</TableCell>
                    <TableCell>
                      <Button
                        variant={'outlined'}
                        sx={{ paddingLeft: 0, paddingRight: 0, minWidth: 36 }}
                        onClick={setEditUser(user)}
                      >
                        E
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </>
      ) : (
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <TextField
            label={'Users number'}
            variant="outlined"
            margin={'dense'}
            size={'small'}
            value={limit}
            onChange={(e) => setLimit(+e.target.value)}
          />
          <Button size="small" variant={'contained'} onClick={() => onInitDb(limit)}>
            Init
          </Button>
        </Stack>
      )}
    </div>
  );
}
