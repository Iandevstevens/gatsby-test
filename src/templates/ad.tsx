import React, { useContext, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { navigate } from "gatsby"
import { UPDATE_USER } from "../graphql/user"
import { useMutation } from "@apollo/client"
import { UserStateContext } from "../components/Apollo"

type Props = {
  remainingTime: number
}
const renderTime = (props: Props) => {
  const { remainingTime } = props
  return (
    <div className="timer">
      <div className="value text-xs text-white">{remainingTime}</div>
    </div>
  )
}

const ad = ({ pageContext }) => {
  const { setUserSb } = useContext(UserStateContext)
  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER)
  const imageP = getImage(pageContext.ad.image)
  const finishedAd = () => {
    updateUser({
      variables: {
        input: {
          sebenzaBucks: 10,
        },
      },
    })
  }

  useEffect(() => {
    if (data) {
      setUserSb(data.updateUser.sebenzaBucks)
      navigate("/earn/finishedAd?adId=1&amount=10")
    }
  }, [data])

  return (
    <>
      <GatsbyImage className="rounded-lg" image={imageP} alt="test" />
      <div className="bottom-0 fixed bg-black w-full  max-w-md py-2 flex content-center justify-center text-sm text-white">
        <p>You're getting 10</p>
        <div className="pr-1">
          {/* <Image id="coin" alt="coin" src={Coin} width={25} height={25} /> */}
        </div>
        <p>for watching</p>
        <div className="timer-wrapper mx-3 my-0 pl-1">
          <CountdownCircleTimer
            size={30}
            strokeWidth={3}
            isPlaying
            duration={2}
            colors="#E2AF49"
            onComplete={finishedAd}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      </div>
    </>
  )
}

export default ad
