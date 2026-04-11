import { Toast as BaseToast } from '@base-ui/react/toast'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningIcon,
  XIcon,
} from '@phosphor-icons/react'
import React from 'react'
import { Button } from '../button'
import { cn } from '@/utils/cn'

import type { StackToastItemProps } from './toast.types'

const DURATION = 10000

export const StackToastItem = ({ className, ref, toast, ...props }: StackToastItemProps) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    let frameId: number
    const start = performance.now()

    const update = (now: number) => {
      const elapsed = now - start
      const nextProgress = Math.min(elapsed / (toast.timeout || DURATION), 1)

      setProgress(nextProgress)

      if (nextProgress < 1) {
        frameId = requestAnimationFrame(update)
      }
    }

    frameId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(frameId)
  }, [toast.timeout])

  const getVariantColour = () => {
    switch (toast.data?.variant) {
      case 'brand':
        return 'bg-brand'
      case 'accent':
        return 'bg-accent'
      case 'neutral':
        return 'bg-surface'
      case 'error':
        return 'bg-error'
      case 'info':
        return 'bg-info'
      case 'success':
        return 'bg-success'
      case 'warning':
        return 'bg-warning'
      default:
        return 'bg-surface'
    }
  }

  const getVariantIcon = () => {
    switch (toast.data?.variant) {
      case 'brand':
        return null
      case 'accent':
        return null
      case 'neutral':
        return null
      case 'error':
        return <WarningCircleIcon className="size-lg text-error" weight="duotone" />
      case 'info':
        return <InfoIcon className="size-lg text-info" weight="duotone" />
      case 'success':
        return <CheckCircleIcon className="size-lg text-success" weight="duotone" />
      case 'warning':
        return <WarningIcon className="size-lg text-warning" weight="duotone" />
      default:
        return null
    }
  }

  return (
    <BaseToast.Root
      className={cn(
        "absolute right-[0px] bottom-[0px] left-auto z-[calc(1000-var(--toast-index))] mr-[0px] flex h-(--height) origin-bottom transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] items-center justify-center gap-xs overflow-hidden rounded-xl border border-outline bg-surface-container bg-clip-padding p-sm pb-md shadow-lg select-none [--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s] after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-ending-style:opacity-0 data-expanded:h-(--toast-height) data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))] data-limited:opacity-0 data-starting-style:transform-[translateY(150%)] data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))] data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(150%)]",
        className,
      )}
      key={toast.id}
      ref={ref}
      toast={toast}
      {...props}
    >
      {getVariantIcon()}
      <BaseToast.Content
        className={
          'flex items-center justify-center gap-xs overflow-hidden transition-opacity duration-250 data-behind:pointer-events-none data-behind:opacity-0 data-expanded:pointer-events-auto data-expanded:opacity-100'
        }
      >
        <div className="space-y-3xs">
          <BaseToast.Title className={'style-text-strong--1'} />
          <BaseToast.Description
            className={'style-text-prose--1 whitespace-nowrap text-on-surface-variant'}
          />
        </div>
        <div className="ml-xl flex items-center justify-center gap-xs">
          <BaseToast.Action
            render={(e) => (
              <Button onClick={e.onClick} size={'small'} tone={toast.data?.variant}>
                {e.children}
              </Button>
            )}
          />
          <BaseToast.Close
            aria-label="Close"
            render={(e) => (
              <Button onClick={e.onClick} size="iconXSmall" variant="ghost" tone="error">
                {' '}
                <XIcon className="size-sm shrink-0" weight="bold" />
              </Button>
            )}
          />
        </div>
      </BaseToast.Content>
      <div className="absolute bottom-[0px] left-[0px] h-2xs w-full border-t border-outline-variant bg-surface-dim outline outline-outline">
        <div className={cn('h-full', getVariantColour())} style={{ width: `${progress * 100}%` }} />
      </div>
    </BaseToast.Root>
  )
}
