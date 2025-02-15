import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/vaasanthk/web3rsvp-subgraph2",

  cache: new InMemoryCache(),
})

export default client
