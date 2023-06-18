import { App } from "@/components/App";
import { Flex } from "@/components/Flex";
import { Layout } from "@/components/Layout";
import { Post } from "@/features/posts/components/Post";
import { Posts } from "@/features/posts/components/Posts";
import { PostsService, db } from "@/lib/db";
import Link from "next/link";
import { useParams } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
  const { id } = params;

  const post = await PostsService.getPostById(parseInt(id));

  return post ? (
    <App>
      <Layout>
        <Flex padding={6} gap={6}>
          <h1>Post</h1>
          <Post post={post} />
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/posts/create">Create another post</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
          {/* <Posts /> */}
        </Flex>
      </Layout>
    </App>
  ) : (
    <h1>Post not found!</h1>
  );
}
