import React from "react"

interface IProps {
  header: string
  subheader: string
}

const PageHeader = ({ header, subheader }: IProps) => {
  return (
    <div className="container px-2 inline-block leading-5">
      <p className="font-bold text-lg -my-1">{header}</p>
      <p className={`font-semibold`}>{subheader}</p>
    </div>
  )
}

export default PageHeader
