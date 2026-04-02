import { Input as BaseInput } from '@base-ui/react/input'
import { useRef } from 'react'
import { cn } from '@/utils/cn'

import type { InputProps } from './input.types'

export const Input = ({ className, ref, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const colorPreviewRef = useRef<HTMLDivElement>(null)
  const colorLabelRef = useRef<HTMLParagraphElement>(null)

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value
    if (colorPreviewRef.current) {
      colorPreviewRef.current.style.backgroundColor = color
    }
    if (colorLabelRef.current) {
      colorLabelRef.current.textContent = color
    }
  }

  if (props.type === 'color') {
    const value = (props.value as string) ?? '#000000'

    return (
      <button
        aria-label="Open color picker"
        className="relative h-xl w-[calc(var(--spacing-3xl)+5rem)] items-center rounded-xl bg-surface-container pl-xs style-text-prose-0 elevation-xs outline outline-outline-variant transition-all focus-within:caret-brand focus-within:outline-brand-outline hover:cursor-pointer hover:not-focus-within:outline-outline data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 hover:data-[disabled=true]:outline-transparent"
        onClick={() => inputRef.current?.click()}
        type="button"
      >
        <div
          className={cn(
            'absolute top-1/2 left-[0px] aspect-square h-full -translate-y-1/2 rounded-l-xl border-r border-outline',
          )}
          ref={colorPreviewRef}
          style={{
            backgroundColor: value,
          }}
        />
        <BaseInput
          className="peer pointer-events-none invisible absolute top-lg"
          onChange={handleColorChange}
          ref={inputRef}
          type="color"
          value={value}
          {...props}
        />
        <p className="pl-xl text-left style-text-default-0" ref={colorLabelRef}>
          {value}
        </p>
      </button>
    )
  }

  return (
    <BaseInput
      className={cn(
        'flex h-xl w-full items-center gap-xs rounded-xl bg-surface-container p-sm style-text-prose-0 text-ellipsis elevation-xs outline outline-outline-variant transition-all placeholder:opacity-85 focus-within:caret-brand focus-within:outline-brand-outline hover:not-focus-within:outline-outline disabled:cursor-not-allowed data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 hover:data-[disabled=true]:outline-transparent',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}
