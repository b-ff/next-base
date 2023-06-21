import { PostsService, UsersService, db } from "@/lib/db";
import { Post } from "@/schema";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "./schema.graphql";

const resolvers = {
  Query: {
    post: async (_parent: unknown, args: { id: string }) => {
      return await PostsService.getPostById(parseInt(args.id));
    },
    posts: async () => {
      return await PostsService.getPosts();
    },
  },
  Post: {
    author: async (parent: Post) => {
      return await UsersService.getUserById(parent.userId);
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export const GET = handler;
export const POST = handler;
