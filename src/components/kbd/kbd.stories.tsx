import { CommandIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { Kbd } from './kbd'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Kbd',
  component: Kbd,
  render: (args) => <Kbd {...args}>Space</Kbd>,
} satisfies Meta<typeof Kbd>

type Story = StoryObj<typeof Kbd>

export const Text: Story = {}

export const Icon: Story = {
  render: (args) => (
    <Kbd {...args}>
      <CommandIcon />
    </Kbd>
  ),
}
export const WithButton: Story = {
  render: (args) => (
    <Button>
      Generate
      <Kbd {...args}>
        <p>Enter</p>
      </Kbd>
    </Button>
  ),
}
