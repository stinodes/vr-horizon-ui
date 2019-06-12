// @flow
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import { prop, join, split, path, mergeAll, compose } from 'ramda'
import { transparentize } from 'polished'
import withProps from 'recompose/withProps'
import { color } from 'styled-system'
import { customize, interactiveColor, outline, typography } from './styles'
import { Flex } from './Container'

const buttonColor = interactiveColor(
  compose(
    mergeAll,
    color,
  ),
)

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

const Base = styled(Flex.withComponent('button'))(
  buttonColor,
  typography,
  {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  shadows,
  ({ disabled }) => disabled && { cursor: 'not-allowed' },
)

const BaseWithOutline = styled(Base)(outline())

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
    fontWeight: '700',
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
  ({ raised }) => ({
    boxShadow: raised && 'rgba(0, 0, 0, .2) 0 8px 16px',
  }),
  floatingButton,
)

const withButtonProps = (defaults: {}) =>
  withProps(({ to, href, ...props }) => ({
    ...defaults,
    as: to ? Link : href ? 'a' : undefined,
    ...props,
  }))
const styledButtonDefaults = {
  color: 'white',
  bg: 'primary',
}
const BaseButton = withButtonProps({ bg: 'transparent' })(BaseWithOutline)
const Button = withButtonProps(styledButtonDefaults)(StyledButton)
const FloatingButton = withButtonProps(styledButtonDefaults)(
  StyledFloatingButton,
)

export { BaseButton, Button, FloatingButton }
