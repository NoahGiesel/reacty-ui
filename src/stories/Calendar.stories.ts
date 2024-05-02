import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "../components";

const meta = {
  title: "Calendar/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { startDate: new Date() },
};
