import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './userFragment';

export const CREATE_USER = gql`
  ${USER_FRAGMENT}

  mutation CreateUser($input: UserInput) {
    createUser(input: $input) {
      ...userFragment
    }
  }
`;
