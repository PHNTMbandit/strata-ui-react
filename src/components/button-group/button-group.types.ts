import { cva } from 'class-variance-authority'

import type { VariantProps } from 'class-variance-authority'

export const buttonGroupVariants = cva('flex gap-px', {
  variants: {
    orientation: {
      horizontal:
        'flex-row *:shrink-0 [&>*:first-child]:data-[size=xsmall]:rounded-l-md [&>*:first-child]:data-[size=small]:rounded-l-lg [&>*:first-child]:data-[size=medium]:rounded-l-xl [&>*:first-child]:data-[size=large]:rounded-l-2xl [&>*:first-child]:data-[size=xlarge]:rounded-l-3xl [&>*:first-child]:data-[size=iconXSmall]:rounded-l-md [&>*:first-child]:data-[size=iconSmall]:rounded-l-lg [&>*:first-child]:data-[size=iconMedium]:rounded-l-xl [&>*:first-child]:data-[size=iconLarge]:rounded-l-2xl [&>*:first-child]:data-[size=iconXLarge]:rounded-l-3xl [&>*:first-child]:rounded-r-none [&>*:last-child]:data-[size=xsmall]:rounded-r-md [&>*:last-child]:data-[size=small]:rounded-r-lg [&>*:last-child]:data-[size=medium]:rounded-r-xl [&>*:last-child]:data-[size=large]:rounded-r-2xl [&>*:last-child]:data-[size=xlarge]:rounded-r-3xl [&>*:last-child]:data-[size=iconXSmall]:rounded-r-md [&>*:last-child]:data-[size=iconSmall]:rounded-r-lg [&>*:last-child]:data-[size=iconMedium]:rounded-r-xl [&>*:last-child]:data-[size=iconLarge]:rounded-r-2xl [&>*:last-child]:data-[size=iconXLarge]:rounded-r-3xl [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:rounded-none',
      vertical:
        'flex-col [&>*:first-child]:data-[size=xsmall]:rounded-t-md [&>*:first-child]:data-[size=small]:rounded-t-lg [&>*:first-child]:data-[size=medium]:rounded-t-xl [&>*:first-child]:data-[size=large]:rounded-t-2xl [&>*:first-child]:data-[size=xlarge]:rounded-t-3xl [&>*:first-child]:data-[size=iconXSmall]:rounded-t-md [&>*:first-child]:data-[size=iconSmall]:rounded-t-lg [&>*:first-child]:data-[size=iconMedium]:rounded-t-xl [&>*:first-child]:data-[size=iconLarge]:rounded-t-2xl [&>*:first-child]:data-[size=iconXLarge]:rounded-t-3xl [&>*:first-child]:rounded-b-none [&>*:last-child]:data-[size=xsmall]:rounded-b-md [&>*:last-child]:data-[size=small]:rounded-b-lg [&>*:last-child]:data-[size=medium]:rounded-b-xl [&>*:last-child]:data-[size=large]:rounded-b-2xl [&>*:last-child]:data-[size=xlarge]:rounded-b-3xl [&>*:last-child]:data-[size=iconXSmall]:rounded-b-md [&>*:last-child]:data-[size=iconSmall]:rounded-b-lg [&>*:last-child]:data-[size=iconMedium]:rounded-b-xl [&>*:last-child]:data-[size=iconLarge]:rounded-b-2xl [&>*:last-child]:data-[size=iconXLarge]:rounded-b-3xl [&>*:last-child]:rounded-t-none [&>*:not(:first-child):not(:last-child)]:rounded-none',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export type ButtonGroupProps = React.ComponentProps<'div'> &
  VariantProps<typeof buttonGroupVariants>
