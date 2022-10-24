import { gql } from '@apollo/client';

export const INIT_DB = gql`
  mutation InitDb($limit: Int) {
    values: initDb(limit: $limit) {
      id
      name
      username
      email
      address
      company
    }
  }
`;
