import React from "react"
import AdBanner from "../components/adBanner"
import AudioPlayerSlim from "../components/AudioPlayerSlim"
import BrandChanel from "../components/brandChanel"
import Carousel1 from "../components/carousel1"
import Carousel2 from "../components/carousel2"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <AdBanner name="Cadbury" />
      <div className="mx-2">
        <AudioPlayerSlim />
        <h2 className="font-bold text-xl">Entertainment</h2>
        <BrandChanel />
        <Carousel1 />
      </div>
      <AdBanner />
      <div className="mx-2">
        <h2 className="font-bold text-xl">Resources</h2>
        <Carousel2 />
      </div>
      <p className="text-center font-semibold">Sign Out</p>
    </Layout>
  )
}

export default Home

// export async function getServerData() {
//   try {
//     const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
//     if (!res.ok) {
//       throw new Error(`Response failed`)
//     }
//     return {
//       props: {
//         big: "https://sebenza.s3.af-south-1.amazonaws.com/dev/images/ads/medium/Cadbury_Medium_Banner.gif",
//         small:
//           "https://sebenza.s3.af-south-1.amazonaws.com/dev/images/ads/small/McD_Small_Banner_R39.jpg",
//       },
//     }
//   } catch (error) {
//     return {
//       status: 500,
//       headers: {},
//       props: {},
//     }
//   }
// }
