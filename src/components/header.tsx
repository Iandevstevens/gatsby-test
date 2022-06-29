import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import SebenzaBucks from "./SebenzaBucks"
import useAutoLogin from "./../hooks/autoLogin"

const Header = () => {
  const { error, userSb } = useAutoLogin()

  useEffect(() => {
    if (error) {
      // navigate("/")
    }
  }, [error])

  return (
    <div className="p-3 flex flex-row items-center justify-between">
      <Link to="/home">
        <StaticImage src="../images/SebenzaLog.svg" alt="logo" height={24} />
      </Link>
      <Link to="/earn">
        <SebenzaBucks amount={userSb || 0} color="bg-primary" />
      </Link>
    </div>
  )
}

export default Header
