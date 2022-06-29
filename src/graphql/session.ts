import { gql } from "@apollo/client/core"

export const GET_SESSION = gql`
  query Query($id: String!) {
    getSession(id: $id)
  }
`

export const CREATE_SESSION = gql`
  mutation Mutation {
    createSession
  }
`
