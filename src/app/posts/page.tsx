import { App } from "@/components/App";
import { Flex } from "@/components/Flex";
import { Layout } from "@/components/Layout";
import { Posts } from "@/features/posts/components/Posts";
import Link from "next/link";

export default function Home() {
  return (
    <App>
      <Layout>
        <Flex padding={6} gap={6}>
          <h1>Posts</h1>
          <ul>
            <li>
              <Link href="/posts/create">Create post</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
          <Posts />
        </Flex>
      </Layout>
    </App>
  );
}
