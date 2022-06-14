import React, { useEffect, useState } from "react"

const AdBanner = ({ name }: { name?: string }) => {
  const [imgURL, setImgURL] = useState("")
  useEffect(() => {
    const test = async () => {
      const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
      setImgURL((await res.json()).message)
    }
    test()
  }, [])
  return (
    <>
      {imgURL !== "" && (
        <img
          style={{
            width: "100%",
            borderRadius: "var(--border-radius)",
            marginBottom: "14px",
          }}
          alt="A random dog"
          src={imgURL}
        />
      )}
      {!!name && (
        <div className="flex mb-4 mt-2">
          <p className="font-bold mx-1 bg-primary w-8 text-center rounded">
            Ad
          </p>
          <p>test</p>
        </div>
      )}
    </>
  )
}

export default AdBanner
