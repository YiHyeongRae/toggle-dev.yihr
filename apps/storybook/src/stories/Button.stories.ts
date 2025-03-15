import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "",
    children: "다음",
  },
};
export const Hover: Story = {
  args: {
    className: "hover:opacity-80",
    children: "다음",
  },
};

export const Active: Story = {
  args: {
    className: "active:opacity-80",
    children: "다음",
  },
};
