import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Carousel from "./carousel"

const Carousel1 = () => {
  const query = graphql`
    query carList1 {
      contentfulCardList(listId: { eq: "homeCarousel1" }) {
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

export default Carousel1
