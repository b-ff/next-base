import type { Meta, StoryObj } from "@storybook/react";

import { Post } from "./Post";
import { Post as PostModel } from "@/schema";

const meta: Meta<typeof Post> = {
  component: Post,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Post>;

const fakePost: PostModel = {
  id: 1,
  userId: "that-exact-user-id",
  title: "For whom the bell tolls?",
  body: "For those who refuse to take action and cross the boundaries. For those who complaining instead of doing things. For them we shall fire the torch and spread the light.",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const Primary: Story = {
  args: {
    post: fakePost,
  },
};
