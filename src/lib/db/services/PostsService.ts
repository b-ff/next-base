import { Post, posts } from "@/schema"
import { db } from "../connection";
import { eq } from "drizzle-orm";

export const PostsService = {
  getPosts: async (): Promise<Post[]> => {
    const result = await db.select().from(posts)
    return result
  },
  getPostById: async (id: number): Promise<Post | null> => {
    const [result] = await db.select().from(posts).where(eq(posts.id, id))
    return result ?? null
  },
  create: async (values: Omit<Post, "id">): Promise<Post> => {
    const [result] = await db.insert(posts).values(values).returning();
    return result
  },
  delete: async (id: number): Promise<void> => {
    await db.delete(posts).where(eq(posts.id, id))
  },
}