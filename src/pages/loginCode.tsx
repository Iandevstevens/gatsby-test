import React, { useEffect } from "react"
import { useQueryParam, StringParam } from "use-query-params"
import { useQuery } from "@apollo/client"
import { GET_SESSION } from "../graphql/session"
import { navigate } from "gatsby"
import { recordSmsClicked } from "../analytics/smsClickedLog"

const Login = () => {
  const [code] = useQueryParam("code", StringParam)
  const { data, loading, error } = useQuery(GET_SESSION, {
    fetchPolicy: "network-only",
    variables: {
      id: code,
    },
  })

  useEffect(() => {
    recordSmsClicked()
  }, [])

  useEffect(() => {
    if (data) {
      navigate("/home")
    }
  }, [data])

  return <div>{code}</div>
}

export default Login
