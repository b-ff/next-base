import { PostsService, UsersService } from "@/lib/db";
import { Post } from "@/schema";
import { asyncMapDatesToString } from "@/utils";
import { SessionWithUserId } from "@/auth";

export const resolvers = {
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
  Mutation: {
    post: async (
      _parent: unknown,
      args: Pick<Post, "title" | "body">,
      context: { session: SessionWithUserId | null }
    ) => {
      const userId = context.session?.user?.id;
      const { title, body } = args;
      const date = new Date().toISOString();

      if (!userId || !title || !body) {
        return null;
      }

      const post = {
        title,
        body,
        userId,
        createdAt: date,
        updatedAt: date,
      };

      return await asyncMapDatesToString(PostsService.create(post));
    },
  },
};