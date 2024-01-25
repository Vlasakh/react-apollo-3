import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './userFragment';

export const GET_USER = gql`
  ${USER_FRAGMENT}

  query GetUser($id: ID) {
    values: getUser(id: $id) {
      ...userFragment
    }
  }
`;
