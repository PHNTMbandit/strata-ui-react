import { Skeleton } from './skeleton'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    subtitle: 'A component for displaying loading skeletons.',
    description: {
      component:
        'The Skeleton component is used to display placeholder loading skeletons while content is being fetched or loaded. It provides a visual indication to users that data is being loaded, enhancing the user experience during wait times.',
    },
  },
} satisfies Meta<typeof Skeleton>

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => <Skeleton className="h-[200px] w-[450px]" />,
}

export const Circle: Story = {
  render: () => <Skeleton className="size-[50px] rounded-full" />,
}

export const TextBlock: Story = {
  render: () => (
    <div className="space-y-xs">
      <Skeleton className="h-[35px] w-[150px]" />
      <Skeleton className="h-[35px] w-[200px]" />
      <Skeleton className="h-[35px] w-[300px]" />
    </div>
  ),
}
