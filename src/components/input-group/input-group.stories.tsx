import { CheckIcon, CircleNotchIcon, MagnifyingGlassIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { Kbd } from '../kbd'
import { InputGroup } from './input-group'
import { InputGroupAddon } from './input-group-addon'
import { InputGroupInput } from './input-group-input'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Input Group',
  component: InputGroup,
  subcomponents: {
    InputGroupAddon,
    InputGroupInput,
  },
  parameters: {
    docs: {
      subtitle: 'A component for grouping related input fields together.',
      description: {
        component:
          'The Input Group component is designed to group related input fields together, providing a cohesive and organized user interface. It allows for the combination of multiple input elements, such as text fields, dropdowns, or buttons, into a single unit. This component is particularly useful for forms that require multiple inputs that are logically connected, such as address fields (street, city, state) or search filters (category, price range). The Input Group enhances the user experience by visually associating related inputs and improving the overall layout of forms.',
      },
    },
  },
} satisfies Meta<typeof InputGroup>

type Story = StoryObj<typeof InputGroup>

export const Icon: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon>
        <MagnifyingGlassIcon weight="bold" />
      </InputGroupAddon>
      <InputGroupInput placeholder="First input" />
      <InputGroupAddon>
        <CheckIcon weight="bold" />
      </InputGroupAddon>
    </InputGroup>
  ),
}
export const Text: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon>$</InputGroupAddon>
      <InputGroupInput placeholder="First input" />
      <InputGroupAddon>AUD</InputGroupAddon>
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupInput placeholder="First input" />
      <InputGroupAddon>
        <Button size={'small'} tone="neutral">
          Submit
        </Button>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const KBD: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupInput placeholder="First input" />
      <InputGroupAddon>
        <Kbd>⌘ K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const Spinner: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupInput placeholder="First input" />
      <InputGroupAddon>
        Saving
        <CircleNotchIcon className="size-sm animate-spin" weight="bold" />
      </InputGroupAddon>
    </InputGroup>
  ),
}
