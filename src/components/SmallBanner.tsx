import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const SmallBanner = () => {
  const query = graphql`
    query smallAdQuery {
      contentfulAd(adId: { eq: "KhwelaSmall" }) {
        adImage {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `
  const { contentfulAd } = useStaticQuery(query)

  return (
    <GatsbyImage
      image={contentfulAd.adImage.gatsbyImageData}
      alt="test"
      className="mb-4"
    />
  )
}

export default SmallBanner
