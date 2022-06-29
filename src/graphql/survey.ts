import { gql } from "@apollo/client/core"

export const GET_NEXT_SURVEY = gql`
  query Query($surveyID: String!) {
    getNextSurveyID(surveyID: $surveyID)
  }
`
