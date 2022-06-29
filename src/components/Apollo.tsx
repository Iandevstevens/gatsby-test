import React, { createContext, useMemo, useState } from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const { API_URL } = process.env

const client = new ApolloClient({
  uri: `${process.env.API_URL}/graphql`,
  cache: new InMemoryCache(),
  credentials: "include",
})

export const UserStateContext: any = createContext({
  userSb: 0,
  setUserSb: () => {},
})

const Context = ({ children }) => {
  const [userSb, setUserSb] = useState()
  const value = useMemo(() => ({ userSb, setUserSb }), [userSb])

  return (
    <UserStateContext.Provider value={value}>
      {children}
    </UserStateContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <Context>{element}</Context>
    </ApolloProvider>
  )
}
