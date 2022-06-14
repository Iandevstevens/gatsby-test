import React, { useState, createContext } from "react"
import BottomNav from "./bottomNav"
import Header from "./header"

export const UserStateContext: any = createContext({})

const Layout = ({ children }) => {
  const [user, setUser] = useState({ sb: 30 })
  return (
    <UserStateContext.Provider value={user}>
      <Header />
      {children}
      <div className="mb-24"></div>
      <BottomNav />
    </UserStateContext.Provider>
  )
}

export default Layout
