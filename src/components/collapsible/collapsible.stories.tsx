import { Button } from '../button'
import { Collapsible } from './collapsible'
import { CollapsiblePanel } from './collapsible-panel'
import { CollapsibleTrigger } from './collapsible-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
  subcomponents: {
    CollapsiblePanel,
    CollapsibleTrigger,
  },
  parameters: {
    subtitle: 'A component that allows content to be expanded and collapsed.',
    description: {
      component:
        'The Collapsible component is used to create sections of content that can be expanded or collapsed by the user. It is useful for managing large amounts of content in a compact space.',
    },
  },
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger>
        <Button>Click to Toggle</Button>
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <p>This is the content inside the collapsible panel.</p>
      </CollapsiblePanel>
    </Collapsible>
  ),
} as Meta<typeof Collapsible>

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {}
