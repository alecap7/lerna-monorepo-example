import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Books from "./components/Books";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Books />
    </ApolloProvider>
  );
}

export default App;
