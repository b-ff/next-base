import { App } from "@/components/App";
import { Flex } from "@/components/Flex";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <App>
      <Layout>
        <Flex padding={6} gap={6}>
          <h1>Let it be index page!</h1>
          <p>Here will be content of index page</p>
        </Flex>
      </Layout>
    </App>
  );
}
