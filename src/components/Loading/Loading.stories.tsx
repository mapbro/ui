import { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Loading',
  component: Loading,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#999',
          height: '100vh',
          margin: '-16px',
          padding: '16px',
        }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Base: Story = {
  render: () => <Loading loading />,
};

export const Size: Story = {
  render: () => (
    <>
      <Loading
        loading
        size={30}
        style={{
          marginRight: '40px',
        }}
      />
      <Loading
        loading
        size={60}
        style={{
          marginRight: '40px',
        }}
      />
      <Loading
        loading
        size={90}
        style={{
          marginRight: '40px',
        }}
      />
    </>
  ),
};
