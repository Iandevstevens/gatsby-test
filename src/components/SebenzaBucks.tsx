import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const SebenzaBucks = ({ amount, color }: any) => {
  return (
    <div className="mr-1">
      <div className={`flex items-center rounded-xl h-6 ${color}`}>
        <p className="font-bold pl-2">{amount}</p>
        <div className={`rounded-full p-0.5 ${color}`}>
          <StaticImage
            src="../images/Sebenza_Bucks_Coin.png"
            alt="sebenza bucks"
            height={32}
          />
        </div>
      </div>
    </div>
  )
}

export default SebenzaBucks
