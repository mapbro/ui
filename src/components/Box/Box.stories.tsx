import { StoryObj } from "@storybook/react";
import { Box } from "./Box";

export default {
  title: "Box",
  component: Box,
};

type Story = StoryObj<typeof Box>;

export const Base: Story = {
  render: () => <Box>Box</Box>,
};
