// @flow
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import { mergeAll, compose } from 'ramda'
import withProps from 'recompose/withProps'
import { color } from 'styled-system'
import { interactiveColor, outline, typography } from './styles'
import { Flex } from './Container'

const Base = styled('button')(
  interactiveColor(
    compose(
      mergeAll,
      color,
    ),
  ),
  typography,
  outline({ borderRadius: 2 }),
  {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
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
)

const withButtonProps = withProps(({ to, bg, disabled, href, ...props }) => ({
  as: to ? Link : href ? 'a' : undefined,
  bg: disabled ? 'disabled' : bg || 'accent',
  color: 'white',
  ...props,
}))
const Button = withButtonProps(Flex.withComponent(StyledButton))
const FloatingButton = withButtonProps(Flex.withComponent(StyledFloatingButton))

export { Base, Button, FloatingButton }
