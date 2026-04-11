import { PlusIcon } from '@phosphor-icons/react'
import { Badge } from './badge'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      subtitle: 'Displays a small badge to indicate status or count.',
      description: {
        component:
          'The Badge component is a compact element used to display status information, counts, or labels. It can be styled with different tones and sizes to fit various design requirements. Badges are commonly used in user interfaces to highlight new notifications, statuses, or categories.',
      },
    },
  },
  args: {
    children: 'Badge',
    size: 'medium',
    variant: 'light',
    tone: 'brand',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the badge.',
    },
    tone: {
      control: 'select',
      options: ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: 'radio',
      options: ['light', 'solid'],
    },
  },
  render: (args) => (
    <Badge {...args}>
      <PlusIcon weight="bold" />
      Badge
    </Badge>
  ),
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const Brand: Story = {
  args: {
    tone: 'brand',
  },
}

export const Accent: Story = {
  args: {
    tone: 'accent',
  },
}

export const Neutral: Story = {
  args: {
    tone: 'neutral',
  },
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a story name
export const Error: Story = {
  args: {
    tone: 'error',
  },
}

export const Info: Story = {
  args: {
    tone: 'info',
  },
}

export const Success: Story = {
  args: {
    tone: 'success',
  },
}

export const Warning: Story = {
  args: {
    tone: 'warning',
  },
}

export const Light: Story = {
  args: {
    variant: 'light',
  },
}

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
}
