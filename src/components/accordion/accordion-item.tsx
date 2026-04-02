import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { type AccordionItemProps } from './accordion.types'
import { cn } from '@/utils/cn'

export const AccordionItem = ({ className, children, ref, ...props }: AccordionItemProps) => {
  return (
    <BaseAccordion.Item
      className={cn(
        'overflow-hidden rounded-lg bg-surface-container elevation-xs outline outline-outline-variant transition-colors [&:has(>:nth-child(1):hover)]:outline-brand-outline',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAccordion.Item>
  )
}
