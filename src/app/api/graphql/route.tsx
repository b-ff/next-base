import { PostsService, UsersService, db } from "@/lib/db";
import { Post } from "@/schema";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import typeDefs from "./schema.graphql";
import { asyncMapDatesToString } from "@/utils";

const resolvers = {
  Query: {
    post: async (_parent: unknown, args: { id: string }) => {
      return await asyncMapDatesToString(
        PostsService.getPostById(parseInt(args.id))
      );
    },
    posts: async () => {
      return await asyncMapDatesToString(PostsService.getPosts());
    },
  },
  Post: {
    author: async (parent: Post) => {
      return await asyncMapDatesToString(UsersService.getUser(parent.userId));
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
