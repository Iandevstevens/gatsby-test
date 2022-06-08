import React from "react"
import Card from "../../components/Card"
import Layout from "../../components/layout"
import PageHeader from "./../../components/PageHeader"

const Earn = () => {
  return (
    <Layout>
      <PageHeader
        header="Get Sebenza Bucks"
        subheader="Start earning and surf the web"
      />
      <div className="mx-2">
        <Card
          title="Surveys"
          sbAmount={5}
          image="../images/Pocketfin_Channel_Card_v1.png"
        />
        {/* <Card title="Surveys" sbAmount={5} />
        <Card title="Surveys" sbAmount={5} /> */}
      </div>
    </Layout>
  )
}

export default Earn
