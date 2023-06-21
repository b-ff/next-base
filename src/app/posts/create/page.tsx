import { authOptions } from "@/auth";
import { App } from "@/components/App";
import { Flex } from "@/components/Flex";
import { Layout } from "@/components/Layout";
import { ApiRoutes } from "@/enums/ApiRoutes";
import { PostForm } from "@/components/PostForm";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  // console.log(133, session);

  if (!session) {
    redirect(`${ApiRoutes.AuthSignIn}?callbackUrl=/profile`);
  }

  return (
    <App>
      <Layout>
        <Flex padding={6} gap={6}>
          <h1>Create post</h1>
          <PostForm />
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
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
