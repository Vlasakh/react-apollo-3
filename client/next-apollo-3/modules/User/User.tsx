import { useQuery } from '@apollo/client';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRouteService } from '../../common/services/RouteService';
import { GET_USER } from '../../query/getUser';
import { UserFields } from '../../types/User';
import { SquareButton } from '../UserList/SquareButton';

const FIELDS_ORDER: UserFields[] = [
  UserFields.name,
  UserFields.username,
  UserFields.email,
  UserFields.address,
  UserFields.company,
];

type Props = { id: string };

export function User({ id }: Props) {
  const router = useRouter();
  const appRoutes = useRouteService();

  console.log('❗router', router);
  // const [users, setUsers] = useState([]);
  const { data, loading } = useQuery(GET_USER, { variables: { id } });
  data && console.log('❗userQuery', data);

  return (
    <>
      <Link href={appRoutes.getHomePath()}>
        <Button variant={'outlined'}>
          <ArrowBack />
        </Button>
      </Link>
      <br />
      <br />

      {loading ? (
        'loading...'
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {FIELDS_ORDER.map((field) => (
            <Box>
              <b>{field}</b>: {data?.values?.[field]}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}
