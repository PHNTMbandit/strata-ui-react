import { Button } from '../button'
import { RadarPing } from './radar-ping'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Radar Ping',
  component: RadarPing,
  parameters: {
    docs: {
      subtitle:
        'The Radar Ping component is used to indicate a location or point of interest on a map or radar interface. It typically consists of a pulsating circle that draws attention to the specified location.',
      description: {
        component:
          'The Radar Ping component is designed to visually represent a point of interest on a map or radar interface. It uses a pulsating animation to draw attention to the specified location, making it easier for users to identify important areas or objects. The component can be customized with different tones and sizes to fit various design needs.',
      },
    },
  },
  args: {
    hidePing: false,
    tone: 'brand',
    size: 'medium',
  },
  argTypes: {
    tone: {
      description: 'The tone of the radar ping, which determines its color scheme.',
      control: {
        type: 'select',
        options: ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'],
      },
    },
    size: {
      description: 'The size of the radar ping, which determines its dimensions and spacing.',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  render: (args) => (
    <div className={'relative inline-flex'}>
      <Button tone="neutral">New Notifications</Button>
      <RadarPing {...args} />
    </div>
  ),
} satisfies Meta<typeof RadarPing>

type Story = StoryObj<typeof RadarPing>

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

export const ErrorTone: Story = {
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

export const NotificationAmountSmall: Story = {
  args: {
    size: 'small',
  },
  render: (args) => (
    <div className={'relative inline-flex'}>
      <Button size={'small'} tone="neutral">
        New Notifications
      </Button>
      <RadarPing {...args}>5</RadarPing>
    </div>
  ),
}

export const NotificationAmountMedium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => (
    <div className={'relative inline-flex'}>
      <Button size={'medium'} tone="neutral">
        New Notifications
      </Button>
      <RadarPing {...args}>12</RadarPing>
    </div>
  ),
}

export const NotificationAmountLarge: Story = {
  args: {
    size: 'large',
  },
  render: (args) => (
    <div className={'relative inline-flex'}>
      <Button size={'large'} tone="neutral">
        New Notifications
      </Button>
      <RadarPing {...args}>99</RadarPing>
    </div>
  ),
}
