import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const BrandChanel = () => {
  const data = [
    {
      key: 1,
      src: "../images/Absa_Shongololo_Game_Logo_Card_v1.png",
      path: "/game/shongololo?id=0",
    },
    {
      key: 2,
      src: "../images/Absa_Shongololo_Game_Logo_Card_v1.png",
      path: "/channel/umg",
    },
    {
      key: 3,
      src: "../images/Absa_Shongololo_Game_Logo_Card_v1.png",
      path: "/channel/pocketfin",
    },
    {
      key: 4,
      src: "../images/Absa_Shongololo_Game_Logo_Card_v1.png",
      path: "/channel/khwela",
    },
  ]

  const test = "../images/Absa_Shongololo_Game_Logo_Card_v1.png"
  return (
    <>
      <div className="overflow-x-scroll">
        <div className="flex w-max">
          {data.map(item => (
            <div key={item.key} className="pr-1">
              <Link to="/home">
                <StaticImage
                  className="rounded-lg"
                  src={test}
                  alt="sebenza bucks"
                  width={125}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BrandChanel
