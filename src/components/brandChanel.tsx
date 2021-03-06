import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const BrandChanel = () => {
  const query = graphql`
    query brandQuery {
      allContentfulBrandChanel {
        nodes {
          image {
            gatsbyImageData(width: 125)
          }
          id
          path
        }
      }
    }
  `
  const { allContentfulBrandChanel } = useStaticQuery(query)
  return (
    <>
      <div className="overflow-x-scroll mb-1">
        <div className="flex w-max my-1">
          {allContentfulBrandChanel.nodes.map(item => (
            <div key={item.id} className="pr-1">
              <Link to={item.path}>
                <GatsbyImage
                  className="rounded-lg"
                  image={item.image.gatsbyImageData}
                  alt="test"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BrandChanel
