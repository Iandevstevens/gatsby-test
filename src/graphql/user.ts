import { gql } from "@apollo/client/core"

export const POST_USER = gql`
  mutation Mutation($input: UpsertUserInput!) {
    upsertUser(input: $input)
  }
`

export const USER_SESSION = gql`
  query Query {
    test
  }
`
