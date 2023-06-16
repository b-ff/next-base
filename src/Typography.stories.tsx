import type { Meta, StoryObj } from "@storybook/react";
import { FC, ReactNode } from "react";

const Dummy: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;

const meta: Meta<typeof Dummy> = {
  component: Dummy,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dummy>;

export const Primary: Story = {
  args: {
    children: "Sample text",
  },
  render: ({ children }) => (
    <>
      <h1>{children}</h1>
      <br />
      <h2>{children}</h2>
      <br />
      <h3>{children}</h3>
      <br />
      <h4>{children}</h4>
      <br />
      <div>
        <strong>{children}</strong>
      </div>
      <br />
      <p>{children}</p>
    </>
  ),
};

export const H1: Story = {
  args: {
    children: "Sample text",
  },
  render: ({ children }) => <h1>{children}</h1>,
};

export const H2: Story = {
  args: {
    children: "Sample text",
  },
  render: ({ children }) => <h2>{children}</h2>,
};

export const H3: Story = {
  args: {
    children: "Sample text",
  },
  render: ({ children }) => <h3>{children}</h3>,
};

export const H4: Story = {
  args: {
    children: "Sample text",
  },
  render: ({ children }) => <h4>{children}</h4>,
};

export const Strong: Story = {
  args: {
    children: "Sample text",
  },
  render: ({ children }) => <strong>{children}</strong>,
};

export const RegularText: Story = {
  args: {
    children: "Sample text",
  },
  render: ({ children }) => <p>{children}</p>,
};
