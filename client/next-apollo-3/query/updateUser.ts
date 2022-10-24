import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './userFragment';

export const UPDATE_USER = gql`
  ${USER_FRAGMENT}

  mutation UpdateUser($input: UserInput) {
    updateUser(input: $input) {
      ...userFragment
    }
  }
`;
