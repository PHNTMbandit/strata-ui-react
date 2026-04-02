import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { CaretDownIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { AccordionTriggerProps } from './accordion.types'

export const AccordionTrigger = ({ className, children, ref, ...props }: AccordionTriggerProps) => {
  return (
    <BaseAccordion.Header>
      <BaseAccordion.Trigger
        data-accordion-trigger
        className={cn(
          'group flex h-2xl w-full items-center gap-sm border-b border-outline-variant pr-sm pl-md style-text-strong-1 hover:cursor-pointer [&>svg]:size-md',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        <CaretDownIcon
          className="ml-auto size-sm! text-on-surface-variant transition-transform duration-300 group-data-panel-open:rotate-180"
          weight="bold"
        />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  )
}
