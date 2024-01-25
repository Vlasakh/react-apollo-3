import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './userFragment';

export const GET_ALL_USERS = gql`
  ${USER_FRAGMENT}

  query GetAllUsers {
    values: getAllUsers {
      ...userFragment
    }
  }
`;
