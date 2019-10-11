import { transparentize } from 'polished'
import { color, typography } from 'styled-system'
import { join, compose, prop, mergeAll } from 'ramda'
import { CSSObject } from '@emotion/css'
import { interactiveColor, outline } from './styles'
import { Flex, FlexProps } from './Flex'
import { getColor, styled } from '../utils'
import { Theme } from '../theme'

const buttonColor: (
  props: ColorProps & DisabledProps,
) => CSSObject = interactiveColor(
  compose(
    mergeAll,
    color,
  ),
)

type ColorProps = { bg?: string; color?: string }
type ShadowProps = {
  bg?: string
  raised?: boolean
  glow?: boolean
}
type DisabledProps = { disabled?: boolean }

const shadows = ({
  theme,
  bg = 'primary',
  raised,
  glow,
}: ShadowProps & { theme: Theme }) => {
  const shadows = []
  if (raised) shadows.push('rgba(0, 0, 0, .2) 0 8px 16px')
  if (glow) shadows.push(`${transparentize(0.5, getColor(bg, theme))} 0 0 24px`)
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
BaseWithOutline.displayName = 'FlexButton'

type SizeProps = { size?: 'regular' | 'small' | 'circle' }
const button = ({ size }: SizeProps) => {
  if (size === 'small') {
    return {
      padding: '8px 16px',
      fontSize: 14,
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

type StyledProps = BaseProps & SizeProps
const StyledButton = styled(Base)<StyledProps>(
  {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 600,
  } as CSSObject,
  outline({
    borderRadius: (props: {}) => button(props).borderRadius,
  }),
  button,
)
StyledButton.displayName = 'Button'

const floatingButton = ({ size = 64 }: { size?: number }) => ({
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
    borderRadius: (props: {}) => floatingButton(props).borderRadius,
  }),
  floatingButton,
)
StyledFloatingButton.displayName = 'FloatingButton'

export const FlexButton = BaseWithOutline
export const Button = StyledButton
export const FloatingButton = StyledFloatingButton
