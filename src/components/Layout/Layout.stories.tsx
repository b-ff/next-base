import type { Meta, StoryObj } from "@storybook/react";

import { Layout } from "./Layout";
import { SessionContext, SessionContextValue } from "next-auth/react";

const meta: Meta<typeof Layout> = {
  component: Layout,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
  args: {
    children: "Content",
  },
};

export const SignedIn: Story = {
  args: {},
  render: () => {
    const user = {
      email: "kermit@muppets.com",
      name: "Kermit The Frog",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg",
    };

    const fakeSession = {
      update: () => Promise.resolve({}),
      data: { user, expires: "" },
      status: "authenticated",
    };

    return (
      <SessionContext.Provider value={fakeSession as SessionContextValue}>
        <Layout>Content</Layout>
      </SessionContext.Provider>
    );
  },
};
