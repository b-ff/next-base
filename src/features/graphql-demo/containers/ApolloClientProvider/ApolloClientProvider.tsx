"use client";
import { FC, HTMLProps } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloClientContext } from "../../contexts/ApolloClientContext";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export const ApolloClientProvider: FC<HTMLProps<HTMLElement>> = ({
  children,
}) => (
  <ApolloClientContext.Provider value={client}>
    {children}
  </ApolloClientContext.Provider>
);
