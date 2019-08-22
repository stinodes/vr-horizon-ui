import { transparentize } from 'polished'
import { color, typography } from 'styled-system'
import { interactiveColor, outline } from './styles'
import { Flex, FlexProps } from './Flex'
import { getColor, styled } from '../utils'
import { join, compose, prop, mergeAll } from 'ramda'
import { CSSObject } from '@emotion/css'

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
  theme,
  bg = getColor('primary', theme),
  raised,
  important,
}) => {
  const shadows = []
  if (raised) shadows.push('rgba(0, 0, 0, .2) 0 8px 16px')
  if (important)
    shadows.push(`${transparentize(0.5, getColor(bg, theme))} 0 0 24px`)
  return {
    boxShadow: join(',', shadows),
  }
}

type BaseProps = FlexProps & DisabledProps & ShadowProps & ColorProps
const Base = styled(Flex.withComponent('button'))<BaseProps>(
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

const BaseWithOutline = styled(Base)<BaseProps>(outline())

const button = ({ size }) => {
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
}
type StyledProps = BaseProps & { size?: 'regular' | 'small' | 'circle' }
const StyledButton = styled(Base)<StyledProps>(
  {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 600,
  } as CSSObject,
  outline({
    borderRadius: compose(
      prop('borderRadius'),
      button,
    ),
  }),
  button,
)

const floatingButton = ({ size }) => ({
  width: size,
  height: size,
  borderRadius: size * 0.5,
})
const StyledFloatingButton = styled(Base)<BaseProps & { size?: number }>(
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

export const FlexButton = BaseWithOutline
export const Button = StyledButton
export const FloatingButton = StyledFloatingButton
