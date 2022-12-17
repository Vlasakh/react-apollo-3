import { gql } from '@apollo/client';

export const RUN_CMD = gql`
  mutation RunCmd {
    value: runCmd {
      body
    }
  }
`;
