import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { recordAdWatched } from "../analytics/adWatchedLog"
import { GET_BANNER_AD } from "../graphql/ad"

const AdBanner = ({ type }: { type: number }) => {
  const { data, loading, error } = useQuery(GET_BANNER_AD, {
    fetchPolicy: "network-only",
    variables: {
      type: type,
    },
  })

  useEffect(() => {
    if (data?.getBannerAd?.adID) {
      recordAdWatched(data?.getBannerAd?.adID)
    }
  }, [data])
  return (
    <>
      {data?.getBannerAd?.imageURL && (
        <img
          style={{
            width: "100%",
            borderRadius: "var(--border-radius)",
            marginBottom: "14px",
          }}
          alt="A random dog"
          src={data?.getBannerAd?.imageURL}
        />
      )}
      {/* {!!name && (
        <div className="flex mb-4 mt-2">
          <p className="font-bold mx-1 bg-primary w-8 text-center rounded">
            Ad
          </p>
          <p>test</p>
        </div>
      )} */}
    </>
  )
}

export default AdBanner
