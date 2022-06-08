import { graphql } from "gatsby"
import React from "react"
import "react-h5-audio-player/lib/styles.css"
import AdBanner from "../components/adBanner"
import AudioPlayerSlim from "../components/AudioPlayerSlim"
import BrandChanel from "../components/brandChanel"
import Carousel from "../components/carousel"
import Layout from "../components/layout"
import SmallBanner from "./../components/SmallBanner"

const firstCarousel = [
  {
    title: "Universal Music",
    path: "/channel/umg",
  },
  {
    title: "Shongololo",
    path: "/channel/umg",
  },
  {
    title: "Spin & Win",
    path: "/channel/umg",
  },
]

const secondCarousel = [
  {
    title: "Khwela",
    path: "/channel/umg",
  },
  {
    title: "PocketFin",
    path: "/channel/umg",
  },
]

const Home = ({ data }) => {
  return (
    <Layout>
      <AdBanner type={1} />
      <div className="mx-2">
        <AudioPlayerSlim />
        <h2 className="font-bold text-xl">Entertainment</h2>
        <BrandChanel />
        <Carousel
          content={firstCarousel.map(y => ({
            image: data.allFile.nodes.find(x => x.name === y.title),
            ...y,
          }))}
        />
      </div>
      <SmallBanner />
      <div className="mx-2">
        <h2 className="font-bold text-xl">Resources</h2>
        <Carousel
          content={secondCarousel.map(y => ({
            image: data.allFile.nodes.find(x => x.name === y.title),
            ...y,
          }))}
        />
      </div>
      <p className="text-center font-semibold">Sign Out</p>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFile(filter: { relativeDirectory: { eq: "home" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default Home
