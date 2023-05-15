import { StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

export default {
  title: "Switch",
  component: Switch,
};

type Story = StoryObj<typeof Switch>;

export const Base: Story = {
  render: () => <Switch />,
};
