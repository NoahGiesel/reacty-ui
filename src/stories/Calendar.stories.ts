import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "../components";

const meta: Meta<typeof Calendar> = {
  title: "Calendar/Calendar",
  component: Calendar,
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
  args: { startDate: new Date() },
};
