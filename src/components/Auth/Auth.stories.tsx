import type { Meta, StoryObj } from "@storybook/react";

import { Auth } from "./Auth";
import { SessionContext, SessionContextValue } from "next-auth/react";
import { Session } from "next-auth";

const meta: Meta<typeof Auth> = {
  component: Auth,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Auth>;

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
        <Auth />
      </SessionContext.Provider>
    );
  },
};

export const SignedOut: Story = {
  args: {},
};
