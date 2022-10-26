import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './userFragment';

export const GET_STATIC_USERS = gql`
  ${USER_FRAGMENT}

  query Users {
    values: getStaticUsers {
      ...userFragment
    }
  }
`;
