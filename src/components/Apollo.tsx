import React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: `${"http://localhost:4000"}/graphql`,
  cache: new InMemoryCache(),
  credentials: "include",
})

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
