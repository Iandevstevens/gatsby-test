import { useQuery, useMutation } from "@apollo/client"
import { navigate } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../../components/layout"
import { GET_USER_LAST, UPDATE_USER } from "../../graphql/user"
import useUpdateSB from "./../../hooks/updateSB"

const checkDay = (date: Date) => {
  if (date === undefined || date === null) {
    return false
  }
  const today = new Date()
  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return true
  }
  return false
}

const SpinWin = () => {
  const { giveSB } = useUpdateSB("spin-win", "/home")
  const [
    updateUser,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_USER)
  const { data: userData, loading, error } = useQuery(GET_USER_LAST)
  useEffect(() => {
    const handleWon = (event: any) => {
      const { origin, data } = event
      if (origin === "http://localhost:5500") {
        if (data.status === "won") {
          updateUser({
            variables: {
              input: {
                lastSpinWin: new Date(),
              },
            },
          })
        } else if (data.status === "redeem") {
          giveSB(+data.detail)
        } else if (data.status === "no") {
          navigate("/home")
        }
      }
    }
    window.addEventListener("message", handleWon)
    return () => {
      window.removeEventListener("message", handleWon)
    }
  }, [])

  useEffect(() => {
    if (userData) {
      if (checkDay(new Date(userData.getUser.lastSpinWin))) {
        navigate("/spin-win/tomorrow")
      }
    }
  }, [userData])

  return (
    <Layout>
      <iframe
        id="Iframe"
        src="http://localhost:5500"
        frameBorder="0"
        className="h-screen w-screen"
      ></iframe>
    </Layout>
  )
}

export default SpinWin
