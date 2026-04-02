import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { cn } from '@/utils/cn'

import type { AccordionPanelProps } from './accordion.types'

export const AccordionPanel = ({ className, children, ref, ...props }: AccordionPanelProps) => {
  return (
    <BaseAccordion.Panel
      className={cn(
        `h-(--accordion-panel-height) overflow-hidden border-t border-outline transition-all duration-300 ease-out data-ending-style:h-[0px] data-starting-style:h-[0px]`,
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="px-md py-sm">{children}</div>
    </BaseAccordion.Panel>
  )
}
