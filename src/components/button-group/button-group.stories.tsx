import { CaretDownIcon, MinusIcon, PlusIcon } from '@phosphor-icons/react'
import { Button } from '../button/button'
import { Input } from '../input/index'
import { ButtonGroup } from './button-group'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
  parameters: {
    docs: {
      subtitle: 'A component for grouping buttons together.',
      description: {
        component:
          'The Button Group component is used to group related buttons together, providing a cohesive user interface. It supports both horizontal and vertical orientations, allowing for flexible layouts. The component can be easily customized with additional styles and properties as needed.',
      },
    },
  },
  argTypes: {
    orientation: {
      description: 'The orientation of the button group.',
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>

type Story = StoryObj<typeof ButtonGroup>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="iconXSmall">
        <PlusIcon weight="bold" />
      </Button>
      <Button size="iconXSmall">
        <MinusIcon weight="bold" />
      </Button>
    </ButtonGroup>
  ),
}

export const Solid: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="solid">Button 1</Button>
      <Button variant="solid">Button 2</Button>
      <Button variant="solid">Button 3</Button>
    </ButtonGroup>
  ),
}

export const InputWithButton: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Input placeholder="Search..." />
      <Button tone="neutral" size={'iconMedium'}>
        <PlusIcon weight="bold" />
      </Button>
    </ButtonGroup>
  ),
}

export const MixedTextIcon: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Open</Button>
      <Button size={'iconMedium'}>
        <CaretDownIcon weight="bold" />
      </Button>
    </ButtonGroup>
  ),
}

export const XSmall: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="xsmall">Button 1</Button>
      <Button size="xsmall">Button 2</Button>
      <Button size="xsmall">Button 3</Button>
    </ButtonGroup>
  ),
}

export const Small: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="small">Button 1</Button>
      <Button size="small">Button 2</Button>
      <Button size="small">Button 3</Button>
    </ButtonGroup>
  ),
}

export const Medium: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="medium">Button 1</Button>
      <Button size="medium">Button 2</Button>
      <Button size="medium">Button 3</Button>
    </ButtonGroup>
  ),
}

export const Large: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="large">Button 1</Button>
      <Button size="large">Button 2</Button>
      <Button size="large">Button 3</Button>
    </ButtonGroup>
  ),
}

export const ExtraLarge: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="xlarge">Button 1</Button>
      <Button size="xlarge">Button 2</Button>
      <Button size="xlarge">Button 3</Button>
    </ButtonGroup>
  ),
}
