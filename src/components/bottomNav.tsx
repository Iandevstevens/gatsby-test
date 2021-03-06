import { Link } from "gatsby"
import React from "react"

const BottomNav = () => {
  return (
    <nav className="fixed z-10 bottom-0 inset-x-0 max-w-md flex justify-around text-xs text-white rounded-t-3xl bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300">
      <Link to="/home">
        <svg
          className="h-9 w-9 mx-auto fill-current"
          x="0px"
          y="0px"
          viewBox="0 0 300 300"
          xmlSpace="preserve"
        >
          <path
            d="M150.3,71.2l62.5,56.3v97.7h-25v-75h-75v75h-25v-97.7L150.3,71.2 M150.3,37.5l-125,112.6h37.5v100.1h75v-75h25
v75h75V150.1h37.5L150.3,37.5z"
          />
        </svg>
        <label>Home</label>
      </Link>
      <div className="flex flex-col items-center">
        <Link to="/wifi-access">
          <div
            id="wifiNav"
            className="w-14 h-14 block flex items-center text-center rounded-full border-2 border-white -mt-6 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-300 border-solid"
          >
            <svg
              version="1.1"
              id="Layer_12"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-10 w-10 mx-auto fill-current`}
              x="0px"
              y="0px"
              viewBox="0 0 300 300"
              xmlSpace="preserve"
            >
              <path
                className=""
                d="M12.7,112.6l25,25c62.2-62.2,163-62.2,225.1,0l25-25C212,36.6,88.8,36.6,12.7,112.6z M112.8,212.6l37.5,37.5
l37.5-37.5C167.2,191.9,133.6,191.9,112.8,212.6z M62.8,162.6l25,25c34.5-34.5,90.5-34.5,125.1,0l25-25
C189.6,114.3,111.2,114.3,62.8,162.6z"
              />
            </svg>
          </div>
        </Link>
        <p className="text-center w-16 pb-1">Free Wi-Fi</p>
      </div>
      <Link to="/earn">
        <div
          id="getsbNav"
          className=" block p-1 text-center text-white rounded-lg"
        >
          <svg
            version="1.1"
            id="Layer_13"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-9 w-9 mx-auto fill-current p-0.5`}
            x="0px"
            y="0px"
            viewBox="77.3 484.7 400 400"
            xmlSpace="preserve"
          >
            <path
              id="XMLID_3_"
              style={{ fill: "#9A9A9A" }}
              d="M133,685.3c3.1,85.5,56.7,155.7,127.3,175.9l0.3,7.5l46.8-1.7c92.6-3.3,164.7-90,161-193.7c-3.7-103.7-81.8-185-174.4-181.7l-46.8,1.7l0.3,7.5C178.4,525.9,129.9,599.8,133,685.3z"
            />
            <path
              style={{ opacity: 0.3, fill: "#EBEBEB" }}
              d="M386.3,519.5l-182.5,6.5c-8.2,6.4-15.8,13.6-22.8,21.5l229.6-8.2C403,532,394.9,525.3,386.3,519.5z"
            />
            <path
              style={{ opacity: 0.3, fill: "#333333" }}
              d="M464.7,721.8l-324.6,11.6c4.6,17,11.3,33,19.7,47.6l288.7-10.3C455.8,755.6,461.3,739.1,464.7,721.8z"
            />
            <ellipse
              transform="matrix(-0.9994 3.566965e-02 -3.566965e-02 -0.9994 531.8718 1352.5012)"
              style={{ fill: "#9A9A9A" }}
              cx="253.9"
              cy="681"
              rx="167.8"
              ry="187.8"
            />
            <ellipse
              transform="matrix(-0.9994 3.566965e-02 -3.566965e-02 -0.9994 531.8724 1352.5012)"
              style={{ fill: "#C6C6C6" }}
              cx="253.9"
              cy="681"
              rx="164.1"
              ry="183.7"
            />
            <ellipse
              transform="matrix(-0.9994 3.566965e-02 -3.566965e-02 -0.9994 531.8724 1352.5012)"
              style={{ fill: "#9A9A9A" }}
              cx="253.9"
              cy="681"
              rx="127.3"
              ry="142.5"
            />
            <ellipse
              transform="matrix(-0.9994 3.566965e-02 -3.566965e-02 -0.9994 543.0806 1351.9008)"
              style={{ fill: "#B0B0B0" }}
              cx="259.5"
              cy="680.8"
              rx="120.3"
              ry="134.6"
            />
            <g>
              <path
                style={{ fill: "#FFFFFF" }}
                d="M252.3,645.8h-23.8v-5.4c0-5.4-1.3-10.1-3.8-14.1c-2.6-4-6.9-5.9-12.9-5.9c-3.3,0-5.9,0.6-7.9,1.9
c-2,1.2-3.7,2.8-4.9,4.7c-1.2,2-2.1,4.3-2.6,6.9s-0.7,5.2-0.7,8c0,3.3,0.1,6,0.3,8.2c0.2,2.2,0.8,4.1,1.7,5.8
c0.9,1.7,2.3,3.2,4.1,4.4c1.8,1.2,4.2,2.5,7.3,3.7l18.2,7.2c5.3,2,9.6,4.4,12.8,7.1c3.3,2.7,5.8,5.9,7.7,9.4
c1.7,3.7,2.9,8,3.5,12.7c0.6,4.7,0.9,10.1,0.9,16.2c0,7-0.7,13.5-2.1,19.5c-1.4,6-3.7,11.1-6.8,15.3c-3.3,4.3-7.5,7.8-12.8,10.3
c-5.3,2.5-11.7,3.7-19.3,3.7c-5.7,0-11.1-1-16.1-3c-5-2-9.2-4.8-12.8-8.4c-3.6-3.6-6.4-7.7-8.5-12.5c-2.1-4.7-3.1-9.9-3.1-15.5
v-8.9h23.8v7.5c0,4.4,1.3,8.3,3.8,11.8c2.6,3.5,6.9,5.2,12.9,5.2c4,0,7.2-0.6,9.4-1.7c2.2-1.2,4-2.8,5.2-5c1.2-2.2,2-4.8,2.2-7.8
c0.2-3,0.3-6.4,0.3-10.1c0-4.3-0.2-7.9-0.5-10.7c-0.3-2.8-0.9-5-1.9-6.8c-1.1-1.7-2.5-3.1-4.3-4.2c-1.8-1.1-4.2-2.2-7.1-3.5l-17-7
c-10.3-4.2-17.1-9.7-20.6-16.7c-3.5-6.9-5.2-15.6-5.2-26c0-6.2,0.9-12.1,2.6-17.7c1.7-5.6,4.3-10.4,7.7-14.4
c3.3-4,7.4-7.3,12.5-9.7c5-2.4,11.1-3.6,18.1-3.6c5.9,0,11.3,1.1,16.2,3.3c4.9,2.2,9.1,5,12.7,8.6c7.1,7.5,10.7,16,10.7,25.6V645.8
z"
              />
              <path
                style={{ fill: "#FFFFFF" }}
                d="M270.1,763.9V598h34.7c7.6,0,14.1,1.2,19.5,3.5c5.4,2.3,9.7,5.4,13.2,9.3c3.4,3.9,5.9,8.3,7.3,13.4
c1.5,5,2.2,10.3,2.2,15.7v6.1c0,4.5-0.3,8.3-1,11.4c-0.7,3.1-1.7,5.8-3.1,8.2c-2.6,4.3-6.7,8.1-12.1,11.2
c5.6,2.6,9.7,6.5,12.3,11.6c2.6,5.1,4,12.1,4,21v9.3c0,14.6-3.5,25.8-10.6,33.5c-7.1,7.8-18.4,11.6-33.9,11.6H270.1z M293.8,620.4
v45.7h10.7c7.9,0,13.2-2,16-5.9c2.7-4,4.1-9.7,4.1-17.4c0-7.5-1.5-13-4.5-16.8s-8.5-5.6-16.4-5.6H293.8z M293.8,687v53.1h10.3
c4.8,0,8.6-0.7,11.3-2.1c2.7-1.4,4.8-3.3,6.2-5.8c1.4-2.5,2.2-5.4,2.6-8.9c0.3-3.4,0.5-7.1,0.5-11.2c0-4.2-0.2-7.8-0.7-10.9
c-0.5-3.1-1.4-5.7-2.8-7.9c-1.6-2.2-3.7-3.8-6.3-4.8c-2.6-1-6.1-1.5-10.5-1.5H293.8z"
              />
            </g>
            <path
              style={{ opacity: 5.0e-2, fill: "#333333" }}
              d="M140.9,817.8l227.7-273.9c-30.6-31.8-71.5-51.1-116.1-50.7c-1.4,0-2.9,0-4.3,0.1c-71.6,2.6-131,55-152.5,126.6
c-3.2,10.8-5.6,21.9-7.1,33.5c-0.3,2.3-0.5,4.6-0.7,7c-0.3,3-0.5,6-0.6,9.1c-0.1,2.4-0.2,4.7-0.2,7.1c0,0.3,0,0.5,0,0.8
c0,3.2,0,6.4,0.1,9.7C89,738.8,109.4,785,140.9,817.8z"
            />
            <path
              style={{ opacity: 0.1, fill: "#EBEBEB" }}
              d="M367.7,544L140,818c30.6,31.9,71.6,51.2,116.2,50.8c1.4,0,2.9,0,4.3-0.1c3.4-0.1,6.7-0.4,10-0.7
c1.8-0.2,3.6-0.4,5.4-0.6c64.6-8.9,117.1-58.9,137.1-125.3c3.2-10.8,5.6-21.9,7.1-33.5c0.3-2.3,0.5-4.6,0.7-7c0.3-3,0.5-6,0.6-9.1
c0.1-2.4,0.2-4.7,0.2-7.1c0-0.3,0-0.5,0-0.8c0-3.2,0-6.4-0.1-9.7C419.7,623.2,399.3,576.9,367.7,544z"
            />
          </svg>
          <label>Earn</label>
        </div>
      </Link>
    </nav>
  )
}

export default BottomNav
