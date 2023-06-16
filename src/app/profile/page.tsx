import { authOptions } from "@/auth";
import { App } from "@/components/App";
import { Avatar } from "@/components/Avatar";
import { Flex } from "@/components/Flex";
import { Layout } from "@/components/Layout";
import { ApiRoutes } from "@/enums/ApiRoutes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect(`${ApiRoutes.AuthSignIn}?callbackUrl=/profile`);
  }

  return (
    <App>
      <Layout>
        <Flex padding={6} gap={6}>
          <h1>Profile</h1>
          <Flex gap={6}>
            <Avatar
              size={90}
              src={session?.user?.image ?? ""}
              name={session?.user?.name ?? ""}
            />
            <Flex gap={4}>
              <div>
                <strong>Name:</strong> {session?.user?.name}
              </div>
              <div>
                <strong>E-mail:</strong> {session?.user?.email}
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </App>
  );
}
