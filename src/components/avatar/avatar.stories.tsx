import { PlusIcon } from '@phosphor-icons/react'
import { Avatar } from './avatar'
import { AvatarBadge } from './avatar-badge'
import { AvatarFallback } from './avatar-fallback'
import { AvatarImage } from './avatar-image'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback },
  parameters: {
    docs: {
      subtitle: 'A component for displaying user profile images or initials.',
      description: {
        component:
          'The Avatar component is used to represent a user or entity visually. It can display either an image or the initials of the user when an image is not available. This component is commonly used in user profiles, comments, and messaging interfaces to provide a personal touch and enhance user recognition.',
      },
    },
  },
  args: {
    size: 'medium',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src={'https://github.com/shadcn.png'} />
    </Avatar>
  ),
} satisfies Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
  },
}
export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const WithFallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>SU</AvatarFallback>
    </Avatar>
  ),
}

type BadgeStory = StoryObj<typeof AvatarBadge>

export const Badge: BadgeStory = {
  args: {
    tone: 'success',
    position: 'bottomRight',
  },
  argTypes: {
    tone: {
      options: ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
    position: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: { type: 'select' },
    },
  },
  render: (args) => (
    <Avatar size="medium">
      <AvatarImage src={'https://github.com/shadcn.png'} />
      <AvatarBadge {...args} />
    </Avatar>
  ),
}

export const BadgeWithIcon: BadgeStory = {
  args: {
    tone: 'neutral',
    position: 'bottomRight',
  },
  argTypes: {
    tone: {
      options: ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
    position: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: { type: 'select' },
    },
  },
  render: (args) => (
    <Avatar>
      <AvatarImage src={'https://github.com/shadcn.png'} />
      <AvatarBadge {...args}>
        <PlusIcon weight="bold" />
      </AvatarBadge>
    </Avatar>
  ),
}
