import React from "react"
import { useQueryParam, StringParam } from "use-query-params"
import { useMutation, useQuery } from "@apollo/client"
import { GET_SESSION } from "../graphql/session"

const Login = () => {
  const [code] = useQueryParam("code", StringParam)
  console.log("code", code)
  const { data, loading, error } = useQuery(GET_SESSION, {
    fetchPolicy: "network-only",
    variables: {
      id: code,
    },
  })
  return <div>{code}</div>
}

export default Login
