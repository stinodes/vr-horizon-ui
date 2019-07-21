import styled, { StyledComponent } from '@emotion/styled'
import { ComponentType, SyntheticEvent } from 'react'
import { prop, join, split, path, mergeAll, compose } from 'ramda'
import { transparentize } from 'polished'
import withProps from 'recompose/withProps'
import { color } from 'styled-system'
import { customize, interactiveColor, outline, typography } from './styles'
import { Flex } from './Container'
import {
  FlexProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  FlexDirectionProperty,
} from 'csstype'

const buttonColor = interactiveColor(
  compose(
    mergeAll,
    color,
  ),
)

type ColorProps = { bg?: string; color?: string }
type ShadowProps = {
  bg?: string | string[]
  raised?: boolean
  important?: boolean
}
type DisabledProps = { disabled?: boolean }

const shadows = ({
  theme: { colors },
  bg = colors.primary,
  raised,
  important,
}) => {
  const shadows = []
  if (raised) shadows.push('rgba(0, 0, 0, .2) 0 8px 16px')
  if (important)
    shadows.push(
      `${transparentize(0.5)(path(split('.', bg), colors))} 0 0 24px`,
    )
  return {
    boxShadow: join(',', shadows),
  }
}

const Base = styled(Flex.withComponent('button'))<
  DisabledProps & ShadowProps & ColorProps
>(
  buttonColor,
  typography,
  {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  shadows,
  ({ disabled }) => (disabled ? { cursor: 'not-allowed' } : {}),
)

const BaseWithOutline = styled(Base)<DisabledProps & ShadowProps & ColorProps>(
  outline(),
)

const button = customize('button', ({ size }) => {
  if (size === 'small') {
    return {
      padding: '8px 16px',
      fontSize: 12,
      borderRadius: 2,
    }
  } else if (size === 'circle') {
    return {
      width: 48,
      height: 48,
      borderRadius: 24,
    }
  }
  return {
    padding: '16px 32px',
    fontSize: 14,
    borderRadius: 2,
  }
})
const StyledButton = styled(Base)(
  {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  outline({
    borderRadius: compose(
      prop('borderRadius'),
      button,
    ),
  }),
  button,
)

const floatingButton = customize('floatingButton', ({ size }) => ({
  width: size,
  height: size,
  borderRadius: size * 0.5,
}))
const StyledFloatingButton = styled(Base)(
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline({
    borderRadius: compose(
      prop('borderRadius'),
      floatingButton,
    ),
  }),
  floatingButton,
)

const withButtonProps = (defaults: {}) =>
  withProps(({ as: asProp, href, ...props }: any) => ({
    ...defaults,
    as: asProp || (href ? 'a' : undefined),
    href,
    ...props,
  }))

const styledButtonDefaults = {
  color: 'white',
  bg: 'primary',
}

type BaseButtonProps = {
  onClick?: (SyntheticEvent) => any
  href?: string
  bg?: string
  color?: string
  raised?: boolean
  important?: boolean
  disabled?: boolean
}
type FlexProps = {
  flex?: FlexProperty<void>
  flexDirection?: FlexDirectionProperty
  alignItems?: AlignItemsProperty
  alignSelf?: AlignSelfProperty
  justifyContent?: JustifyContentProperty
}
const BaseButton: ComponentType<BaseButtonProps & FlexProps> = withButtonProps({
  bg: 'transparent',
})(BaseWithOutline)

type StyledButtonProps = {
  size?: string
}
const Button: ComponentType<
  BaseButtonProps & StyledButtonProps
> = withButtonProps(styledButtonDefaults)(StyledButton)

const FloatingButton: ComponentType<BaseButtonProps> = withButtonProps(
  styledButtonDefaults,
)(StyledFloatingButton)

export { BaseButton, Button, FloatingButton }
