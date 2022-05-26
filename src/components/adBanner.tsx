import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AdBanner = ({ type }: { type: number }) => {
  const query = graphql`
    query adQuery {
      contentfulAd(adId: { eq: "khwelaBig" }) {
        adImage {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `
  const { contentfulAd } = useStaticQuery(query)

  return (
    <>
      <GatsbyImage image={contentfulAd.adImage.gatsbyImageData} alt="test" />
      <div className="flex mb-4 mt-2">
        <p className="font-bold mx-1 bg-primary w-8 text-center rounded">Ad</p>
        <p>test</p>
      </div>
    </>
  )
}

export default AdBanner
