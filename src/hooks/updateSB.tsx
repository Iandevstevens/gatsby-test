import { useMutation } from "@apollo/client"
import { navigate } from "gatsby"
import { useContext, useEffect } from "react"
import { recordSebenzaBucks } from "../analytics/sebenzaBucks"
import { UserStateContext } from "../components/Apollo"
import { UPDATE_USER } from "../graphql/user"

const useUpdateSB = (reason: string, link?: string) => {
  const { userSb, setUserSb } = useContext(UserStateContext)
  const [
    updateUser,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_USER)

  const giveSB = (amount: number) => {
    updateUser({
      variables: {
        input: {
          sebenzaBucks: amount,
        },
      },
    })
  }

  useEffect(() => {
    if (updateData?.updateUser?.sebenzaBucks) {
      const { sebenzaBucks } = updateData.updateUser
      recordSebenzaBucks(reason, sebenzaBucks - userSb)
      setUserSb(updateData?.updateUser?.sebenzaBucks)
      if (link) {
        navigate(link)
      }
    }
  }, [updateData])

  return { giveSB }
}

export default useUpdateSB
