import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  component: Flex,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    children: ["Element 1", "Element 2", "Element 3"],
  },
};
