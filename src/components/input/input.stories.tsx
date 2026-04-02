import { Input } from './input'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      subtitle: 'A versatile text input component for user data entry.',
      description: {
        component:
          'The Input component is a versatile and customizable text input field that allows users to enter and edit text. It supports various features such as placeholder text, labels, icons, and validation states. The Input component is designed to be accessible and user-friendly, making it suitable for a wide range of applications including forms, search bars, and data entry fields.',
      },
    },
  },
  args: {
    placeholder: 'Enter text...',
  },
  render: (args: React.ComponentProps<typeof Input>) => <Input {...args} id="input" />,
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const Colour: Story = {
  args: {
    type: 'color',
  },
}
