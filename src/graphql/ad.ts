import { gql } from "@apollo/client/core"

export const GET_BANNER_AD = gql`
  query Query($type: Float!) {
    getBannerAd(type: $type) {
      adID
      imageURL
    }
  }
`
