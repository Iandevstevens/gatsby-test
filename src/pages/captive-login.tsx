import { useMutation } from "@apollo/client"
import { navigate } from "gatsby"

import React, { useContext, useEffect } from "react"
import { StringParam, useQueryParam } from "use-query-params"
import { recordLogin } from "../analytics/logingLog"
import { recordSms } from "../analytics/smsLog"
import { UserStateContext } from "../components/Apollo"
import LoginForm from "../components/loginForm"
import { CREATE_SESSION } from "../graphql/session"
import { POST_USER } from "../graphql/user"
import useAutoLogin from "../hooks/autoLogin"
import { __regexPhoneNumber__ } from "../util/regex"

export const isIphone = () => {
  return (
    navigator.userAgent.includes("iPhone") &&
    navigator.userAgent.includes("Mobile")
  )
}

const CaptiveLogIn = () => {
  const { setUserSb } = useContext(UserStateContext)
  const [utm_medium] = useQueryParam("utm_medium", StringParam)
  const [sessionid] = useQueryParam("sessionid", StringParam)
  const [postUser, { data, loading, error }] = useMutation(POST_USER)
  const { data: autoData } = useAutoLogin()
  const [createSession, { data: sessionData }] = useMutation(CREATE_SESSION)

  useEffect(() => {
    if (sessionData?.createSession) {
      recordSms(sessionData?.createSession)
    }
  }, [sessionData])

  useEffect(() => {
    if (autoData?.getUser?.sebenzaBucks) {
      loggedIn(true, false)
    }
  }, [autoData])

  useEffect(() => {
    if (data?.upsertUser?.sebenzaBucks) {
      setUserSb(data?.upsertUser?.sebenzaBucks)
      loggedIn(false, data.upsertUser.isNewUser)
    }
  }, [data])

  const loggedIn = (auto: boolean, isNewUser: boolean) => {
    recordLogin(auto, isNewUser, true)
    if (isIphone()) {
      navigate("/home")
    } else {
      createSession()
    }
  }

  const onSubmit = data => {
    postUser({
      variables: {
        input: {
          id: data.phoneNumber,
          isAbove18: true,
          ssid: utm_medium,
          sessionID: sessionid,
          shouldSendSMS: true,
        },
      },
    })
  }

  return (
    <LoginForm
      onSubmit={onSubmit}
      postedPhoneNumber={autoData?.getUser?._id || data?.upsertUser?._id}
    />
  )
}

export default CaptiveLogIn
