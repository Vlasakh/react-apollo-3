import { useState } from 'react';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRouteService } from '../../common/services/RouteService';
import { SquareButton } from './SquareButton';

const BoxContorls = styled(Box)({ display: 'flex', '& button': { marginRight: '5px' } });

export function UserListBlock({ users, loading, onInitDb, setEditUser }) {
  const [limit, setLimit] = useState(3);
  const appRoutes = useRouteService();

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
                      <BoxContorls>
                        <SquareButton variant={'outlined'} onClick={setEditUser(user)}>
                          E
                        </SquareButton>
                        <Link href={{ pathname: appRoutes.getUserPath(), query: { id } }}>
                          <SquareButton variant={'outlined'}>
                            <ArrowForward />
                          </SquareButton>
                        </Link>
                      </BoxContorls>
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
