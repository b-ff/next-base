import { App } from "@/components/App";
import { Flex } from "@/components/Flex";
import { Layout } from "@/components/Layout";

export default async function Home() {
  return (
    <App>
      <Layout>
        <Flex padding={6} gap={6}>
          <h1>Profile</h1>
          <p>Here will be profie</p>
        </Flex>
      </Layout>
    </App>
  );
}
