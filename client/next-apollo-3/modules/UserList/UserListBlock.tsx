import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
// import { styled } from '@mui/material/styles';
import { UserList } from './UserList';
import { User } from './types';

type Props = { users: User[] };

export function UserListBlock({ users, loading, onInitDb, setEditUser, onRowClick }: Props) {
  const [limit, setLimit] = useState(3);

  return (
    <div>
      {loading ? (
        'loading...'
      ) : !!users.length ? (
        <UserList
          users={users}
          onRowClick={onRowClick}
          controls={[
            {
              title: 'E',
              onClick: setEditUser,
            },
          ]}
        />
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
