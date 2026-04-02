import type { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import type React from 'react'

export type AccordionProps = React.ComponentProps<typeof BaseAccordion.Root>
export type AccordionPanelProps = React.ComponentProps<typeof BaseAccordion.Panel>

export type AccordionItemProps = React.ComponentProps<typeof BaseAccordion.Item> &
  React.ComponentProps<typeof BaseAccordion.Trigger>

export type AccordionTriggerProps = React.ComponentProps<typeof BaseAccordion.Trigger>
