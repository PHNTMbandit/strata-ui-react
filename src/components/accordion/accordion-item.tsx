import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { type AccordionItemProps, accordionItemVariants } from './accordion.types'
import { cn } from '@/utils/cn'

export const AccordionItem = ({
  tone = 'neutral',
  className,
  children,
  ref,
  ...props
}: AccordionItemProps) => {
  return (
    <BaseAccordion.Item
      className={cn(accordionItemVariants({ className, tone }))}
      ref={ref}
      {...props}
    >
      <BaseAccordion.Header>{children}</BaseAccordion.Header>
    </BaseAccordion.Item>
  )
}
