import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { User } from '../../modules/User/User';

const UserPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <User id={id} />;
};

export default UserPage;
