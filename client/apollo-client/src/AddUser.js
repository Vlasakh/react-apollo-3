import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export function AddUser() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Card variant="outlined" sx={{ marginLeft: 1, maxWidth: 350 }}>
        <CardContent>
          <Typography component={'h3'} color="text.secondary">
            Add user
          </Typography>
          <TextField label="name" variant="outlined" margin={'dense'} size={'small'} fullWidth />
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button size="small" variant={'contained'}>
            Add
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
