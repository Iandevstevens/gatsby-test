import { graphql } from "gatsby"
import React from "react"
import Card from "../../components/Card"
import Layout from "../../components/layout"
import PageHeader from "./../../components/PageHeader"

const Earn = ({ data }) => {
  return (
    <Layout>
      <PageHeader
        header="Get Sebenza Bucks"
        subheader="Start earning and surf the web"
      />
      <div className="mx-2">
        {data.contentfulCardList.cardList.map(x => (
          <div key={x.id} className="mb-2">
            <Card title={x.heading} sbAmount={x.sebenzaBucks} image={x.image} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query EarnQuery {
    contentfulCardList(listId: { eq: "earnPage" }) {
      cardList {
        heading
        id
        path
        sebenzaBucks
        image {
          gatsbyImageData
        }
      }
    }
  }
`

export default Earn
