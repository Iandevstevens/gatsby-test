import Layout from "../components/layout"
import React from "react"
import PageHeader from "../components/PageHeader"
import { StaticImage } from "gatsby-plugin-image"

const WifiAccess = () => {
  const wifiBtnClicked = () => {}
  return (
    <Layout>
      <PageHeader
        header="Open Internet Access"
        subheader="Get 60mb and use it for open internet"
      />
      <StaticImage src="../images/wifiSponser.png" alt="logo" width={360} />
      <div className="flex flex-col items-center m-1 pt-2">
        <button
          onClick={wifiBtnClicked}
          className="flex rounded bg-yellow-400 mx-1 py-1 px-3 justify-center font-bold shadow-md"
        >
          <p>Use 50</p>
          <StaticImage
            src="../images/Sebenza_Bucks_Coin.png"
            alt="sebenza bucks"
            height={26}
          />
          <p>for Internet Access</p>
        </button>
      </div>
      <div className="flex flex-col items-center m-1 pt-2">
        <div className="mt-3">
          <StaticImage
            src="../images/SB_Equals_Social_Media.svg"
            alt="sebenza bucks"
            height={48}
          />
        </div>
      </div>
      <p className="text-center font-medium">Wi-Fi sponsored by:</p>
      <div className="my-2">
        <StaticImage
          src="../images/Hisense_WiFi_Small_Banner_2.png"
          alt="sebenza bucks"
          height={99}
        />
      </div>
    </Layout>
  )
}

export default WifiAccess
