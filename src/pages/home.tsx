import React, { useEffect } from "react"
import AdBanner from "../components/adBanner"
import AudioPlayerSlim from "../components/AudioPlayerSlim"
import BrandChanel from "../components/brandChanel"
import Carousel1 from "../components/carousel1"
import Carousel2 from "../components/carousel2"
import Layout from "../components/layout"
import { useLazyQuery } from "@apollo/client"
import { LOGOUT } from "../graphql/user"
import { navigate } from "gatsby"

const Home = () => {
  const [logOutAPI, { data, loading, error }] = useLazyQuery(LOGOUT)

  useEffect(() => {
    if (data) {
      navigate("/")
    }
  }, [data])

  return (
    <Layout>
      <AdBanner type={1} />
      <div className="mx-2">
        <AudioPlayerSlim />
        <h2 className="font-bold text-xl">Entertainment</h2>
        <BrandChanel />
        <Carousel1 />
      </div>
      <AdBanner type={0} />
      <div className="mx-2">
        <h2 className="font-bold text-xl">Resources</h2>
        <Carousel2 />
      </div>
      <p className="text-center font-semibold" onClick={() => logOutAPI()}>
        Sign Out
      </p>
    </Layout>
  )
}

export default Home
