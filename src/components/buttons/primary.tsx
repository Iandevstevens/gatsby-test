import React from "react"

const Primary = () => {
  return (
    <div className="flex flex-col items-center m-1 pt-2">
      <p className="mb-2">Not enough Sebenza Bucks</p>
      <div
        onClick={() => router.push("/earnsb")}
        className="flex rounded mx-1 py-1 px-3 justify-center font-bold shadow-md bg-gray"
      >
        <p>Earn</p>
        <div className="w-7 p-1">
          <Image
            src={SB}
            alt={"SB Equal Image"}
            width={"100%"}
            height={90}
            layout={"responsive"}
          />
        </div>
        <p>now</p>
      </div>
    </div>
  )
}

export default Primary
