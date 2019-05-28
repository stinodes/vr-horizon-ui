// @flow
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import { join, split, path, mergeAll, compose } from 'ramda'
import { transparentize } from 'polished'
import withProps from 'recompose/withProps'
import { color } from 'styled-system'
import { interactiveColor, outline, typography } from './styles'
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
  outline({ borderRadius: 2 }),
  {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  shadows,
  ({ disabled }) => disabled && { cursor: 'not-allowed' },
)

const StyledButton = styled(Base)(
  {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    fontFamily: 'Montserrat',
    fontWeight: '700',
  },
  ({ size }) => {
    if (size === 'small') {
      return {
        padding: '8px 16px',
        fontSize: 12,
      }
    }
    return {
      padding: '16px 32px',
      fontSize: 14,
    }
  },
  path(['theme', 'button']),
)
const StyledFloatingButton = styled(Base)(
  {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({ raised }) => ({
    boxShadow: raised && 'rgba(0, 0, 0, .2) 0 8px 16px',
  }),
  path(['theme', 'floatingButton']),
)

const withButtonProps = withProps(({ to, href, bg = 'primary', ...props }) => ({
  as: to ? Link : href ? 'a' : undefined,
  color: 'white',
  bg,
  ...props,
}))
const Button = withButtonProps(StyledButton)
const FloatingButton = withButtonProps(StyledFloatingButton)

export { Base, Button, FloatingButton }