import { useLazyQuery } from "@apollo/client"
import { useContext, useEffect } from "react"
import { UserStateContext } from "../components/Apollo"
import { GET_USER } from "../graphql/user"

const useAutoLogin = () => {
  const { userSb, setUserSb } = useContext(UserStateContext)
  const [getUser, { data, loading, error }] = useLazyQuery(GET_USER)

  useEffect(() => {
    if (userSb === undefined) {
      getUser()
    }
  }, [])

  useEffect(() => {
    if (data?.getUser?.sebenzaBucks) {
      setUserSb(data.getUser.sebenzaBucks)
    }
  }, [data])

  return { error, data, userSb }
}

export default useAutoLogin
