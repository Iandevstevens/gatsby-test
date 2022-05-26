import React from "react"
import "react-h5-audio-player/lib/styles.css"
import AdBanner from "../components/adBanner"
import AudioPlayerSlim from "../components/AudioPlayerSlim"
import BrandChanel from "../components/brandChanel"
import Carousel from "../components/carousel"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SmallBanner from "./../components/SmallBanner"

const PageComponents = {
  musicPlayer: () => <AudioPlayerSlim />,
  h1: content => <h2 className="font-bold text-xl mx-2">{content}</h2>,
  p: content => <p className="text-gray-900 text-sm">{content}</p>,
  brandChanel: () => <BrandChanel />,
  carousel: content => <Carousel content={content} />,
  smallAd: () => <SmallBanner />,
}

const Home = ({ data }: any) => {
  const pageComponentsList = data.contentfulPage.content.map(content => {
    const { id, internal } = content
    return { id, ...JSON.parse(internal.content) }
  })
  return (
    <Layout>
      <AdBanner type={1} />
      <div className="mx-2">
        <AudioPlayerSlim />
        <h2 className="font-bold text-xl">Entertainment</h2>
        <BrandChanel />
        <Carousel content />
      </div>
      <SmallBanner />
      <div className="mx-2">
        <h2 className="font-bold text-xl">Resources</h2>
        <Carousel content />
      </div>
      <p className="text-center font-semibold">Sign Out</p>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery {
    contentfulPage(pageName: { eq: "Home" }) {
      content {
        internal {
          content
        }
        id
      }
    }
  }
`

export default Home
