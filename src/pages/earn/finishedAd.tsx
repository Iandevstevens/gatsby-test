import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useContext, useEffect } from "react"
import { NumberParam, useQueryParam } from "use-query-params"
import AdBanner from "../../components/adBanner"
import { UserStateContext } from "../../components/Apollo"
import Layout from "../../components/layout"

const FinishedAd = () => {
  const [amount] = useQueryParam("amount", NumberParam)
  const { userSb } = useContext(UserStateContext)
  return (
    <Layout>
      <div className="max-w-md w-screen h-screen bg-black text-center fixed overflow-hidden">
        <p
          className="top-8 text-3xl font-bold relative"
          style={{ color: "#E2AF45" }}
        >
          CONGRATULATIONS!
        </p>
        <div className="font-bold text-white relative top-10 flex justify-center">
          <p>You have earned {amount}</p>
          <div className="px-1">
            <StaticImage
              src="../../images/Sebenza_Bucks_Coin.png"
              alt="sebenza bucks"
              height={30}
            />
          </div>
        </div>
        <div className="text-right relative top-6">
          <StaticImage
            src="../../images/earn/Confetti_Cone.png"
            alt="sebenza bucks"
            height={230}
          />
        </div>

        <div className="relative -my-12">
          <div className="font-semibold text-white flex justify-center align-center">
            <p> Earn more</p>
            <div className="px-1">
              <StaticImage
                src="../../images/Sebenza_Bucks_Coin.png"
                alt="sebenza bucks"
                height={30}
              />
            </div>
          </div>
          <div className="flex justify-center align-center mb-0">
            <Link
              to="/earn/ad"
              className="flex justify-center items-center bg-yellow-400 w-2/4 h-9 font-bold rounded-md z-10"
            >
              Watch another ad
            </Link>
          </div>
          <Link
            to="/wifi-access"
            className="relative flex justify-center align-center items-center z-10"
          >
            <div
              className={
                userSb < 50
                  ? "bg-gray-300 font-bold w-2/4 my-1 h-9 rounded-md flex justify-center items-center"
                  : "bg-yellow-400 font-bold w-2/4 my-1 h-9 rounded-md relative flex justify-center items-center"
              }
            >
              <span>Use 50</span>
              <StaticImage
                src="../../images/Sebenza_Bucks_Coin.png"
                alt="sebenza bucks"
                height={30}
              />
              <span className="mx-1">for</span>
              <StaticImage
                src="../../images/wifisvg.svg"
                alt="sebenza bucks"
                height={30}
              />
            </div>
          </Link>
        </div>
        <div className="py-16">
          <AdBanner type={0} />
        </div>
        <div className="text-left relative">
          <StaticImage
            src="../../images/earn/Confetti_Gold.png"
            alt="sebenza bucks"
            height={190}
          />
        </div>
      </div>
    </Layout>
  )
}

export default FinishedAd
