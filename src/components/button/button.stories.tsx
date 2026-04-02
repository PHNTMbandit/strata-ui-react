import { PlusIcon } from '@phosphor-icons/react'
import { Button } from './button'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      subtitle: 'Displays a button or a component that looks like a button.',
      description: {
        component:
          'The Button component is a versatile and reusable UI element that allows users to perform actions with a single click. It supports various tones, styles, and sizes to fit different design needs and contexts. Buttons can be used for form submissions, triggering events, or navigating between views.',
      },
    },
  },
  args: {
    children: 'Click Me',
    size: 'medium',
    variant: 'solid',
    tone: 'brand',
    disabled: false,
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: 'radio',
      options: ['solid', 'ghost'],
    },
    size: {
      control: 'radio',
      options: [
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'iconXSmall',
        'iconSmall',
        'iconMedium',
        'iconLarge',
        'iconXLarge',
      ],
    },
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

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

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
}

export const ExtraSmall: Story = {
  args: {
    size: 'xsmall',
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

export const ExtraLarge: Story = {
  args: {
    size: 'xlarge',
  },
}

export const IconExtraSmall: Story = {
  args: {
    children: <PlusIcon weight="bold" />,
    size: 'iconXSmall',
  },
}

export const IconSmall: Story = {
  args: {
    children: <PlusIcon weight="bold" />,
    size: 'iconSmall',
  },
}

export const IconMedium: Story = {
  args: {
    children: <PlusIcon weight="bold" />,
    size: 'iconMedium',
  },
}

export const IconLarge: Story = {
  args: {
    children: <PlusIcon weight="bold" />,
    size: 'iconLarge',
  },
}

export const IconExtraLarge: Story = {
  args: {
    children: <PlusIcon weight="bold" />,
    size: 'iconXLarge',
  },
}
