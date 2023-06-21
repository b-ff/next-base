import { useContext } from "react"
import { ApolloClientContext } from "../contexts/ApolloClientContext"

export const useApolloClient = () => {
  return useContext(ApolloClientContext)
}
