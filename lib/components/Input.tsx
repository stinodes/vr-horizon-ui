import React, {
  ReactNode,
  SyntheticEvent,
  Attributes,
  InputHTMLAttributes,
  useContext,
} from 'react'
import { pick, filter, compose, flatten } from 'ramda'
import {
  layout,
  flexbox,
  space,
  color,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system'
import { ThemeContext } from '@emotion/core'
import { transparentize } from 'polished'
import { Text, TextProps } from './Text'
import { Flex } from './Flex'
import { Outline } from './Outline'
import { styled, getColor } from '../utils'
import { Theme } from '../theme'

const BaseInput = styled('input')<
  TextProps & { bg?: string; border?: string; highlight?: boolean }
>(
  {
    background: 'none',
    outline: 'none',
    width: '100%',
    textOverflow: 'ellipsis',
    borderRadius: 2,
    padding: '8px 16px',
    transition: 'border-color .2s ease',
  },
  ({ theme, border, highlight }) => ({
    fontFamily: theme.fontFamily,
    fontSize: 16,
    color: getColor('darks.2', theme),
    border: `1px solid ${getColor(
      highlight ? border || 'lights.0' : 'lights.0',
      theme,
    )}`,
    ':focus, :hover': {
      borderColor: getColor(border ? border : 'primaries.2', theme),
    },
  }),
  color,
)

type InputProps = {
  disabled?: boolean
  error?: boolean
  border?: string
  highlight?: boolean
} & InputHTMLAttributes<HTMLInputElement>
export const MappedInput = ({
  value,
  disabled,
  error,
  border,
  highlight,
  ...props
}: InputProps) => {
  const theme = useContext(ThemeContext) as Theme
  const borderColor = getColor(error ? 'error' : border || 'primaries.2', theme)
  const outline = transparentize(0.5, borderColor)
  return (
    <Outline color={outline} borderRadius={2}>
      <BaseInput
        id={props.name}
        value={value || undefined}
        highlight={highlight || error}
        bg="white"
        {...props}
        border={borderColor}
      />
    </Outline>
  )
}

const StyledLabel = Text.withComponent('label')
type LabelProps = {
  children: ReactNode
  for?: string
}
export const Label = ({ children, ...props }: LabelProps) => (
  <Flex pt={2} pb="4px">
    <StyledLabel {...props} fontSize={12}>
      {children}
    </StyledLabel>
  </Flex>
)

const inputLayoutKeys = flatten(filter(arr => !!arr, [
  layout.propNames,
  flexbox.propNames,
  space.propNames,
]) as string[][])

type LabeledInputProps = {
  label?: string
} & InputProps &
  FlexboxProps &
  SpaceProps &
  LayoutProps
export const Input = ({ label, ...props }: LabeledInputProps) => {
  const layoutProps = pick(inputLayoutKeys, props)
  return (
    <Flex flexDirection="column" {...layoutProps}>
      {label && <Label for={props.name}>{label}</Label>}
      <MappedInput {...props} />
    </Flex>
  )
}
Input.displayName = 'Input'

export const TextArea = styled(Text.withComponent('textarea'))(
  { height: 150, outline: 'none', border: 'none' },
  layout,
  flexbox,
)
