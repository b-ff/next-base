import { App } from "@/components/App";
import { Flex } from "@/components/Flex";
import { Layout } from "@/components/Layout";
import { PostsPage } from "@/features/graphql-demo/components/PostsPage";
import { ApolloClientProvider } from "@/features/graphql-demo/containers/ApolloClientProvider";
import Link from "next/link";

export default function Home() {
  return (
    <App>
      <Layout>
        <Flex padding={6} gap={6}>
          <h1>Posts :: GraphQL client demo.</h1>
          <ApolloClientProvider>
            <PostsPage />
          </ApolloClientProvider>
          <ul>
            <li>
              <Link href="/api/graphql">Apollo Studio</Link>
            </li>
            <li>
              <Link href="/posts">Posts (non-GraphQL)</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </Flex>
      </Layout>
    </App>
  );
}
