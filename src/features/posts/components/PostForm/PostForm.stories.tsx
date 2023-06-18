import type { Meta, StoryObj } from "@storybook/react";

import { PostForm } from "./PostForm";

const meta: Meta<typeof PostForm> = {
  component: PostForm,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PostForm>;

export const Primary: Story = {
  args: {},
};
