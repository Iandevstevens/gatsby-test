import React, { Children } from "react"
import BottomNav from "./bottomNav"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <BottomNav />
    </>
  )
}

export default Layout
