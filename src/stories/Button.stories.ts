import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components";

const meta: Meta<typeof Button> = {
  title: "Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Click me" },
};
