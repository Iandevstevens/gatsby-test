import { useQuery } from "@apollo/client"
import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { GET_USER_CURRENT } from "../../graphql/user"

const Survey = () => {
  const { data, loading, error } = useQuery(GET_USER_CURRENT)
  useEffect(() => {
    if (data) {
      navigate(
        `/earn/survey/${data.getUser.currentQuestion || "sebenzaProfile-1"}`
      )
    }
  }, [data])

  return <div>Survey</div>
}

export default Survey
