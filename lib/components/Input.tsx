import React, { ReactNode, SyntheticEvent } from 'react'
import { Text, TextProps } from './Text'
import { Flex } from './Flex'
import { Outline } from './Outline'
import { styled } from '../utils'
import { layout, flexbox } from 'styled-system'

export const BaseInput = styled(Text.withComponent('input'))<TextProps>({
  background: 'none',
  border: 'none',
  outline: 'none',
  width: '100%',
  textOverflow: 'ellipsis',
})
const StyledLabel = Text.withComponent('label')

type Props = {
  placeholder?: string
  name: string
  value: null | string
  disabled?: boolean
  onChange: (e: SyntheticEvent<HTMLInputElement>) => any
  onBlur: (e: SyntheticEvent<HTMLInputElement>) => any
  type?: string
  error?: boolean
  id?: string
}
export const Input = ({
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  disabled,
  error,
  type,
  id,
  ...props
}: Props) => (
  <Outline outline={error && 'fadedError'} py={2} px={4} {...props}>
    <BaseInput
      id={id}
      type={type}
      name={name}
      value={value || undefined}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
    />
  </Outline>
)

type LabelProps = {
  children: ReactNode
  small?: boolean
  for?: string
}
export const Label = ({ children, small, ...props }: LabelProps) => (
  <Flex pt={2} px={4}>
    <StyledLabel {...props} fontWeight={700} fontSize={small ? 12 : 16}>
      {children}
    </StyledLabel>
  </Flex>
)

type LabeledInputProps = {
  label: string
  value: null | string
  name: string
  disabled?: boolean
  smallLabel?: boolean
  onChange: (e: SyntheticEvent<HTMLInputElement>) => any
  onBlur: (e: SyntheticEvent<HTMLInputElement>) => any
  error?: boolean
}
export const LabeledInput = ({
  label,
  value,
  name,
  onChange,
  onBlur,
  disabled,
  error,
  smallLabel,
  ...props
}: LabeledInputProps) => {
  return (
    <Flex {...props} flexDirection="column">
      <Label for={name} small={smallLabel}>
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        placeholder={label}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        error={error}
        value={value}
      />
    </Flex>
  )
}
export const TextArea = styled(Text.withComponent('textarea'))(
  { height: 150, outline: 'none', border: 'none' },
  layout,
  flexbox,
)
