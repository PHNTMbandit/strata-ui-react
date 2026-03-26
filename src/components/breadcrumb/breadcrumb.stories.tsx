import { BookIcon, HouseIcon } from '@phosphor-icons/react'
import { Breadcrumb } from './breadcrumb'
import { BreadcrumbEllipsis } from './breadcrumb-ellipsis'
import { BreadcrumbItem } from './breadcrumb-item'
import { BreadcrumbLink } from './breadcrumb-link'
import { BreadcrumbSeparator } from './breadcrumb-separator'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbEllipsis,
    BreadcrumbSeparator,
  },
  parameters: {
    docs: {
      subtitle: 'Displays a breadcrumb navigation component.',
      description: {
        component:
          'The Breadcrumb component provides a navigational aid that helps users understand their current location within a website or application hierarchy. It typically displays a series of links representing the path from the homepage to the current page, allowing users to easily navigate back to previous sections.',
      },
    },
  },
  args: {
    style: 'solid',
  },
} satisfies Meta<typeof Breadcrumb>

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbLink>
        <BookIcon weight="bold" />
        Documentation
      </BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbEllipsis />
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <HouseIcon weight="fill" />
        Home
      </BreadcrumbItem>
    </Breadcrumb>
  ),
}
export const Item: Story = {
  render: () => (
    <BreadcrumbItem>
      <HouseIcon weight="bold" />
      Home
    </BreadcrumbItem>
  ),
}
export const Link: Story = {
  render: () => (
    <BreadcrumbLink>
      <BookIcon weight="bold" />
      Documentation
    </BreadcrumbLink>
  ),
}
export const Ellipsis: Story = {
  render: () => <BreadcrumbEllipsis />,
}

export const Separator: Story = {
  render: () => <BreadcrumbSeparator />,
}
