// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { path } from 'ramda'
import { Text } from './Text'
import { Flex } from './Container'
import { Outline } from './Outline'
import { flexBox, layout } from './styles'
import { errorOutline } from '../Utils'

export const BaseInput = styled(Text.withComponent('input'))(
  {
    background: 'none',
    border: 'none',
    outline: 'none',
    width: '100%',
    textOverflow: 'ellipsis',
  },
  path(['theme', 'input']),
)

type Props = {
  placeholder: string,
  name: string,
  value: ?string,
  disabled?: boolean,
  onChange: Event => any,
  onBlur: Event => any,
  type?: string,
  error?: boolean,
  id?: string,
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
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
    />
  </Outline>
)

type LabelProps = {
  children: React.Node,
  small?: boolean,
  for?: string,
}
export const Label = ({ children, small, ...props }: LabelProps) => (
  <Flex pt={2} px={4}>
    <Text {...props} as="label" fontWeight="700" fontSize={small ? 12 : 16}>
      {children}
    </Text>
  </Flex>
)

type LabeledInputProps = {
  label: string,
  value: ?string,
  name: string,
  disabled?: boolean,
  smallLabel?: boolean,
  onChange: Event => any,
  onBlur: Event => any,
  error?: boolean,
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
  flexBox,
)
