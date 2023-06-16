import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {
  args: {
    name: "John Doe",
  },
};

export const Image: Story = {
  args: {
    name: "Kermit The Frog",
    src: "https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg",
    size: 50,
  },
};

export const CustomSize: Story = {
  args: {
    name: "Kermit The Frog",
    src: "https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg",
    size: 100,
  },
};
