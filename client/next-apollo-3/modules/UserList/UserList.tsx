import noop from 'lodash/noop';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { SquareButton } from './SquareButton';

const BoxContorls = styled(Box)({ display: 'flex', '& button': { marginRight: '5px' } });
const TableRowUser = styled(TableRow)({ '&:hover td': { backgroundColor: '#1565c01c', cursor: 'pointer' } });

export function UserList({ users, onRowClick = noop, controls = [] }) {
  return (
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
              <TableRowUser
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => onRowClick(user)}
              >
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{username}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>
                  <BoxContorls>
                    {controls.map(({ title, onClick }) => (
                      <SquareButton
                        variant={'outlined'}
                        onClick={(e) => {
                          e.stopPropagation();
                          return onClick(user);
                        }}
                      >
                        {title}
                      </SquareButton>
                    ))}
                  </BoxContorls>
                </TableCell>
              </TableRowUser>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
