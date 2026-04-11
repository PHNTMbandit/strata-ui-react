import { SpeakerHighIcon, SpeakerLowIcon } from '@phosphor-icons/react'
import { Slider } from './slider'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      subtitle: 'A component for selecting a value from a range.',
      description: {
        component:
          'The Slider component allows users to select a value from a continuous or discrete range by dragging a thumb along a track. It is commonly used in forms and settings where users need to adjust values such as volume, brightness, or other numerical inputs. The Slider can be customized with different sizes, tones, and step values to fit various design needs.',
      },
    },
  },
  args: {
    label: 'Volume',
    description: 'Adjust the volume level',
    defaultValue: 50,
    step: 1,
    min: 0,
    max: 100,
    showMin: false,
    showMax: false,
  },
  argTypes: {
    leadingIcon: {
      table: {
        disable: true,
      },
    },
    trailingIcon: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <Slider
      {...args}
      className="h-[100px] w-[500px]"
      leadingIcon={args.leadingIcon ? args.leadingIcon : undefined}
      trailingIcon={args.trailingIcon ? args.trailingIcon : undefined}
    />
  ),
} satisfies Meta<typeof Slider>

type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
}

export const WithIcons: Story = {
  args: {
    leadingIcon: SpeakerLowIcon,
    trailingIcon: SpeakerHighIcon,
  },
}

export const range: Story = {
  args: {
    defaultValue: [20, 80],
  },
}
