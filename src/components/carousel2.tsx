import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Carousel from "./carousel"

const Carousel2 = () => {
  const query = graphql`
    query carList2 {
      contentfulCardList(listId: { eq: "homeCarousel2" }) {
        cardList {
          heading
          id
          path
          image {
            gatsbyImageData
          }
        }
      }
    }
  `
  const { contentfulCardList } = useStaticQuery(query)
  return <Carousel content={contentfulCardList.cardList} />
}

export default Carousel2
