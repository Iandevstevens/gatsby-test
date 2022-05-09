import React from "react"
import "react-h5-audio-player/lib/styles.css"
import AdBanner from "../components/adBanner"
import AudioPlayerSlim from "../components/AudioPlayerSlim"
import BrandChanel from "../components/brandChanel"
import Carousel from "../components/carousel"
import Layout from "../components/layout"

const pageComponentsList = [
  { type: "bigAd" },
  { type: "musicPlayer" },
  { type: "h1", content: "Entertainment" },
  { type: "brandChanel" },
  {
    type: "carousel",
    content: ["Shongololo", "Universal music", "Spin & win"],
  },
  { type: "h1", content: "Checkout our free content" },
  { type: "p", content: "News, Gaming, Education, Resources and More" },
  {
    type: "smallAd",
  },
  {
    type: "carousel",
    content: ["Shongololo", "Universal music", "Spin & win"],
    subheading: "News, Gaming, Education, Resources and More",
  },
]

const PageComponents = {
  bigAd: <AdBanner type={1} />,
  musicPlayer: <AudioPlayerSlim />,
  h1: content => {
    return <h2 className="font-bold text-xl">{content}</h2>
  },
  p: content => {
    return <p className="text-gray-900 text-sm">{content}</p>
  },
  brandChanel: <BrandChanel />,
  carousel: content => <Carousel content={content} />,
  smallAd: <AdBanner type={0} />,
}

const Home = () => {
  return (
    <Layout>
      <div className="test-variable h-8 w-8"></div>
      {pageComponentsList.map(x => {
        switch (x.type) {
          case "h1":
            return PageComponents[x.type](x.content)
          case "p":
            return PageComponents[x.type](x.content)
          case "carousel":
            return PageComponents[x.type](x.content)
          default:
            return PageComponents[x.type]
        }
      })}
    </Layout>
  )
}

export default Home
