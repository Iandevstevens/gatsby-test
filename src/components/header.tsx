import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Header = () => {
  return (
    <div className="p-3 flex flex-row items-center justify-between">
      <Link to="/home">
        <StaticImage src="src/images/SebenzaLog.svg" alt="logo" height={24} />
      </Link>
      <Link to="/earnsb">
        <div className="mr-1">
          <div className="flex items-center rounded-xl h-6 bg-primary">
            <p className="font-bold pl-2">100</p>
            <div className="rounded-full p-0.5 bg-primary">
              <StaticImage
                src="../images/Sebenza_Bucks_Coin.png"
                alt="sebenza bucks"
                height={32}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Header
