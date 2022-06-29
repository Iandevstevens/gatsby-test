import React from "react"
import BottomNav from "./bottomNav"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="mb-24"></div>
      <BottomNav />
    </>
  )
}

export default Layout
