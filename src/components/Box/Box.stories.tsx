import { StoryObj } from "@storybook/react";
import { Box } from "./Box";
import { css } from "@emotion/react";

export default {
  title: "Box",
  component: Box,
};

type Story = StoryObj<typeof Box>;

const wrapper = css`
  div {
    border: 1px solid #999;
  }
`;

export const Base: Story = {
  render: () => <Box>Box</Box>,
};

export const Custom: Story = {
  render: () => (
    <div css={wrapper}>
      <Box m={20}>margin</Box>
      <Box p={20}>padding</Box>
      <Box h={50} w={100}>
        height, width
      </Box>
    </div>
  ),
};
