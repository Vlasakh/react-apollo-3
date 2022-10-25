import { useEffect, useMemo, useState } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { SEVERITY } from '../../Alerts/AlertContext';
import { useAlertContext } from '../../Alerts/AlertContext';
import { useMultyState } from '../../hooks/useMultyState';
import { CREATE_USER } from '../../query/createUser';
import { GET_ALL_USERS } from '../../query/getAllUsers';
import { INIT_DB } from '../../query/initDb';
import { UPDATE_USER } from '../../query/updateUser';
import { UserFields } from '../../types/User';
import { randomInteger } from '../../utils/randomInteger';
import { UserSuggestion } from './UserSuggestion';

const FIELDS_ORDER: UserFields[] = [
  UserFields.name,
  UserFields.username,
  UserFields.email,
  UserFields.address,
  UserFields.company,
];

export function AddUser({ user }) {
  const [formData, setFormData] = useMultyState<Record<UserFields, String>>({});
  const [createUser] = useMutation(CREATE_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  // const [fetchUsers] = useLazyQuery(GET_ALL_USERS, {});
  const { setAlert } = useAlertContext();

  useEffect(() => {
    user && handleSetFields(user);
  }, [user]);

  const handleSetFields = ({ id, name, username, email, address, company }) => {
    setFormData({
      [UserFields.id]: id,
      [UserFields.name]: name,
      [UserFields.username]: username,
      [UserFields.email]: email,
      [UserFields.address]: address,
      [UserFields.company]: company,
    });
  };
  const handleSubmit = () => {
    console.log('❗formData', formData);
    formData.id
      ? updateUser({
          variables: { input: { ...formData } },
          onError: (e) => setAlert(e.message, SEVERITY.error),
        })
      : createUser({
          variables: {
            input: {
              ...formData,
              id: formData.id ?? (10000 + randomInteger(1, 100)).toString(),
            },
          },
          refetchQueries: [{ query: GET_ALL_USERS }],
          // onCompleted: () => fetchUsers(),
        });
  };

  return (
    <Stack direction="row" spacing={2} sx={{ margin: '30px 10px 10px 0' }}>
      <Card variant="outlined" sx={{ maxWidth: 350 }}>
        <CardContent>
          <Typography component={'h3'} color="text.secondary">
            Add user
          </Typography>
          {FIELDS_ORDER.map((field) => (
            <TextField
              key={field}
              label={UserFields[field]}
              variant="outlined"
              margin={'dense'}
              size={'small'}
              fullWidth
              value={formData[field] || ''}
              onChange={(e) => setFormData({ [field]: e.target.value })}
            />
          ))}
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button size="small" variant={'contained'} onClick={handleSubmit}>
            {formData.id ? 'Save' : 'Add'}
          </Button>
        </CardActions>
      </Card>

      <UserSuggestion onSetFields={handleSetFields} />
    </Stack>
  );
}
