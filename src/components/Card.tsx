import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import SebenzaBucks from "./SebenzaBucks"
import { Link } from "gatsby"

const Card = ({ title, sbAmount, image, path }: any) => {
  const imageP = getImage(image)
  return (
    <Link to={path} className="relative">
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
    </Link>
  )
}

export default Card
