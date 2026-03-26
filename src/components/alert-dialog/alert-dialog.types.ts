import type { AlertDialog as BaseAlertDialog } from '@base-ui/react'

export type AlertDialogProps = React.ComponentProps<typeof BaseAlertDialog.Root>
export type AlertDialogTriggerProps = React.ComponentProps<typeof BaseAlertDialog.Trigger>
export type AlertDialogPopupProps = React.ComponentProps<typeof BaseAlertDialog.Popup>
export type AlertDialogHeaderProps = React.ComponentProps<'div'>
export type AlertDialogTitleProps = React.ComponentProps<typeof BaseAlertDialog.Title>
export type AlertDialogDescriptionProps = React.ComponentProps<typeof BaseAlertDialog.Description>
export type AlertDialogCloseProps = React.ComponentProps<typeof BaseAlertDialog.Close>
export type AlertDialogContentProps = React.ComponentProps<'div'>
export type AlertDialogFooterProps = React.ComponentProps<'div'>
export type AlertDialogConfirmProps = React.ComponentProps<typeof BaseAlertDialog.Close>
