import { navigate } from "gatsby"
import React, { useEffect } from "react"

const Ad = () => {
  useEffect(() => {
    navigate("/earn/ad/UMG")
  }, [])
  return <div>test</div>
}

export default Ad
