import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './userFragment';

export const defaultVariables = { skip: 10 };

export const GET_STATIC_USERS = gql`
  ${USER_FRAGMENT}

  query GetStaticUsers($skip: Int) {
    values: getStaticUsers(skip: $skip) {
      ...userFragment
    }
  }
`;
