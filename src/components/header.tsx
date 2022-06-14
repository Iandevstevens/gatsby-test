import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { UserStateContext } from "./layout"
import SebenzaBucks from "./SebenzaBucks"

const Header = () => {
  return (
    <UserStateContext.Consumer>
      {user => (
        <div className="p-3 flex flex-row items-center justify-between">
          <Link to="/home">
            <StaticImage
              src="../images/SebenzaLog.svg"
              alt="logo"
              height={24}
            />
          </Link>
          <Link to="/earnsb">
            <SebenzaBucks amount={user.sb} color="bg-primary" />
          </Link>
        </div>
      )}
    </UserStateContext.Consumer>
  )
}

export default Header
