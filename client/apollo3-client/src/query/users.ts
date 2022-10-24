import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query Users {
    getAllUsers {
      id
      name
      username
      email
      address
      company
    }
  }
`;
