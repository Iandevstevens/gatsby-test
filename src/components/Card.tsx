import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import SebenzaBucks from "./SebenzaBucks"

const Card = ({ title, sbAmount, image, link }: any) => {
  const imageP = getImage(image)
  const onClick = () => {}
  return (
    <div className="relative" onClick={onClick}>
      <GatsbyImage className="rounded-lg" image={imageP} alt="test" />
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
          <SebenzaBucks amount={sbAmount} color="bg-white" />
        </div>
      )}
    </div>
  )
}

export default Card
