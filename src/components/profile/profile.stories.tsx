import { CaretUpDownIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { Popover, PopoverDescription, PopoverPanel, PopoverTitle, PopoverTrigger } from '../popover'
import { Profile } from './profile'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    docs: {
      subtitle: 'A component for displaying user profile information.',
      description: {
        component:
          "The Profile component is designed to showcase user information such as name, avatar, and bio. It is typically used in user dashboards, account settings, and social media platforms to provide a comprehensive view of the user's identity and details.",
      },
    },
  },
  args: {
    imageUrl: 'https://github.com/shadcn.png',
    fallbackText: 'JS',
    profileName: 'John Smith',
    profileEmail: 'john.smith@example.com',
    compact: false,
  },
} satisfies Meta<typeof Profile>

type Story = StoryObj<typeof Profile>

export const Default: Story = {}
export const Compact: Story = {
  args: {
    compact: true,
  },
}
export const WithChildren: Story = {
  render: (args) => (
    <Profile {...args} className="w-[400px]">
      <CaretUpDownIcon />
    </Profile>
  ),
}
export const AsButton: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger>
        <Button variant={'ghost'} tone="neutral" size={'large'}>
          <Profile {...args} className="w-[400px]">
            <CaretUpDownIcon />
          </Profile>
        </Button>
      </PopoverTrigger>
      <PopoverPanel side="top">
        <PopoverTitle>Profile Options</PopoverTitle>
        <PopoverDescription>View your profile, settings, or log out.</PopoverDescription>
      </PopoverPanel>
    </Popover>
  ),
}
