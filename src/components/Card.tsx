import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SebenzaBucks from "./SebenzaBucks"

const Card = ({ title, sbAmount }: any) => {
  const onClick = () => {}
  return (
    <div className="relative" onClick={onClick}>
      <StaticImage
        className="rounded-lg"
        src={
          "https://sebenza.s3.af-south-1.amazonaws.com/dev/images/ads/medium/Khwela_Medium_Banner_v1.png"
        }
        alt="Surveys"
      />
      {title && (
        <p
          style={{ backgroundColor: "rgba(255,255,255,0.38)" }}
          className="absolute rounded-br-lg top-0 left-0 font-extrabold text-lg pt-2 pb-2 pl-4 pr-4 z-10"
        >
          {title}
        </p>
      )}
      {sbAmount && (
        <div className="absolute right-3 top-3">
          <SebenzaBucks sebenzaBucks={sbAmount} color="white" />
        </div>
      )}
    </div>
  )
}

export default Card
