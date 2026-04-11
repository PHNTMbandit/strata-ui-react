import { cva, type VariantProps } from 'class-variance-authority'

import type { Menu as BaseMenu } from '@base-ui/react/menu'

export type MenuProps = React.ComponentProps<typeof BaseMenu.Root>
export type MenuTriggerProps = React.ComponentProps<typeof BaseMenu.Trigger>
export type MenuPopupProps = React.ComponentProps<typeof BaseMenu.Positioner>
export type MenuSeparatorProps = React.ComponentProps<typeof BaseMenu.Separator>
export type MenuCheckboxItemProps = React.ComponentProps<typeof BaseMenu.CheckboxItem>
export type MenuRadioGroupProps = React.ComponentProps<typeof BaseMenu.RadioGroup>
export type MenuRadioItemProps = React.ComponentProps<typeof BaseMenu.RadioItem>
export type MenuGroupProps = React.ComponentProps<typeof BaseMenu.Group>
export type MenuGroupLabelProps = React.ComponentProps<typeof BaseMenu.GroupLabel>
export type MenuSubmenuProps = React.ComponentProps<typeof BaseMenu.SubmenuRoot>
export type MenuShortcutProps = React.ComponentProps<'div'>

export const menuItemVariants = cva(
  'flex cursor-default items-center px-sm py-3xs style-text-default-0 leading-md outline-none select-none before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md ',
  {
    variants: {
      tone: {
        brand:
          'text-brand-on-surface data-highlighted:text-on-brand-container data-highlighted:before:bg-brand-container data-highlighted:before:outline-brand-outline',
        accent:
          'text-accent-on-surface data-highlighted:text-on-accent-container data-highlighted:before:bg-accent-container data-highlighted:before:outline-accent-outline',
        neutral:
          'data-highlighted:text-on-surface data-highlighted:before:bg-surface-container-2 data-highlighted:before:outline-outline',
        error:
          'text-error-on-surface data-highlighted:text-on-error-container data-highlighted:before:bg-error-container data-highlighted:before:outline-error-outline',
        info: 'text-info-on-surface data-highlighted:text-on-info-container data-highlighted:before:bg-info-container data-highlighted:before:outline-info-outline',
        success:
          'text-success-on-surface data-highlighted:text-on-success-container data-highlighted:before:bg-success-container data-highlighted:before:outline-success-outline',
        warning:
          'text-warning-on-surface data-highlighted:text-on-warning-container data-highlighted:before:bg-warning-container data-highlighted:before:outline-warning-outline',
      },
    },
    defaultVariants: {
      tone: 'neutral',
    },
  },
)

export const menuSubmenuTriggerVariants = cva(
  'grid cursor-default grid-cols-[1fr_2rem] items-center px-sm py-3xs leading-md style-text-default-0 outline-none select-none before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-popup-open:relative data-popup-open:z-0 data-popup-open:before:absolute data-popup-open:before:inset-x-3xs data-popup-open:before:inset-y-[0px] data-popup-open:before:z-[-1] data-popup-open:before:rounded-sm data-popup-open:before:bg-surface-dim',
  {
    variants: {
      tone: {
        brand:
          'text-brand-on-surface data-highlighted:text-on-brand-container data-highlighted:before:bg-brand-container data-highlighted:before:outline-brand-outline data-[highlighted]:data-[popup-open]:before:bg-brand-container',
        accent:
          'text-accent-on-surface data-highlighted:text-on-accent-container data-highlighted:before:bg-accent-container data-highlighted:before:outline-accent-outline data-[highlighted]:data-[popup-open]:before:bg-accent-container',
        neutral:
          'data-highlighted:text-on-surface data-highlighted:before:bg-surface-container-2 data-highlighted:before:outline-outline data-[highlighted]:data-[popup-open]:before:bg-surface-container-2',
        error:
          'text-error-on-surface data-highlighted:text-on-error-container data-highlighted:before:bg-error-container data-highlighted:before:outline-error-outline data-[highlighted]:data-[popup-open]:before:bg-error-container',
        info: 'text-info-on-surface data-highlighted:text-on-info-container data-highlighted:before:bg-info-container data-highlighted:before:outline-info-outline data-[highlighted]:data-[popup-open]:before:bg-info-container',
        success:
          'text-success-on-surface data-highlighted:text-on-success-container data-highlighted:before:bg-success-container data-highlighted:before:outline-success-outline data-[highlighted]:data-[popup-open]:before:bg-success-container',
        warning:
          'text-warning-on-surface data-highlighted:text-on-warning-container data-highlighted:before:bg-warning-container data-highlighted:before:outline-warning-outline data-[highlighted]:data-[popup-open]:before:bg-warning-container',
      },
    },
    defaultVariants: {
      tone: 'neutral',
    },
  },
)

export type MenuItemProps = React.ComponentProps<typeof BaseMenu.Item> &
  VariantProps<typeof menuItemVariants>
export type MenuSubmenuTriggerProps = React.ComponentProps<typeof BaseMenu.SubmenuTrigger> &
  VariantProps<typeof menuSubmenuTriggerVariants>
