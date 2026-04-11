import { Switch } from './switch'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: [],
  parameters: {
    docs: {
      subtitle: 'A toggle switch component for binary choices.',
      description: {
        component:
          'The Switch component allows users to toggle between two states, such as on and off. It is commonly used in forms and settings to represent binary options. The Switch can be customized with different sizes and tones to fit various design needs.',
      },
    },
  },
  args: {
    label: 'Enable Notifications',
  },
  render: (args) => <Switch {...args} id="switch" />,
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

export const Default: Story = {}
