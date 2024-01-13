import { Input } from '@/shadcn-components/ui/input'
import { twMerge } from 'tailwind-merge'
import { forwardRef, useState } from 'react'

import { XCircleFillIcon } from '@/common/icons'

export type InputSearchProps = {
  containerProps?: React.ComponentProps<'div'>
  inputProps?: React.ComponentProps<typeof Input>
  buttonProps?: React.ComponentProps<'button'>
  value?: string
  onChange?: (value: string) => void
}

function InputSearch({
  containerProps,
  inputProps,
  buttonProps,
  value: externalValue,
  onChange,
}: InputSearchProps) {
  const isControlled = externalValue !== undefined

  const { className: containerClassName, ...restContainerProps } = containerProps ?? {}
  const { className: inputClassName, type = 'text', ...restInputProps } = inputProps ?? {}
  const { className: buttonClassName, ...restButtonProps } = buttonProps ?? {}

  const [innerValue, setInnerValue] = useState(externalValue ?? '')

  const value = isControlled ? externalValue : innerValue

  const containerClasses = twMerge('relative', containerClassName)
  const inputClasses = twMerge('border-none pr-11', inputClassName)
  const buttonClasses = twMerge(
    'absolute inset-y-1 right-2 flex aspect-square items-center justify-center rounded-full bg-slate-800 hover:bg-slate-600 focus:bg-slate-700 text-sm',
    buttonClassName
  )

  const handleValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value

    if (isControlled) onChange?.(value)
    setInnerValue(value)
  }

  const handleClearValue = () => {
    if (isControlled) onChange?.('')
    setInnerValue('')
  }

  return (
    <div {...restContainerProps} className={containerClasses}>
      <Input
        {...restInputProps}
        type={type}
        className={inputClasses}
        value={value}
        onChange={handleValueChange}
      />

      {value.trim() && (
        <button
          {...restButtonProps}
          type="button"
          className={buttonClasses}
          onClick={handleClearValue}
        >
          <XCircleFillIcon label="close" />
        </button>
      )}
    </div>
  )
}

const InputSearchRef = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ inputProps, ...restProps }, ref) => (
    <InputSearch inputProps={{ ref, ...inputProps }} {...restProps} />
  )
)

InputSearchRef.displayName = 'InputSearch'

export { InputSearchRef as InputSearch }
