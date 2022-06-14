import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ad = ({ pageContext }) => {
  console.log(pageContext)
  const imageP = getImage(pageContext.ad.adImage)
  return <GatsbyImage className="rounded-lg" image={imageP} alt="test" />
}

export default ad
