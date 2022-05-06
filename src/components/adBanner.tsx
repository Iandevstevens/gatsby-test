import React from "react"

const AdBanner = ({ type }: { type: number }) => {
  //get Ad

  return (
    <>
      <img
        className="w-full mb-2"
        alt="A random dog"
        src="https://sebenza.s3.af-south-1.amazonaws.com/dev/images/ads/medium/Khwela_Medium_Banner_v1.png"
      />
      <div className="flex mb-4">
        <p className="font-bold mx-1 bg-primary w-8 text-center rounded">Ad</p>
        <p>test</p>
      </div>
    </>
  )
}

export default AdBanner
