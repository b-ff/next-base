import { App } from "@/components/App";
import { Flex } from "@/components/Flex";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <App>
      <Layout>
        <Flex padding={6} gap={6}>
          <h1>Let be the index page!</h1>
          <p>Hello, dear fellow!</p>
          <p>
            Shall not take be taken a lot of your time — this, is the future!
            <br />
            Here you shall see the possibilities of Next.js along with NextAuth
            and drizzle of PostgreSQL integration.
            <br /> With a bit of touch of your genius you shall be able to add
            i18n and your own BFF (backend for frontend) API.
            <br />
            Though, if you way to tired of those backend developers who cannot
            setup their own Swagger or follow the REST guidelines —<br /> you,
            my dear fellow could make your own complete API and neglect those
            practices yourself.
          </p>
          <p>Shall we begin?</p>
          <ul>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </Flex>
      </Layout>
    </App>
  );
}
