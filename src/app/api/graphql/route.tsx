import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { resolvers, typeDefs } from "@/graphql";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (_req, _res) => {
    const session = await getServerSession(authOptions);
    return { session };
  },
});

export const GET = handler;
export const POST = handler;
