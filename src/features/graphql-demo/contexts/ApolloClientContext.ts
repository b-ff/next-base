import { createContext } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const ApolloClientContext = createContext<ApolloClient<unknown> | null>(null)
