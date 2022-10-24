import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './userFragment';

export const GET_SUGGESTION_USERS = gql`
  ${USER_FRAGMENT}

  query GetSuggestionUsers {
    values: getSuggestionUsers {
      ...userFragment
    }
  }
`;
