import React from "react"
import AdBanner from "../components/adBanner"
import Layout from "../components/layout"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import BrandChanel from "../components/brandChanel"

const pageComponentsList = [
  { type: "bigAd" },
  { type: "musicPlayer" },
  { type: "h1", content: "Entertainment" },
  { type: "brandChanel", content: "Entertainment" },
]

const PageComponents = {
  bigAd: <AdBanner type={1} />,
  musicPlayer: (
    <AudioPlayer
      autoPlay
      src="http://example.com/audio.mp3"
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  ),
  h1: content => {
    return <h2 className="font-bold text-xl">{content}</h2>
  },
  brandChanel: <BrandChanel />,
}

const pageStructure = [
  "bigAd",
  "musicPlayer",
  "brandChanel",
  "entertainmentCarasol",
  "smallAd",
  "ResourceCarasol",
  "covid",
  "signOut",
]

const Home = () => {
  return (
    <Layout>
      {pageComponentsList.map(x => {
        switch (x.type) {
          case "h1":
            return PageComponents[x.type](x.content)
          default:
            return PageComponents[x.type]
        }
      })}
    </Layout>
  )
}

export default Home
