import { useMutation } from "@apollo/client"
import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { StringParam, useQueryParam } from "use-query-params"
import LoginForm from "../components/loginForm"
import { POST_USER } from "../graphql/user"
import useAutoLogin from "../hooks/autoLogin"
import { __regexPhoneNumber__ } from "../util/regex"

const LogIn = () => {
  const [utm_medium] = useQueryParam("utm_medium", StringParam)
  const [sessionid] = useQueryParam("sessionid", StringParam)
  const [postUser, { data, loading, error }] = useMutation(POST_USER)
  const { userSb } = useAutoLogin()

  useEffect(() => {
    if (data) {
      navigate("/home")
    }
  }, [data])

  useEffect(() => {
    if (userSb !== undefined) {
      navigate("/home")
    }
  }, [userSb])

  const onSubmit = data => {
    postUser({
      variables: {
        input: {
          id: data.phoneNumber,
          isAbove18: true,
          ssid: utm_medium,
          sessionID: sessionid,
        },
      },
    })
  }

  return <LoginForm onSubmit={onSubmit} />
}

export default LogIn
