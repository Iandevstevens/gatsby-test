import { gql } from "@apollo/client/core"

export const GET_USER = gql`
  query Query {
    getUser {
      _id
      sebenzaBucks
    }
  }
`

export const GET_USER_CURRENT = gql`
  query Query {
    getUser {
      currentQuestion
    }
  }
`

export const GET_USER_LAST = gql`
  query Query {
    getUser {
      lastSpinWin
    }
  }
`

export const POST_USER = gql`
  mutation Mutation($input: UpsertUserInput!) {
    upsertUser(input: $input) {
      _id
      sebenzaBucks
      isNewUser
    }
  }
`

export const UPDATE_USER = gql`
  mutation Mutation($input: UpsertUserInput!) {
    updateUser(input: $input) {
      sebenzaBucks
    }
  }
`

export const LOGOUT = gql`
  query Query {
    logOUtUser
  }
`

export const USER_SESSION = gql`
  query Query {
    test
  }
`
