import { InfoIcon } from '@phosphor-icons/react'
import { Accordion } from './accordion'
import { AccordionItem } from './accordion-item'
import { AccordionPanel } from './accordion-panel'
import { AccordionTrigger } from './accordion-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionPanel,
    AccordionTrigger,
  },
  parameters: {
    docs: {
      subtitle: 'A component for displaying collapsible content sections.',
      description: {
        component:
          'The Accordion component allows users to expand and collapse sections of content. It is useful for organizing large amounts of information into manageable sections, improving the user experience by reducing clutter on the page. Each section can be expanded or collapsed independently, and the component can be customized with different styles and behaviors.',
      },
    },
  },
} satisfies Meta<typeof Accordion>

type Story = StoryObj<typeof Accordion>

export const Single: Story = {
  render: (args) => (
    <Accordion {...args} className={'w-[500px]'}>
      <AccordionItem>
        <AccordionTrigger>
          <InfoIcon weight="duotone" />
          Accordion Item 1
        </AccordionTrigger>
        <AccordionPanel>
          <p>
            This is some generic content inside the accordion panel. You can place any information,
            details, or interactive elements here to provide more context or actions related to the
            accordion item.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
}

export const MultipleItems: Story = {
  args: {},
  render: (args) => (
    <Accordion {...args} className={'w-[500px]'}>
      <AccordionItem>
        <AccordionTrigger>
          <InfoIcon weight="duotone" />
          Accordion Item 1
        </AccordionTrigger>
        <AccordionPanel>
          <p>
            This is some generic content inside the accordion panel. You can place any information,
            details, or interactive elements here to provide more context or actions related to the
            accordion item.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>
          <InfoIcon weight="duotone" />
          Accordion Item 2
        </AccordionTrigger>
        <AccordionPanel>
          <p>
            This is some generic content inside the accordion panel. You can place any information,
            details, or interactive elements here to provide more context or actions related to the
            accordion item.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
}
